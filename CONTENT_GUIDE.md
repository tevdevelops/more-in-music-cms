# More in Music - Content Management Guide

This guide explains how to use your content management system to update your website. Everything is organized into different content types that you'll find in the left sidebar.

---

## 📍 Getting Started

CMS URL: https://moreinmusic.sanity.studio/
When you log in, you'll see a list of content types on the left. The most important ones are:

- **Home Page** - Your website's main page (only one exists)
- **Header** - Your website's navigation menu (only one exists)
- **Page** - Regular pages on your site
- **Post** - Blog posts or news articles
- **Event** - Upcoming events or shows
- **Gallery** - Photo galleries
- **Section** - Reusable content blocks for building pages

---

## 🏠 Home Page

The Home Page is your website's main landing page. There's only one Home Page, and it contains:

### Title
- **What it is:** The internal name for this page (not shown to visitors)
- **Required:** Yes

### Hero Section
The large banner area at the top of your homepage.

- **Hero Image:** The main background image for your hero section
  - **Required:** Yes
  - **Tip:** Use a high-quality image that represents your brand

- **Overlay Logo:** An optional logo that appears on top of the hero image
  - **Required:** No

- **Content Position:** Where the text appears on the hero image
  - **Options:** Left, Center, or Right
  - **Default:** Center
  - **Required:** Yes

- **Heading:** The main headline text (optional)
- **Description:** Supporting text below the heading (optional)

### Sections
This is where you build your page content using reusable sections. Click "Add item" to add sections to your homepage. See the **Sections** section below for details.

### SEO (Search Engine Optimization)
Help search engines understand your page. These fields are optional but recommended.

- **SEO Title:** The title that appears in search results (usually 50-60 characters)
- **SEO Description:** A brief description that appears in search results (usually 150-160 characters)
- **SEO Image:** An image that appears when your page is shared on social media

---

## 🧭 Header (Navigation Menu)

The Header controls your website's main navigation menu. There's only one Header document.

### Navigation Items
Add menu items to your navigation. Each item can be:

- **A simple link** - Links directly to a page or external website
- **A dropdown menu** - Shows a list of links when visitors hover over it
- **A dropdown-only item** - Only shows dropdown items (no main link)

#### For each navigation item:

**Label**
- The text that appears in the menu (e.g., "About", "Events", "Contact")
- **Required:** Yes

**Link Type**
Choose how this menu item works:
- **Internal Page** - Links to a page on your website
- **External URL** - Links to a website outside your site
- **Dropdown Only** - Only shows dropdown items (no main link)

**Internal Page** (if Link Type is "Internal Page")
- Select which page on your site this should link to
- **Required:** Yes (unless you have dropdown items)

