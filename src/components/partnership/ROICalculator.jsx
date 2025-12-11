import React, { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Users, DollarSign, Calendar, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ROICalculator() {
  const [visitors, setVisitors] = useState(100);
  const [ticketPrice, setTicketPrice] = useState(50);
  const [operatingDays, setOperatingDays] = useState(250);

  const annualRevenue = useMemo(() => {
    return visitors * ticketPrice * operatingDays;
  }, [visitors, ticketPrice, operatingDays]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">ROI Calculator</h3>
        <p className="text-gray-600">Estimate your potential annual revenue</p>
      </div>

      <div className="space-y-8">
        {/* Daily Visitors */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#559e2a]/10 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-[#559e2a]" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Daily Visitors</div>
                <div className="text-sm text-gray-500">Average guests per day</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-[#559e2a]">{visitors}</div>
          </div>
          <Slider
            value={[visitors]}
            onValueChange={(value) => setVisitors(value[0])}
            min={10}
            max={500}
            step={10}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>10</span>
            <span>500</span>
          </div>
        </div>

        {/* Ticket Price */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#559e2a]/10 rounded-xl flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-[#559e2a]" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Ticket Price (ZAR)</div>
                <div className="text-sm text-gray-500">Per guest entry fee</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-[#559e2a]">R{ticketPrice}</div>
          </div>
          <Slider
            value={[ticketPrice]}
            onValueChange={(value) => setTicketPrice(value[0])}
            min={100}
            max={500}
            step={10}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>R100</span>
            <span>R500</span>
          </div>
        </div>

        {/* Operating Days */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#559e2a]/10 rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#559e2a]" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Operating Days</div>
                <div className="text-sm text-gray-500">Days open per year</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-[#559e2a]">{operatingDays}</div>
          </div>
          <Slider
            value={[operatingDays]}
            onValueChange={(value) => setOperatingDays(value[0])}
            min={30}
            max={365}
            step={5}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>30</span>
            <span>365</span>
          </div>
        </div>

        {/* Result */}
        <div className="bg-gradient-to-br from-[#559e2a] to-[#3a7019] rounded-2xl p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-white/80 mb-2">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm font-medium">Potential Annual Revenue</span>
          </div>
          <div className="text-4xl md:text-5xl font-bold text-white">
            {formatCurrency(annualRevenue)}
          </div>
          <p className="text-white/70 text-sm mt-3">
            Based on {visitors} daily visitors × R{ticketPrice} × {operatingDays} days
          </p>
        </div>
      </div>
    </motion.div>
  );
}