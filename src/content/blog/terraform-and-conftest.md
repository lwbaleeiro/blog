---
title: "Exploring Policy-as-Code in Practice with Conftest"
date: 2026-06-15
tags: ["DevOps", "Policy as Code", "Iac", "Conftest"]
description: "In modern software development, ensuring that our infrastructure configurations and pipelines follow the team's security rules and best practices is a constant challenge. This is where the concept of **Policy-as-Code** comes in."
---

In modern software development, ensuring that our infrastructure configurations and pipelines follow the team's security rules and best practices is a constant challenge. This is where the concept of **Policy-as-Code** comes in.

I recently created a Proof of Concept (PoC) to explore the use of [Conftest](https://www.conftest.dev/), and I decided to share the main takeaways. The source code for the PoC is available on my GitHub: [lwbaleeiro/poc-conftest](https://github.com/lwbaleeiro/poc-conftest).

## What is Conftest?

Conftest is a utility that allows you to write tests against structured configuration data (such as YAML, JSON, Dockerfiles, Terraform, Kubernetes manifests, among others). It uses the Rego language, which is the same one used by the Open Policy Agent (OPA).

Instead of discovering a disastrous configuration only when running a terraform apply—such as an unintended change that results in the destruction of critical infrastructure like networking stacks, VPC peerings, or persistent data storage, Conftest allows you to validate your Terraform plans automatically in your CI/CD pipeline (or even on your local machine before committing).

## About the PoC

The goal of the [poc-conftest](https://github.com/lwbaleeiro/poc-conftest) repository is to demonstrate in a simple and straightforward way how we can integrate these validations.

In practice, the PoC illustrates:
1. **Creating Policies in Rego**: How to structure business and security rules.
2. **File Validation**: Running `conftest test` against configuration files.
3. **Error Prevention**: How Conftest blocks non-compliant configurations clearly and objectively.

*(If you want to test it locally, just clone the repository and run the commands described in the README).*

## Why does this matter?

Automating policy verification brings several benefits:
* **Security and Compliance**: You ensure that no infrastructure is provisioned outside the standards.
* **Fast Feedback**: Developers know immediately if their configuration violates a rule, without having to wait for someone else to review the code.
* **Culture of Quality**: The team's rules are documented in code, transparently and versioned. Open-source tools like this are essential for building robust deployment workflows and maintaining high technical quality without needing to spend on complex enterprise validation licenses.

