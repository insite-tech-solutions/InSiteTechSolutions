"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

const BlogNewsSection = () => {
  return (
    <div className="py-16 flex justify-center items-center w-full">
      <div className="w-full max-w-4xl rounded-3xl bg-gradient-to-br from-blue-500 via-blue-800 to-blue-600 shadow-2xl p-2 md:p-8 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full max-w-2xl"
        >
          <Card className="rounded-3xl shadow-2xl border-0 bg-white/30 backdrop-blur-lg">
            <CardHeader className="flex flex-col items-center gap-3">
              <Badge className="mb-2 px-4 py-2 bg-blue-600/10 text-blue-900 border-blue-300 text-base font-semibold tracking-wide shadow-sm backdrop-blur-md" variant="secondary">
                <Newspaper className="mr-2 h-6 w-6 text-blue-700 animate-pulse" />
                News & Blog
              </Badge>
              <CardTitle className="text-4xl font-extrabold text-center text-blue-50 drop-shadow-lg">
                Latest from our Blog & News
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-4 py-4">
                <span className="text-lg text-blue-800 font-medium text-center">
                  🚧 Under Construction 🚧
                </span>
                <p className="text-gray-700 text-center max-w-md">
                  Our blog and news section is coming soon! We&apos;ll be sharing updates, insights, and the latest from InSite Tech Solutions here. Check back soon for fresh content and company news.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogNewsSection;
