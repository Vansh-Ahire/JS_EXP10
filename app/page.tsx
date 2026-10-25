import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Student Portal</h1>
      <p>Welcome to the Student Portal. View student profiles and academic details.</p>
      <Image
        src="/student.jpg"
        alt="Student profile"
        width={660}
        height={455}
        priority
      />
      <p>This page demonstrates SEO metadata and image display in Next.js.</p>
    </main>
  );
}