**External URL** (if Link Type is "External URL")
- Enter the full web address (e.g., https://example.com)
- **Required:** Yes (unless you have dropdown items)

**Dropdown Items** (optional)
- Add sub-menu items that appear when visitors hover over the main menu item
- Each dropdown item needs its own label and link type
- **Required:** Yes (if Link Type is "Dropdown Only")

---

## 📄 Pages

Create regular pages for your website (like "About Us", "Contact", etc.).

### Title
- The name of your page
- **Required:** Yes

### Slug
- The web address for this page (e.g., "about-us" creates the URL `/about-us`)
- **Required:** Yes
- **Tip:** Usually auto-generated from the title, but you can edit it

### Sections
Build your page content using reusable sections. See the **Sections** section below.

### SEO
Same as Home Page - optional but recommended for search engines.

---

## 📝 Posts

Create blog posts, news articles, or any written content.

### Title
- The headline of your post
- **Required:** Yes

### Slug
- The web address for this post
- **Required:** Yes
- **Tip:** Auto-generated from the title

### Excerpt
- A short summary or preview text (usually 1-2 sentences)
- **Required:** No
- **Tip:** This often appears in post listings

### Main Image
- The featured image for your post
- **Required:** No
- **Tip:** Use a compelling image that represents your content

### Body
- The main content of your post
- You can format text (bold, italic, headings, lists)
- You can add images within your content
- **Tip:** Use the formatting toolbar to style your text

### Published At
- The date and time when your post was published
- **Required:** No
- **Tip:** Auto-filled with the current date, but you can change it

### Author
- The name of the person who wrote the post
- **Required:** No

---

## 📅 Events

Create event listings for shows, concerts, or other happenings.

### Title
- The name of your event
- **Required:** Yes

### Slug
- The web address for this event page
- **Required:** Yes

### Event Date
- When the event takes place (date and time)
- **Required:** Yes

### Event Image
- A photo representing your event
- **Required:** Yes
- **Tip:** Use an eye-catching image that will draw attention

### Description
- Details about the event (what it is, what to expect, etc.)
- **Required:** No

### Location
- Where the event takes place
- **Required:** No
- **Tip:** Can be a venue name, address, or "Online"

### Published At
- When this event listing was created
- **Required:** No
- **Tip:** Auto-filled with the current date

---

## 🖼️ Gallery

Create photo galleries to showcase images.

### Title
- The name of your gallery
- **Required:** Yes

### Images
- Add multiple photos to your gallery
- **Required:** At least one image
- For each image:
  - **Image:** Upload or select a photo
  - **Alternative Text:** A description of the image (helps with accessibility and SEO)
  - **Caption:** Optional text that appears below the image

### Related Event
- Optionally link this gallery to an event
- **Required:** No
- **Tip:** Useful for event photo galleries

---

## 🧩 Sections

Sections are reusable content blocks that you can add to any page or the homepage. Think of them as building blocks for your pages.

### Title
- An internal name to help you identify this section (not shown to visitors)
- **Required:** Yes
- **Tip:** Use descriptive names like "About Us Intro" or "Services Overview"

### Full Width
- Make this section span the entire width of the screen
- **Default:** No (section has margins on the sides)

### Background Color
- Choose a background color for this section
- **Options:** White, Light Gray, Dark Gray, Black, Primary, Secondary
- **Default:** White

### Background Image
- Add an optional background image
- **Tip:** Works well with text overlays

### Columns
- Add 1 or 2 columns to organize your content
- **Required:** At least 1 column
- **Maximum:** 2 columns
- Each column can contain multiple content blocks (see Content Blocks below)

---

## 📦 Content Blocks

Content blocks are the individual pieces you add inside columns. You can mix and match different blocks to create your desired layout.

### Rich Text Block
Add formatted text content with images and buttons.

- **Text Alignment:** Choose left, center, or right alignment
- **Sticky Position:** Make this block stick to the top when scrolling (optional)
- **Content:** 
  - Add formatted text (headings, paragraphs, lists, bold, italic)
  - Add images within your text
  - Add buttons within your text

### Video Embed Block
Add videos from YouTube, Vimeo, or upload your own.

- **Video Type:** Choose YouTube, Vimeo, or Direct Upload
- **YouTube URL:** Paste the full YouTube video URL (if using YouTube)
- **Vimeo URL:** Paste the full Vimeo video URL (if using Vimeo)
- **Video File:** Upload a video file from your computer (if using Direct Upload)
- **Caption:** Optional text that appears below the video

### Gallery Block
Display a collection of images.

- **Images:** Add multiple photos
  - Each image can have alternative text and a caption
- **Required:** At least one image

### Page Header Block
Create a prominent header for your page or section.

- **Text:** Optional heading text (appears as a large title)
- **Image:** Optional header image
  - Include alternative text for accessibility

### Button Block
Add clickable buttons to your content.

- **Button Text:** The text that appears on the button
- **Required:** Yes
- **Link Type:** 
  - **URL:** Link to any web address
  - **Internal Page:** Link to a page on your website
- **Button URL:** The web address (if Link Type is "URL")
- **Internal Page:** Select a page from your site (if Link Type is "Internal Page")

---

## 💡 Tips & Best Practices

### Images
- Use high-quality images (at least 1200px wide for hero images)
- Always add "Alternative Text" to images for accessibility
- Compress large images before uploading for faster page loading

### SEO
- Fill out SEO fields for important pages (Home Page, main Pages)
- Keep SEO titles under 60 characters
- Keep SEO descriptions between 150-160 characters
- Use descriptive, keyword-rich titles and descriptions

### Content Organization
- Use descriptive titles for Sections so you can easily find and reuse them
- Test your navigation menu after making changes
- Preview your pages before publishing

### Sections Workflow
1. Create a Section with a descriptive title
2. Choose your background color and layout (1 or 2 columns)
3. Add content blocks to your columns
4. Save the Section
5. Add the Section to your Page or Home Page using the "Sections" field

### Buttons
- Use clear, action-oriented button text (e.g., "Buy Tickets", "Learn More", "Contact Us")
- Test that all buttons link to the correct pages

---

## 🔄 Common Workflows

### Creating a New Page
1. Click "Page" in the left sidebar
2. Click "Create new"
3. Enter a Title
4. The Slug will auto-generate (you can edit it)
5. Add Sections to build your content
6. Fill out SEO fields (optional but recommended)
7. Click "Publish"

### Adding Content to the Homepage
1. Click "Home Page" in the left sidebar
2. Scroll to the "Sections" field
3. Click "Add item"
4. Select an existing Section or create a new one
5. Arrange sections in the order you want them to appear
6. Click "Publish"

### Creating an Event
1. Click "Event" in the left sidebar
2. Click "Create new"
3. Fill in Title, Event Date, and Event Image (required)
4. Add Description and Location (optional)
5. Click "Publish"

### Updating Navigation
1. Click "Header" in the left sidebar
2. In "Navigation Items," add, edit, or reorder menu items
3. For dropdown menus, add items to the "Dropdown Items" field
4. Click "Publish"

---

## ❓ Need Help?

If you're unsure about any field:
- **Required fields** are marked and must be filled in before publishing
- **Optional fields** can be left empty
- **Tooltips and descriptions** appear below many fields to provide guidance
- When in doubt, save as a draft and preview your changes

---

*Last updated: 1/22/26*
