"use client";

import { useState } from "react";
import Link from "next/link";

interface SubjectScore {
  name: string;
  total: number;
  obtained: number;
  grade: string;
  remarks: string;
}

interface StudentData {
  id: string;
  name: string;
  fatherName: string;
  dob: string;
  className: string;
  section: string;
  rollNo: string;
  avatar: string;
  term: string;
  academicYear: string;
  attendance: {
    month: string;
    totalDays: number;
    presentDays: number;
    absentDays: number;
    percentage: number;
  };
  subjects: SubjectScore[];
}

const SAMPLE_STUDENT: StudentData = {
  id: "AB-4012",
  name: "Muhammad Ali",
  fatherName: "Tariq Hussain",
  dob: "14th March 2016",
  className: "4th Class",
  section: "Blue Stars (Section A)",
  rollNo: "AB-2026-4012",
  avatar: "/images/students_transparent.png",
  term: "Mid-Term Assessment",
  academicYear: "2025 - 2026",
  attendance: {
    month: "October 2026 (Ongoing)",
    totalDays: 24,
    presentDays: 23,
    absentDays: 1,
    percentage: 95.8,
  },
  subjects: [
    {
      name: "Mathematics",
      total: 100,
      obtained: 94,
      grade: "A+",
      remarks: "Exceptional numerical reasoning & mental math",
    },
    {
      name: "English Language",
      total: 100,
      obtained: 88,
      grade: "A",
      remarks: "Strong vocabulary, fluent reading and grammar",
    },
    {
      name: "General Science",
      total: 100,
      obtained: 91,
      grade: "A",
      remarks: "Great curiosity, active in lab experiments",
    },
  ],
};

