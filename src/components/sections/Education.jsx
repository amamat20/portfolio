import { motion } from "framer-motion"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  Legend,
} from "recharts"
import SectionTitle from "../ui/SectionTitle"
import { education } from "../../data/education"

// Custom tooltip for the chart
function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#111111] border border-[#1A1A1A] rounded-lg px-4 py-3">
        <p className="text-[#9CA3AF] text-xs mb-1">{label}</p>
        <p className="text-[#39FF14] font-heading font-bold text-lg">
          {payload[0].value.toFixed(2)}
        </p>
        <p className="text-[#9CA3AF] text-xs">GPA</p>
      </div>
    )
  }
  return null
}

// Custom legend
function CustomLegend() {
  const average =
    education.semesters.reduce((sum, s) => sum + s.gpa, 0) /
    education.semesters.length

  return (
    <div className="flex flex-wrap items-center gap-5 mt-4 justify-center">
      <div className="flex items-center gap-2">
        <div className="w-4 h-px bg-[#39FF14]" style={{ boxShadow: "0 0 6px #39FF14" }} />
        <span className="text-[#9CA3AF] text-xs">Semester GPA</span>
      </div>
      <div className="flex items-center gap-2">
        <div
          className="w-4 h-px"
          style={{
            borderTop: "2px dashed #00FF99",
          }}
        />
        <span className="text-[#9CA3AF] text-xs">
          My average ({average.toFixed(2)})
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div
          className="w-4 h-px"
          style={{
            borderTop: "2px dashed #9CA3AF",
          }}
        />
        <span className="text-[#9CA3AF] text-xs">Target threshold (3.50)</span>
      </div>
    </div>
  )
}

export default function Education() {
  const average =
    education.semesters.reduce((sum, s) => sum + s.gpa, 0) /
    education.semesters.length

  return (
    <section id="education" className="px-6 py-24 relative">
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#39FF14]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Academic Journey"
          title="Education"
          subtitle="My university path, GPA progress, and academic highlights."
        />

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* University card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1 bg-[#111111] border border-[#1A1A1A] rounded-xl p-6 flex flex-col justify-between hover:border-[#39FF14]/30 transition-colors duration-300"
          >
            <div>
              <span className="text-[#39FF14] text-xs font-medium tracking-widest uppercase">
                University
              </span>
              <h3 className="font-heading font-bold text-[#F5F5F5] text-lg mt-2 leading-snug">
                {education.university}
              </h3>
              <p className="text-[#9CA3AF] text-sm mt-1">{education.major}</p>
              <p className="text-[#9CA3AF] text-sm">{education.year}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1A1A1A]">
              <p className="text-[#9CA3AF] text-xs mb-1">Cumulative GPA</p>
              <div className="flex items-end gap-1">
                <span className="font-heading font-bold text-4xl text-[#39FF14]"
                  style={{ textShadow: "0 0 20px rgba(57,255,20,0.5)" }}>
                  {education.currentGPA.toFixed(2)}
                </span>
                <span className="text-[#9CA3AF] text-sm mb-1">/ {education.maxGPA.toFixed(1)}</span>
              </div>
            </div>
          </motion.div>

          {/* Achievements card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-2 bg-[#111111] border border-[#1A1A1A] rounded-xl p-6 hover:border-[#39FF14]/30 transition-colors duration-300"
          >
            <span className="text-[#39FF14] text-xs font-medium tracking-widest uppercase">
              Achievements
            </span>
            <div className="mt-4 space-y-3">
              {education.achievements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#39FF14] shrink-0"
                    style={{ boxShadow: "0 0 6px #39FF14" }} />
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* GPA Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#111111] border border-[#1A1A1A] rounded-xl p-6 hover:border-[#39FF14]/30 transition-colors duration-300"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-heading font-semibold text-[#F5F5F5] text-lg">
                GPA per Semester
              </h3>
              <p className="text-[#9CA3AF] text-sm mt-0.5">
                Academic performance over time
              </p>
            </div>
            <div className="text-right">
              <p className="text-[#9CA3AF] text-xs">Average</p>
              <p className="font-heading font-bold text-[#00FF99] text-xl">
                {average.toFixed(2)}
              </p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={280}>
            <LineChart
              data={education.semesters}
              margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#1A1A1A"
                vertical={false}
              />
              <XAxis
                dataKey="semester"
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                axisLine={{ stroke: "#1A1A1A" }}
                tickLine={false}
              />
              <YAxis
                domain={[3.0, 4.0]}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickCount={5}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#1A1A1A" }} />

              {/* 3.50 threshold line */}
              <ReferenceLine
                y={3.5}
                stroke="#9CA3AF"
                strokeDasharray="6 4"
                strokeWidth={1.5}
                label={{
                  value: "3.50",
                  position: "insideTopLeft",
                  fill: "#9CA3AF",
                  fontSize: 11,
                  dy: -6,
                }}
              />

              {/* Average line */}
              <ReferenceLine
                y={average}
                stroke="#00FF99"
                strokeDasharray="6 4"
                strokeWidth={1.5}
                label={{
                  value: `Avg ${average.toFixed(2)}`,
                  position: "insideTopRight",
                  fill: "#00FF99",
                  fontSize: 11,
                  dy: -6,
                }}
              />

              {/* GPA line */}
              <Line
                type="monotone"
                dataKey="gpa"
                stroke="#39FF14"
                strokeWidth={2.5}
                dot={{
                  fill: "#39FF14",
                  r: 5,
                  strokeWidth: 0,
                  filter: "drop-shadow(0 0 4px #39FF14)",
                }}
                activeDot={{
                  r: 7,
                  fill: "#39FF14",
                  strokeWidth: 0,
                  filter: "drop-shadow(0 0 8px #39FF14)",
                }}
              />
            </LineChart>
          </ResponsiveContainer>

          <CustomLegend />
        </motion.div>
      </div>
    </section>
  )
}