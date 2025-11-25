import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function RatingSystem() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Rating Bar */}
      <div className="flex flex-col items-center gap-3 py-6">
        <h2 className="text-xl font-semibold">Rate Your Experience</h2>

        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.div
              key={star}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              onClick={() => {
                setRating(star);
                setOpen(true);
              }}
            >
              <Star
                className={`w-8 h-8 transition ${
                  star <= (hover || rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-500"
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Card className="w-80 shadow-2xl rounded-2xl">
              <CardContent className="p-4 space-y-3">
                <h3 className="text-lg font-semibold">Leave Feedback</h3>
                <p className="text-sm text-gray-400">
                  You rated us <span className="font-bold">{rating}</span> ⭐
                </p>

                <Input placeholder="Your name (optional)" />

                <Textarea
                  placeholder="Write your feedback..."
                  className="resize-none h-24"
                />

                <div className="flex justify-end gap-2 pt-2">
                  <Button
                    variant="ghost"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      setOpen(false);
                      alert("Thanks for sharing your feedback!");
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