export default function StudentProgressPage() {
  const [searchId, setSearchId] = useState("AB-4012");
  const [submitted, setSubmitted] = useState(true);
  const [student, setStudent] = useState<StudentData>(SAMPLE_STUDENT);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In this sample demo, any search input populates and displays the progress report
    setSubmitted(true);
    setStudent({
      ...SAMPLE_STUDENT,
      id: searchId.trim() || "AB-4012",
      rollNo: searchId.trim() ? `AB-${searchId.trim().toUpperCase()}` : SAMPLE_STUDENT.rollNo,
    });
  };

  const totalObtained = student.subjects.reduce((sum, s) => sum + s.obtained, 0);
  const totalMax = student.subjects.reduce((sum, s) => sum + s.total, 0);
  const overallPercentage = Math.round((totalObtained / totalMax) * 100);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Sticky Academic Navbar */}
      <header className="sticky top-0 z-50 w-full bg-white border-b-4 border-[#f7c815] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <img src="/logo.png" alt="Ahlul Bait Public School Logo" className="h-14 w-auto object-contain" />
            <div>
              <h1 className="text-xl font-bold text-[#0f3b73] leading-tight group-hover:text-blue-800 transition-colors">
                Ahlul Bait
              </h1>
              <p className="text-xs text-slate-500 font-semibold tracking-wider uppercase">Public School</p>
            </div>
          </Link>
          <nav className="flex items-center gap-4 md:gap-6 font-medium text-[#0f3b73]">
            <Link href="/" className="hover:text-[#f7c815] transition-colors py-1 text-sm md:text-base">
              Home
            </Link>
            <span className="px-4 py-1.5 bg-[#0f3b73] text-[#f7c815] rounded text-sm font-bold shadow-sm">
              Student Progress
            </span>
          </nav>
        </div>
      </header>

      {/* Search Header Banner */}
      <section className="bg-[#0f3b73] text-white py-12 px-4 border-b-8 border-[#f7c815]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#f7c815] text-sm uppercase tracking-widest font-bold">Academic Assessment Portal</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4 tracking-tight">Student Progress Report</h2>
          <p className="text-blue-200 text-sm md:text-base max-w-xl mx-auto mb-8">
            Access live academic evaluation, monthly subject grades, and attendance metrics by entering the student registration number.
          </p>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="Enter Student ID (e.g. AB-4012)..."
                className="w-full px-5 py-3.5 rounded-lg text-slate-900 bg-white border-2 border-transparent focus:border-[#f7c815] focus:outline-none shadow-md font-medium"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3.5 bg-[#f7c815] hover:bg-yellow-400 text-[#0f3b73] font-bold rounded-lg shadow-md hover:shadow-lg transition-all uppercase tracking-wide text-sm whitespace-nowrap"
            >
              Search Progress
            </button>
          </form>

          {/* Demo Hint */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-blue-300">
            <span>Demo Portal:</span>
            <button
              type="button"
              onClick={() => {
                setSearchId("AB-4012");
                setSubmitted(true);
              }}
              className="underline hover:text-[#f7c815] transition-colors"
            >
              Click here to load Sample Student (ID: AB-4012)
            </button>
          </div>
        </div>
      </section>

      {/* Student Report Card Section */}
      <main className="max-w-5xl w-full mx-auto px-4 py-10 flex-1">
        {submitted && (
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
            {/* Report Card Top Ribbon */}
            <div className="bg-slate-900 text-white p-6 border-b-4 border-[#f7c815] flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <img src="/logo.png" alt="School Emblem" className="h-16 w-auto object-contain bg-white/10 p-1 rounded" />
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">AHLUL BAIT PUBLIC SCHOOL</h3>
                  <p className="text-xs text-[#f7c815] font-semibold tracking-wider uppercase">
                    A Project of Ashghrai Organization • Tharushah
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Comprehensive Student Progress Record ({student.academicYear})</p>
                </div>
              </div>

              <div className="text-right flex flex-col items-center md:items-end">
                <span className="px-3 py-1 bg-[#f7c815] text-[#0f3b73] rounded font-bold text-xs uppercase tracking-wider">
                  Official Transcript
                </span>
                <span className="text-xs text-slate-400 mt-1">ID: {student.id}</span>
              </div>
            </div>

            {/* Student Biographical Info Card */}
            <div className="p-6 md:p-8 bg-slate-50 border-b border-slate-200">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Student Avatar / Photo */}
                <div className="relative w-36 h-36 rounded-2xl overflow-hidden bg-[#0f3b73] border-4 border-[#f7c815] shadow-lg shrink-0 flex items-center justify-center">
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-full h-full object-cover object-top scale-125"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-slate-950/80 text-[10px] text-center text-white py-0.5 font-bold uppercase">
                    Student ID: {student.id}
                  </div>
                </div>

                {/* Details Grid */}
                <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                    <span className="text-xs text-slate-500 font-medium block">Student Full Name</span>
                    <span className="text-base font-bold text-[#0f3b73]">{student.name}</span>
                  </div>

                  <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                    <span className="text-xs text-slate-500 font-medium block">Father's Name</span>
                    <span className="text-base font-bold text-slate-800">{student.fatherName}</span>
                  </div>

                  <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                    <span className="text-xs text-slate-500 font-medium block">Class & Grade</span>
                    <span className="text-base font-bold text-[#0f3b73]">{student.className}</span>
                  </div>

                  <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                    <span className="text-xs text-slate-500 font-medium block">Date of Birth (DOB)</span>
                    <span className="text-base font-bold text-slate-800">{student.dob}</span>
                  </div>

                  <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                    <span className="text-xs text-slate-500 font-medium block">Section</span>
                    <span className="text-base font-bold text-slate-800">{student.section}</span>
                  </div>

                  <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                    <span className="text-xs text-slate-500 font-medium block">Academic Status</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full mt-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Enrolled & Active
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Attendance & Performance Summary Cards */}
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-slate-200">
              {/* Monthly Attendance Card */}
              <div className="bg-white p-6 rounded-xl border-2 border-blue-100 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-base font-bold text-[#0f3b73]">Attendance Record</h4>
                    <p className="text-xs text-slate-500">{student.attendance.month}</p>
                  </div>
                  <span className="text-2xl font-black text-[#0f3b73]">{student.attendance.percentage}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-100 h-3.5 rounded-full overflow-hidden mb-4 border border-slate-200">
                  <div
                    className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${student.attendance.percentage}%` }}
                  ></div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-slate-50 p-2 rounded border border-slate-100">
                    <span className="text-slate-500 block">Working Days</span>
                    <span className="font-bold text-slate-800 text-sm">{student.attendance.totalDays}</span>
                  </div>
                  <div className="bg-emerald-50 p-2 rounded border border-emerald-100">
                    <span className="text-emerald-700 block">Present</span>
                    <span className="font-bold text-emerald-800 text-sm">{student.attendance.presentDays}</span>
                  </div>
                  <div className="bg-rose-50 p-2 rounded border border-rose-100">
                    <span className="text-rose-700 block">Absent</span>
                    <span className="font-bold text-rose-800 text-sm">{student.attendance.absentDays}</span>
                  </div>
                </div>
              </div>

              {/* Cumulative Result Card */}
              <div className="bg-white p-6 rounded-xl border-2 border-amber-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base font-bold text-[#0f3b73]">Mid-Term Assessment Aggregate</h4>
                    <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded">
                      Passed with Distinction
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-4">Total Score: {totalObtained} / {totalMax} Marks</p>
                </div>

                <div className="flex items-center justify-between bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <div>
                    <span className="text-xs text-slate-500 font-semibold uppercase block">Overall Percentage</span>
                    <span className="text-3xl font-black text-[#0f3b73]">{overallPercentage}%</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 font-semibold uppercase block">Grade Awarded</span>
                    <span className="text-3xl font-black text-amber-500">A+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subject Marks Table */}
            <div className="p-6 md:p-8">
              <h4 className="text-lg font-bold text-[#0f3b73] mb-4">Subject-wise Academic Performance</h4>
              
              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#0f3b73] text-white">
                      <th className="py-3 px-4 font-semibold">Subject</th>
                      <th className="py-3 px-4 font-semibold text-center">Max Marks</th>
                      <th className="py-3 px-4 font-semibold text-center">Marks Obtained</th>
                      <th className="py-3 px-4 font-semibold text-center">Grade</th>
                      <th className="py-3 px-4 font-semibold">Teacher's Evaluation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {student.subjects.map((sub, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                        <td className="py-3.5 px-4 font-bold text-[#0f3b73]">{sub.name}</td>
                        <td className="py-3.5 px-4 text-center font-medium text-slate-600">{sub.total}</td>
                        <td className="py-3.5 px-4 text-center font-bold text-slate-900">{sub.obtained}</td>
                        <td className="py-3.5 px-4 text-center">
                          <span className="inline-block px-2.5 py-0.5 rounded text-xs font-black bg-blue-100 text-[#0f3b73]">
                            {sub.grade}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 italic text-xs">{sub.remarks}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-slate-100 font-bold border-t-2 border-slate-300">
                      <td className="py-3.5 px-4 text-[#0f3b73]">Total Summary</td>
                      <td className="py-3.5 px-4 text-center text-slate-700">{totalMax}</td>
                      <td className="py-3.5 px-4 text-center text-[#0f3b73] text-base">{totalObtained}</td>
                      <td className="py-3.5 px-4 text-center text-emerald-700">A+</td>
                      <td className="py-3.5 px-4 text-xs font-semibold text-slate-700">
                        Result: Promoted / Excellent Standing
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Signatures & Verification Block */}
              <div className="mt-10 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-xs text-slate-500">
                <div>
                  <div className="h-12 border-b border-dashed border-slate-400 mb-2 flex items-end justify-center pb-1">
                    <span className="font-serif italic text-sm text-slate-700">Ms. Fatima Zahra</span>
                  </div>
                  <span>Class Teacher Signature</span>
                </div>
                <div>
                  <div className="h-12 border-b border-dashed border-slate-400 mb-2 flex items-end justify-center pb-1">
                    <span className="font-serif italic text-sm text-[#0f3b73] font-bold">Ahlul Bait Examination Seal</span>
                  </div>
                  <span>Controller of Examinations</span>
                </div>
                <div>
                  <div className="h-12 border-b border-dashed border-slate-400 mb-2 flex items-end justify-center pb-1">
                    <span className="font-serif italic text-sm text-slate-700">Syed Ali Raza</span>
                  </div>
                  <span>Principal Signature</span>
                </div>
              </div>

              {/* Print Action Button */}
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-lg shadow transition-all flex items-center gap-2 text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Print Official Transcript
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#0f3b73] text-blue-200 py-10 text-center border-t-4 border-[#f7c815] mt-12">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-bold text-white text-base">Ahlul Bait Public School - Student Portal</p>
          <p className="text-xs text-blue-300 mt-1">For discrepancies in report cards, please contact the administrative office at 📞 03028886164</p>
          <p className="text-blue-400 text-xs mt-4">© 2026 Ahlul Bait Public School. A Project of Ashghrai Organization.</p>
        </div>
      </footer>
    </div>
  );
}
