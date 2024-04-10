export default async function handler(req: any, res: any) {
  try {
    const response = await fetch("http://localhost:8000/api/listings");
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}
