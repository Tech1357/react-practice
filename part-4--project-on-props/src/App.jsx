import Card from "./components/Card"

export default function App() {

  const jobs = [
  {
    id: 1,
    brandLogo: "https://logo.clearbit.com/amazon.com",
    brandName: "Amazon",
    postedDate: "5 days ago",
    role: "Senior UI/UX Designer",
    jobType: "Part-Time",
    level: "Senior Level",
    payPerHour: 120,
    location: "Mumbai, India"
  },
  {
    id: 2,
    brandLogo: "https://logo.clearbit.com/google.com",
    brandName: "Google",
    postedDate: "2 days ago",
    role: "Frontend Developer",
    jobType: "Full-Time",
    level: "Mid Level",
    payPerHour: 95,
    location: "Bangalore, India"
  },
  {
    id: 3,
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    brandName: "Microsoft",
    postedDate: "1 week ago",
    role: "React Developer",
    jobType: "Full-Time",
    level: "Junior Level",
    payPerHour: 80,
    location: "Hyderabad, India"
  },
  {
    id: 4,
    brandLogo: "https://logo.clearbit.com/apple.com",
    brandName: "Apple",
    postedDate: "3 days ago",
    role: "Product Designer",
    jobType: "Full-Time",
    level: "Senior Level",
    payPerHour: 140,
    location: "Pune, India"
  },
  {
    id: 5,
    brandLogo: "https://logo.clearbit.com/meta.com",
    brandName: "Meta",
    postedDate: "6 days ago",
    role: "UI Designer",
    jobType: "Part-Time",
    level: "Mid Level",
    payPerHour: 110,
    location: "Chennai, India"
  },
  {
    id: 6,
    brandLogo: "https://logo.clearbit.com/netflix.com",
    brandName: "Netflix",
    postedDate: "4 days ago",
    role: "Backend Developer",
    jobType: "Full-Time",
    level: "Senior Level",
    payPerHour: 135,
    location: "Delhi, India"
  },
  {
    id: 7,
    brandLogo: "https://logo.clearbit.com/adobe.com",
    brandName: "Adobe",
    postedDate: "2 weeks ago",
    role: "Graphic Designer",
    jobType: "Part-Time",
    level: "Junior Level",
    payPerHour: 70,
    location: "Noida, India"
  },
  {
    id: 8,
    brandLogo: "https://logo.clearbit.com/spotify.com",
    brandName: "Spotify",
    postedDate: "1 day ago",
    role: "Mobile App Developer",
    jobType: "Full-Time",
    level: "Mid Level",
    payPerHour: 100,
    location: "Gurgaon, India"
  },
  {
    id: 9,
    brandLogo: "https://logo.clearbit.com/uber.com",
    brandName: "Uber",
    postedDate: "5 days ago",
    role: "DevOps Engineer",
    jobType: "Full-Time",
    level: "Senior Level",
    payPerHour: 125,
    location: "Kolkata, India"
  },
  {
    id: 10,
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    brandName: "Airbnb",
    postedDate: "Today",
    role: "UX Researcher",
    jobType: "Part-Time",
    level: "Mid Level",
    payPerHour: 105,
    location: "Remote"
  }
];

  return (
    <div className="parent">
      {jobs.map(function(job){
        return <Card key={job.id} brandLogo={job.brandLogo} brandName={job.brandName} postedDate={job.postedDate} role={job.role} jobType={job.jobType} level={job.level} payPerHour={job.payPerHour} location={job.location} />
      })}
    </div>
  )
}