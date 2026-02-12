import express from "express";

const port = 3000;
const app = express();
app.use(express.static("public"));

let posts = [
  {
    id: 1739384001,
    title: "Building a Private Cloud with Proxmox",
    content:
      "I finally moved away from standard virtualization. Setting up a Proxmox cluster allows for high availability and better resource management for my home services...",
    category: "Homelab",
  },
  {
    id: 1739384002,
    title: "Why Tailwind v4 is a Game Changer",
    content:
      "The move to a CSS-first approach means less time fiddling with JavaScript config files and more time writing actual styles. The speed of the new @tailwindcss/cli is impressive.",
    category: "Frontend",
  },
  {
    id: 1739384003,
    title: "Hardening SSH Access",
    content:
      "Stop using passwords for SSH. In this log, I cover generating Ed25519 keys, changing default ports, and setting up Fail2Ban to block brute-force attempts.",
    category: "Security",
  },
  {
    id: 1739384004,
    title: "Dockerizing an Express.js App",
    content:
      "Consistency across environments is key. I've created a slim Dockerfile using the Alpine Node image to keep my deployment footprint under 100MB.",
    category: "DevOps",
  },
  {
    id: 1739384005,
    title: "Automating Backups with Rclone",
    content:
      "Data that isn't backed up doesn't exist. I'm using Rclone to sync my local NAS storage to an encrypted S3 bucket every night at 03:00.",
    category: "Automation",
  },
];
app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});

app.listen(port, () => {
  console.log(`Active on port ${port}`);
});
