# Back-end

## Entities

## - Blogs
blog_ID (PK)
user_ID (FK)
name
image
url

## - Certificates
certificate_ID (PK)
user_ID (FK)
name
image
workload
instructor
institution
conclusion
type
score
sharingLink
area (FK)

## - Certificate Areas
area_ID (PK)
areaDescription

## - Certificate Types
type_ID (PK)
typeDescription

## - Education
education_ID (PK)
user_ID (FK)
period
title
institution

## - Experiences
experience_ID (PK)
user_ID (FK)
period
title
institution

## - Expertises
expertise_ID (PK)
user_ID (FK)
title
text
color
icon

### - Icons
icon_ID
description

## - Knowledges
knowledge_ID (PK)
user_ID (FK)
description

## - Menu Items
menuItem_ID (PK)
user_ID (FK)
label
icon
to

## - Networks
network_ID (PK)
user_ID (FK)
title
link
icon

## - Profile
user_ID (PK)
name 
role
image
curriculum

## - ProfileInfo
profileInfo_ID (PK)
user_ID (FK)
label
link
data
icon

## - Projects
project_ID (PK)
user_ID (FK)
name
description
image
url
url repository
created at
technologies

## - Testimonials
testimonial_ID (PK)
user_ID (FK)
name
role
image
quote

## - Working Skills
skill_ID (PK)
user_ID (FK)
description
percentage


### User Cases
list of blogs
list of certificates
list of certificates areas
list of certificates types
list of menu items
list of education
list of experiences
list of expertises
list of knowledges
list of networks
list of profiles
list of profile info
list of projects
list of testimonials
list of working skills