"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-scroll"
import { ChevronDown, BarChart, PieChart, LineChart, Mail, Linkedin, Github, Code, Globe, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const skills = [
  { icon: BarChart, title: "Data Visualization", desc: "Creating impactful and interactive dashboards" },
  { icon: PieChart, title: "DAX", desc: "Writing efficient DAX queries for complex calculations" },
  { icon: LineChart, title: "Data Modeling", desc: "Designing optimized data models for performance" },
]

const projects = [
  {
    title: "Sales Performance Dashboard",
    desc: "Interactive dashboard showcasing key sales metrics and trends",
    image: "/placeholder.svg?height=300&width=400&text=Sales+Dashboard",
    github: "https://github.com/yourusername/sales-dashboard",
    details: "Utilized Power BI to create a comprehensive sales dashboard with drill-through capabilities and dynamic filtering."
  },
  {
    title: "HR Analytics Report",
    desc: "Comprehensive report on employee performance and retention",
    image: "/placeholder.svg?height=300&width=400&text=HR+Analytics",
    github: "https://github.com/yourusername/hr-analytics",
    details: "Developed an HR analytics solution using Power BI, incorporating predictive analytics for employee churn."
  },
  {
    title: "Financial Analysis Tool",
    desc: "Dynamic tool for analyzing financial data and forecasting",
    image: "/placeholder.svg?height=300&width=400&text=Financial+Analysis",
    github: "https://github.com/yourusername/financial-analysis",
    details: "Created a financial analysis tool with what-if parameters and scenario analysis capabilities."
  },
  {
    title: "Customer Segmentation Model",
    desc: "Advanced segmentation model using clustering algorithms",
    image: "/placeholder.svg?height=300&width=400&text=Customer+Segmentation",
    github: "https://github.com/yourusername/customer-segmentation",
    details: "Implemented a customer segmentation model using K-means clustering in Power BI, integrating with R scripts for advanced analytics."
  },
]

const education = [
  {
    degree: "Bachelor of Science in Data Science",
    institution: "University of Data Analytics",
    year: "2023",
  },
]

const certifications = [
  {
    name: "Microsoft Certified: Power BI Data Analyst Associate",
    issuer: "Microsoft",
    year: "2023",
  },
  {
    name: "Data Analysis and Visualization with Power BI",
    issuer: "Coursera",
    year: "2022",
  },
]

const hobbies = ["Data Visualization", "Machine Learning", "Reading Tech Blogs"]
const languages = ["English (Fluent)", "Hindi (Native)", "Marathi (Native)"]

const skillData = {
  labels: ['Power BI', 'DAX', 'Data Modeling', 'SQL', 'Python', 'Excel'],
  datasets: [
    {
      label: 'Skill Level',
      data: [90, 85, 80, 75, 70, 95],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      borderColor: 'rgb(53, 162, 235)',
      borderWidth: 1,
    },
  ],
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Skill Proficiency',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
    },
  },
}

export default function Portfolio() {
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    setChartData(skillData)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <nav className="fixed top-0 left-0 right-0 z-10 bg-gray-900 bg-opacity-90">
        <ul className="flex justify-center space-x-6 py-4">
          {["Home", "Education", "Skills", "Certifications", "Projects", "Hobbies & Languages", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase().replace(" & ", "-")}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-400 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mb-8"
        >
          <Image
            src="/placeholder.svg?height=200&width=200&text=Your+Photo"
            alt="Shreeram Kulkarni"
            width={200}
            height={200}
            className="rounded-full border-4 border-blue-400"
          />
        </motion.div>
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Shreeram Kulkarni
        </motion.h1>
        <motion.h2
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-2xl md:text-3xl text-blue-400 mb-8"
        >
          Power BI Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl text-lg mb-12"
        >
          Aspiring Power BI developer with a passion for transforming data into actionable insights.
          Ready to bring fresh perspectives and innovative solutions to your team.
        </motion.p>
        <Link to="education" smooth={true} duration={500} className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </Link>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="education"
        className="min-h-screen flex flex-col justify-center items-center px-4 py-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Education</h2>
        <div className="max-w-2xl w-full">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg mb-6"
            >
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-blue-400">{edu.institution}</p>
              <p className="text-sm text-gray-400">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="skills"
        className="min-h-screen flex flex-col justify-center items-center px-4 py-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 p-6 rounded-lg text-center"
            >
              <skill.icon className="mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p>{skill.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg"
        >
          {chartData && <Bar options={chartOptions} data={chartData} />}
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="certifications"
        className="min-h-screen flex flex-col justify-center items-center px-4 py-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Certifications</h2>
        <div className="max-w-2xl w-full">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg mb-6"
            >
              <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
              <p className="text-blue-400">{cert.issuer}</p>
              <p className="text-sm text-gray-400">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="projects"
        className="min-h-screen flex flex-col justify-center items-center px-4 py-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(project.github, "_blank")}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.desc}</p>
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-blue-500 bg-opacity-90 flex flex-col items-center justify-center p-4"
                >
                  <p className="text-white text-sm mb-4 text-center">{project.details}</p>
                  <span className="bg-white text-blue-500 px-4 py-2 rounded-full font-semibold">
                    View on GitHub
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="hobbies-languages"
        className="min-h-screen flex flex-col justify-center items-center px-4 py-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Hobbies & Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Code className="mr-2" /> Hobbies
            </h3>
            <ul className="list-disc list-inside">
              {hobbies.map((hobby, index) => (
                <li key={index} className="mb-2">{hobby}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Globe className="mr-2" /> Languages
            </h3>
            <ul className="list-disc list-inside">
              {languages.map((language, index) => (
                <li key={index} className="mb-2">{language}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center px-4 py-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl w-full">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            <Phone size={24} className="text-blue-400" />
            <p>+91 8308529721</p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center space-x-4"
          >
            <Mail size={24} className="text-blue-400" />
            <a href="mailto:kulkarni.shreerams.mails@gmail.com" className="hover:text-blue-400 transition-colors">
              kulkarni.shreerams.mails@gmail.com
            </a>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center space-x-4"
          >
            <Linkedin size={24} className="text-blue-400" />
            <a href="https://www.linkedin.com/in/shreeram-s-kulkarni-/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              LinkedIn Profile
            </a>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center space-x-4"
          >
            <Github size={24} className="text-blue-400" />
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              GitHub Profile
            </a>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-start space-x-4 col-span-2"
          >
            <MapPin size={24} className="text-blue-400 mt-1" />
            <p>
              Chincholi Tapse, Taluka-Ausa,<br />
              District-Latur, 413516
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}