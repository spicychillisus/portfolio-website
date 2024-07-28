# Portfolio Website
This README.md will bring you through the documentation of the technologies used in this project.
* This website is best viewed on Desktop. Mobile Viewing is still in development.
* This project is still currently in development 😅 Please be patient as I try and make this website as pleasing as possible 😁

# Built With
- Next.js
- Node.js
- TailwindCss
- Vercel (deployed on)

Link to deployed website: https://bit.ly/spicychillisus

# Installation (If you wish to see the source files)

1. To access the contents in this website, run this command:
```
git clone https://github.com/spicychillisus/portfolio-website.git
```
I recommend storing the contents in a place where it's easily accessible

2. Run the following command to install the required dependencies for this project to work:
```
npm install
```
3. Run the following to start the project:
```
npm run dev
```
The project will by default run on port 3000, or any port available.

# Main Menu
Click the links below to navigate to the documentation you wish to view
- [Navbar](#navbar)
- [Footer](#footer)
- [Home Page](#home-page)
- [Experiences](#experiences-page)
- [Projects]((#projects-page))
- [Education](#education-page)


# Navbar
This component serves as a navigation bar for users to navigate their way through the page with ease. It brings the user to links such as:
- Home Page (the link on the left)
- Experience Page 
- Projects Page
- Education Page

The following modules are imported to bring in the required icons and fonts used for this Navbar:
```
import Link from 'next/link';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
```

When using useState, since it is a server-side component, it is important to put the following at the top of the page:
```
"use client"
```

This tells react that the component is being used on the client side.

The usage of use client is for the mobile menu.

# Home Page

# Experiences Page

# Projects Page

# Education Page

# Footer




