/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1IvNhRRUoSm
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Landing() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6 bg-card">
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4"
          prefetch={false}
        >
          <CodeIcon className="w-6 h-6" />
          <span>Resume Analyzer</span>
        </a>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <a href="#" className="text-muted-foreground" prefetch={false}>
            Home
          </a>
          <a href="#" className="text-muted-foreground" prefetch={false}>
            Analyze
          </a>
          <a href="#" className="text-muted-foreground" prefetch={false}>
            Insights
          </a>
          <a href="#" className="text-muted-foreground" prefetch={false}>
            Pricing
          </a>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Button variant="ghost" size="icon" className="rounded-full ml-auto">
            <img
              src="/placeholder.svg"
              width="32"
              height="32"
              className="rounded-full border"
              alt="Avatar"
              style={{ aspectRatio: "32/32", objectFit: "cover" }}
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 flex flex-col gap-8 p-4 md:p-10">
        <div className="max-w-6xl w-full mx-auto grid gap-6">
          <div className="grid gap-2">
            <h1 className="font-semibold text-3xl">Analyze Your Resume</h1>
            <p className="text-muted-foreground">
              Get a comprehensive evaluation of your software engineering
              qualifications.
            </p>
          </div>
          <Card className="p-6 grid gap-6">
            <div className="grid gap-2">
              <h2 className="text-xl font-semibold">Connect Your Profiles</h2>
              <p className="text-muted-foreground">
                Link your LinkedIn, GitHub, and other online profiles to get a
                detailed analysis.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <LinkedinIcon className="w-5 h-5" />
                Connect LinkedIn
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <GithubIcon className="w-5 h-5" />
                Connect GitHub
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <CodeIcon className="w-5 h-5" />
                Connect Other Profiles
              </Button>
            </div>
          </Card>
          <Card className="p-6 grid gap-6">
            <div className="grid gap-2">
              <h2 className="text-xl font-semibold">Upload Your Resume</h2>
              <p className="text-muted-foreground">
                Upload your resume to get a detailed analysis of your
                qualifications.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="resume">Resume</Label>
                <Input
                  id="resume"
                  type="file"
                  placeholder="Upload your resume"
                />
              </div>
              <Button>Analyze Resume</Button>
            </div>
          </Card>
        </div>
        <div className="max-w-6xl w-full mx-auto grid gap-6">
          <div className="grid gap-2">
            <h2 className="text-xl font-semibold">Your Resume Analysis</h2>
            <p className="text-muted-foreground">
              Here's a detailed evaluation of your software engineering
              qualifications.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="p-6 grid gap-4">
              <div className="flex items-center gap-2">
                <StarIcon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Technical Skills</h3>
              </div>
              <div className="grid gap-2 text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>JavaScript</span>
                  <span className="font-medium">90%</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span>React</span>
                  <span className="font-medium">85%</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span>Node.js</span>
                  <span className="font-medium">80%</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span>TypeScript</span>
                  <span className="font-medium">75%</span>
                </div>
              </div>
            </Card>
            <Card className="p-6 grid gap-4">
              <div className="flex items-center gap-2">
                <AwardIcon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Achievements</h3>
              </div>
              <div className="grid gap-2 text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>GSOC</span>
                  <span className="font-medium">90%</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span>Hackathons</span>
                  <span className="font-medium">85%</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span>Teaching Assistant</span>
                  <span className="font-medium">80%</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span>Open Source Contributions</span>
                  <span className="font-medium">75%</span>
                </div>
              </div>
            </Card>
            <Card className="p-6 grid gap-4">
              <div className="flex items-center gap-2">
                <FingerprintIcon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Digital Footprint</h3>
              </div>
              <div className="grid gap-2 text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>LinkedIn Profile</span>
                  <span className="font-medium">90%</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span>GitHub Profile</span>
                  <span className="font-medium">85%</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span>Coding Platform Profiles</span>
                  <span className="font-medium">80%</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span>Personal Website</span>
                  <span className="font-medium">75%</span>
                </div>
              </div>
            </Card>
          </div>
          <div className="grid gap-2">
            <h2 className="text-xl font-semibold">Overall Evaluation</h2>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <StarIcon className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold">4.5</span>
              </div>
              <span className="text-muted-foreground">out of 5</span>
            </div>
            <p className="text-muted-foreground">
              Based on the analysis of your technical skills, achievements, and
              digital footprint, you are a strong candidate for software
              engineering roles. Your well-rounded profile and consistent
              performance across various platforms make you an attractive
              prospect for employers.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

function AwardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function FingerprintIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
      <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
      <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
      <path d="M2 12a10 10 0 0 1 18-6" />
      <path d="M2 16h.01" />
      <path d="M21.8 16c.2-2 .131-5.354 0-6" />
      <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
      <path d="M8.65 22c.21-.66.45-1.32.57-2" />
      <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
