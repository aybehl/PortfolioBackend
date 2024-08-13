# PortfolioBackend

This backend application is built with Node.js and Express.js, using MongoDB as the database to manage project data, skills, and contact submissions.

## MongoDB Collections

### Projects

Stores information about various projects.

**Schema:**

- `project_id` (String, unique, required)
- `project_name` (String, required)
- `github_link` (String, required)
- `cover_picture_desktop` (String, base64 encoded, required)
- `cover_picture_tablet` (String, base64 encoded, required)
- `cover_picture_mobile` (String, base64 encoded, required)
- `project_description` (Array of Strings, required)
- `project_tags` (Array of Strings, required)

### Skills

Stores information about the skills.

**Schema:**

- `skill_id` (String, unique, required)
- `skill_name` (String, required)
- `skill_logo` (String, base64 encoded, required)

### Contacts

Stores contact form submissions.

**Schema:**

- `contact_id` (String, unique, required)
- `contact_name` (String, required)
- `contact_email` (String, required)
- `message` (String)
- `timestamp` (Date, default: Date.now)

## API Endpoints

### GET `/skills`

Retrieve all skills.

### GET `/projects`

Retrieve all projects.

### POST `/contacts/add`

Add a new contact submission.
