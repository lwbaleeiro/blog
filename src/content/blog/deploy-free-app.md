---
title: "Full-Stack for Free: How I Deployed a Bun + SQLite App Without Spending a Dime"
date: "2026-02-28"
tags: ["TypeScript", "Bun", "SQLite", "Turso", "Render", "OpenSource", "WebDev"]
description: "Stop paying for hobby projects. Here is how to combine Render and Turso to keep your SQLite apps alive 24/7 for $0."
---

We’ve all been there. You spend your weekend building a cool side project—maybe for fun, maybe to learn a new stack. In my case, it was **Stream Vote**: a Full-Stack Polling System built with **TypeScript, Bun, and SQLite**. The project is simple but effective: users create polls, others vote, and there’s a ranking system for those who predict the winners.

It worked perfectly on `localhost:3000`. But then comes the "Final Boss" of side projects: **Deployment.**

## The Hosting Battle: Why Render Won

When looking for free hosting, the usual suspects appear: **Vercel** and **Netlify**. However, for a project built on **Bun**, these platforms pose a significant challenge.

Vercel and Netlify are primarily built around **Serverless Functions**. While they are great for static sites or standard Node.js environments, they don't play well with Bun’s native runtime yet. To run Bun there, you often need complex workarounds or custom build steps that defeat the purpose of using a fast, "all-in-one" tool like Bun.

I chose **Render** because it allows you to run a persistent **Web Service**. You can simply point to your `bun run start` command or use a Dockerfile, and it just works. It treats your app as a real server, not just a collection of isolated functions.

## The "SQLite in the Cloud" Dilemma

Even with the right host, there's another "enemy": **Ephemeral File Systems.**

On Render's free tier, the disk is temporary. If you deploy a standard SQLite file (`database.sqlite`), your data is wiped clean every time the app restarts or you push a new update. You could go the AWS/GCP route, but that’s like using a sledgehammer to crack a nut (and they _will_ eventually ask for your credit card).

## The Game Changer: Enter Turso

While researching alternatives, I found **Turso**. It’s an edge database based on **libSQL** (a fork of SQLite). It offers a massive free tier without needing a credit card to start.

The migration was surprisingly smooth. Instead of pointing my app to a local file, I updated the connection string to use the Turso URL and Auth Token. This allowed me to keep using the simplicity of SQLite while having the data safely stored in the cloud.

---

## The Result: A Live Demo

By decoupling the storage (**Turso**) from the compute (**Render**), I achieved the "Indie Dev Dream": **Zero cost and 24/7 persistence.**

You can see the final result live here: **[Stream Vote Demo](https://stream-vote.onrender.com/)**

## Final Thoughts

If you are holding back on publishing your projects because of "infrastructure anxiety," stop. You don't need a massive budget or complex Kubernetes clusters for a hobby project; you just need a smart combination of modern edge tools like Bun, Render, and Turso.

> **Check out the project on GitHub:** [lwbaleeiro/stream-vote](https://github.com/lwbaleeiro/stream-vote)

---
