LANSCAPE OUTDOORS - CLOUDFLARE PAGES STATIC WEBSITE
==================================================

FILES INCLUDED
--------------
index.html
services.html
projects.html
service-areas.html
about.html
contact.html
assets/css/style.css
assets/js/main.js
robots.txt
sitemap.xml
_headers
_redirects

CLOUDFLARE PAGES DEPLOYMENT
---------------------------
1. Log in to Cloudflare.
2. Go to Workers & Pages / Compute.
3. Create a Pages project and choose Direct Upload / Upload assets.
4. Upload the CONTENTS of this folder, or upload the ZIP if Cloudflare accepts ZIP upload.
5. Deploy.
6. Open the temporary *.pages.dev address and test the site.
7. In the Pages project, open Custom domains.
8. Add: lanscape.ca
9. Add: www.lanscape.ca
10. Make lanscape.ca the main domain.

IMPORTANT BEFORE GOING LIVE
---------------------------
1. Replace all "PROJECT PHOTO" / "ADD PHOTO" placeholders with your real project images.
2. Confirm the phone number and email address.
3. The quote form currently opens the visitor's email program and drafts an email to:
   info@lanscape.ca
   If that mailbox is not set up yet, either create it or change the email address in:
   - assets/js/main.js
   - all HTML files
4. Add your real logo later by replacing the LS text mark in the header.
5. Add Google Analytics / Search Console after the domain is live.
6. Submit https://lanscape.ca/sitemap.xml to Google Search Console.

HOW TO ADD A REAL IMAGE
-----------------------
Put image files inside:
assets/images/

Example:
assets/images/markham-patio.jpg

Then replace:
<div class="project-image">ADD PHOTO</div>

with:
<img src="/assets/images/markham-patio.jpg" alt="Backyard interlocking patio in Markham Ontario">

For the homepage hero, replace the .visual placeholder with an <img> or set a background-image in style.css.

NOTE
----
This site uses no framework and no build process. It can be uploaded directly to Cloudflare Pages.


HOMEPAGE V2
-----------
The homepage was upgraded to a more premium GTA landscaping-contractor layout.
Replace all project placeholders with real completed-project photos before finalizing.


OFFICIAL LOGO
-------------
The official LanScape Outdoors logo is now included at:
assets/images/lanscape-logo.png

It is used in the website header and footer.


CUSTOMER STORY IMAGES
---------------------
V5 includes AI-generated concept illustrations for:
- Growing-family backyard patio
- Pre-sale interlocking driveway / curb appeal
- Safer front steps and walkway
- Premium backyard visual

The customer-stories page explicitly discloses that these are AI-generated concept illustrations and not photos of the specific customers described.
