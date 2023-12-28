This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Contribute

Jump in! See the projects page to participate in the current project stage.

-   Assign a ticket to yourself (you can also create a new one)
-   Create a Branch. Make the name reflect the ticket title [learn more](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-a-branch-for-an-issue)
-   (maybe run npm install locally)
-   work on your brnach to solve the ticket
-   Create a pull request (with a decent description)
-   link a pull request to the corresponding issu using resrved keywords in the pr description followed by the issue number, like 'closes #2' [learn more](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)
-   don't forget your ticket branch with the current main branch from time to time if woking on a ticket takes some time.

## typescript

Never used typescript before? Don't worry! You will be fine. Actually you will love it. Everbody does! The code editor basically tells you what to do and prevents the app from crashing hard.

## copilot, ChatGPT & Co

If you use some kind of AI to help you solve tickets, in your own interest reqrite the code (don't copy-paste) and make sure you understand what it does.
You will need to be able to explain you code in the code reviews in order to have you contributions merged.

## github coespaces

You can clone the project locally or just use the magic of github codespaces.
Codescpaces basically runs a container in the cloud and connects to your VSCode so that you don't even need to have any of the files on your machine.

## prettier.rc and eslint

To make things easier I configured eslint and prettier.
I recommend turning on "format on save" in you editor and choose "Prettier Code Formatter" as default formatter while working on this project.

This a short video on that topic
https://www.youtube.com/watch?v=vaikye4etXI

## Getting Started

Example:

1. Pick a ticket in the current project board, for example Ticket #3
2. Create a branch for your ticket from _main_
3. got to the github page of the created branch
4. clone OR Create a cosepcae and select "Open in Visual Studio Code"
5. Make your changes
6. Create a pull request (PR) when you think you are done. Use the keyword _cloeses #3_ to link PR and Ticket. Add an enlightening description of what you have done
7. Grab the next ticket while your PR is pending

To run the development server:

```bash
npm run dev
```

## Nice To Know

### State Management

For the global state management we are using [React Context](https://react.dev/reference/react/createContext).

### SCSS files automatic import in build-styles.js

The script build-styles.js crawls through the src folder and makes sure all the scss files are being imported automatically to \auto_generated_main.scss and compiled to \auto_generated_main.css. This saves us some work. \auto_generated_main.css is the only file that needs to be imported then in layout.tsx.

The script is integrated in the workflow via _package.json_
Additionally nodemon got the order to watch changes so that we don't need to stop and rerun _npm run dev_ each time we add /delete /change scss files.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### routing

We use the NextJS routing system.
Make yourself familar with the concepts in the [documentation](https://nextjs.org/docs/pages/building-your-application/routing)

## Troubleshooting development

-   Sometimes the app runs on a different port, for example on [http://localhost:3001](http://localhost:3001) when 3000 is currently blocked.
-   sometimes deleting the .next folder can help resolving cache problems
-   CSS changes dont show? restart npm run dev to have the scss re-generated. Espacially when you created new scss files or changed styles on the highest level

## Learn More about Next

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
