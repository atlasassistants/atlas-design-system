# Atlas Email Kit

`template.html` is a table-based, client-safe skeleton for Atlas email: newsletters, sequences, onboarding, and transactional mail. Copy it per email and swap the content blocks.

## Rules

- **Light, always.** Pearl White page `#FBFEF7`, white card `#FFFFFF`, Deep Blue text `#0C013B`, secondary text `#4F4870`, border `#DDDBE4`. Email is a light surface in `design.md`, and clients mangle dark backgrounds.
- **Header:** the full lockup, `atlas-logo-dark.png`, on white, 32 to 36px tall, hosted at a public URL (replace `LOGO_URL`). Never a file path, never typed text.
- **One gradient moment:** the 4px brand-gradient bar under the header, with a solid Vivid Purple fallback for clients that drop CSS gradients.
- **Accent and links:** Vivid Purple `#4500F9` (7.9:1 on Pearl White). Yellow Green never appears in email.
- **CTA:** one per email, a Vivid Purple pill with white Poppins Semi-Bold text, label of three words or fewer. Outlook renders it square; that is acceptable.
- **Type:** font stacks lead with Poppins (headings, eyebrow, button) and Outfit (body), then fall back to system fonts. Most clients will show the fallback; the layout must hold either way. Body 17px with 1.6 line height; headline 26 to 30px.
- **Footer:** gradient symbol (`atlas-mark.png`), physical address, unsubscribe link. Required before sending.
- **Copy:** the body is neutral sample copy. Follow `design.md` > CONTENT FUNDAMENTALS: no "managed service", no retired offer names, no unchecked numbers, no exclamation marks.
- **Plain-text part:** always send one.
