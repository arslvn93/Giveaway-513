const config = {
  "modalQuestions": [
    {
      "id": "favorite_local_events",
      "questionText": "Which type of local events do you enjoy attending most in Toronto?",
      "options": [
        { "value": "major_league_sports", "text": "Major league sports games" },
        { "value": "food_wine_festivals", "text": "Food and wine festivals" },
        { "value": "music_concerts", "text": "Music concerts" },
        { "value": "art_exhibitions", "text": "Art exhibitions" }
      ]
    },
    {
      "id": "lifestyle_preferences",
      "questionText": "On a typical weekend, how do you prefer to spend your time?",
      "options": [
        { "value": "exploring_real_estate", "text": "Exploring new real estate developments or open houses" },
        { "value": "relaxing_home", "text": "Relaxing at home with friends and family" },
        { "value": "outdoor_activities", "text": "Engaging in outdoor activities like hiking or biking" },
        { "value": "dining_trendy", "text": "Dining at trendy restaurants or cafes" }
      ]
    },
    {
      "id": "travel_habits",
      "questionText": "How do you typically spend your vacations?",
      "options": [
        { "value": "international_travel", "text": "Traveling to international destinations" },
        { "value": "local_attractions", "text": "Visiting local attractions around Toronto" },
        { "value": "staycations_luxury", "text": "Taking staycations in luxury accommodations" },
        { "value": "road_trips", "text": "Going on road trips to explore new areas" }
      ]
    },
    {
      "id": "community_engagement",
      "questionText": "How involved are you in community activities or neighborhood associations?",
      "options": [
        { "value": "very_involved", "text": "Very involved, I attend meetings and events regularly" },
        { "value": "somewhat_involved", "text": "Somewhat involved, I participate occasionally" },
        { "value": "not_very_involved", "text": "Not very involved, but I’m interested in what's happening" },
        { "value": "not_involved", "text": "Not involved at all" }
      ]
    }
  ],
  "giveaway": {
    "name": "Blue Jays Tickets Giveaway",
    "heroHeadline": "Win <span class='highlight'>Toronto Blue Jays Tickets</span> and Celebrate Canada Day in Style!",
    "heroSubheadline": "Join us at the Canada Day event for your chance to win tickets worth $100 to one of the most exciting baseball games of the summer!",
    "promotionDates": "Promotion runs from June 18, 2025 until July 1, 2025.",
    "endDate": "2025-07-02T23:59:59",
    "heroBackgroundImageUrl": "https://api.typeform.com/responses/files/4d70b80ce239ac7cb2403d6b95dd028bdd857cb5c8f1881dd46254015f5d135c/Screenshot_20250616_142200_Canva.jpg",
    "heroCtaText": "Enter to Win Blue Jays Tickets!",
    "entryFormCtaText": "Count Me In!",
    "successModalHeaderText": "🎉 You're In! 🎉",
    "successModalMainMessage": "Your entry for the <strong>Toronto Blue Jays Tickets Giveaway</strong> has been successfully submitted. Best of luck!",
    "successModalEmailPrompt": "Winner will be announced by email on July 2, 2025. Keep an eye on your inbox!"
  },
  "prize": {
    "name": "Toronto Blue Jays Game Tickets",
    "value": "$100 Value",
    "description": "Win tickets to an exciting live Toronto Blue Jays game! Experience the thrill of baseball, vibrant summer atmosphere, and create unforgettable memories with family or friends.",
    "images": [
      {
        "src": "https://www.mlbstatic.com/mlb-images/image/upload/mlb/y3cqv0kapstn7hu8twzl.jpg",
        "alt": "Toronto Blue Jays Baseball Game"
      },
      {
        "src": "https://www.mlbstatic.com/mlb-images/image/upload/mlb/c5zdqrewt9qlevfznxxj.jpg",
        "alt": "Fans enjoying Blue Jays game"
      },
      {
        "src": "https://www.mlbstatic.com/mlb-images/image/upload/mlb/tbghbnthphoork7cil15.jpg",
        "alt": "Blue Jays Players on field"
      }
    ],
    "includedItems": [
      { "icon": "fas fa-ticket-alt", "text": "$100 worth of tickets to a Blue Jays baseball game" },
      { "icon": "fas fa-users", "text": "Perfect for a fun summer outing with family or friends" },
      { "icon": "fas fa-baseball-ball", "text": "Experience live professional baseball excitement" },
      { "icon": "fas fa-check-circle", "text": "No purchase necessary to enter or win" },
      { "icon": "fas fa-bolt", "text": "Quick and simple entry process" }
    ],
    "limitedTimeOfferText": "⚾ Limited Time Canada Day Giveaway!",
    "ctaButtonText": "I WANT TO WIN BLUE JAYS TICKETS!"
  },
  "howToEnter": {
    "steps": [
      {
        "icon": "fas fa-map-marker-alt",
        "title": "Visit Our Booth",
        "description": "Catch us at the Canada Day event on July 1st for your chance to enter."
      },
      {
        "icon": "fas fa-pen",
        "title": "Complete a Quick Survey",
        "description": "Fill out a short survey at our booth—it’s easy and fun!"
      },
      {
        "icon": "fas fa-calendar-check",
        "title": "Wait for the Draw",
        "description": "Winner announced on July 2nd via email. Fingers crossed!"
      }
    ],
    "highlights": [
      { "icon": "fas fa-baseball-ball", "text": "Experience live baseball excitement" },
      { "icon": "fas fa-gift", "text": "Win $100 in tickets" },
      { "icon": "fas fa-smile", "text": "Free and easy entry" }
    ]
  },
  "entryForm": {
    "subtitle": "Provide your details below for a chance to win blue Jays tickets!",
    "entryCountText": "Already hundreds of baseball fans have entered! Don't miss your chance!",
    "socialSharePrompt": "Tell your friends about this exciting giveaway:",
    "sharePlatforms": {
      "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      "twitter": "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Win Toronto Blue Jays tickets and celebrate Canada Day!")
    }
  },
  "rules": {
    "fairSelectionInfo": {
      "title": "Fair & Transparent Selection Process",
      "text": "Winner selection is fully random and unbiased, using a certified random number generator to ensure everyone has an equal chance."
    },
    "importantNotice": {
      "title": "Winner Notification",
      "text": "The winner will be notified by email on July 2, 2025. Please check your inbox and spam folder regularly."
    },
    "faq": [
      {
        "q": "Who is eligible to enter?",
        "a": "Open to legal residents 18+ of Toronto and surrounding areas."
      },
      {
        "q": "When does the giveaway run?",
        "a": "Starts June 18, 2025, ends July 1, 2025, with draw July 2nd."
      },
      {
        "q": "How is the winner selected?",
        "a": "One winner is randomly drawn from all eligible entries received during the giveaway period."
      },
      {
        "q": "How will the winner be notified?",
        "a": "Notification will be sent by email on or about July 2, 2025.",
      },
      {
        "q": "How many entries are allowed?",
        "a": "Limit one entry per person/email address during the giveaway period."
      },
      {
        "q": "Is my information kept secure?",
        "a": "We respect your privacy and do not sell your information. It’s used only for giveaway purposes per our Privacy Policy."
      }
    ],
    "tips": [
      "Please double-check your email address before submitting.",
      "Add our contact email to your address book to avoid missing notifications.",
      "Follow Sky Group on social media for announcements and updates."
    ]
  },
  "footerContact": {
    "organizerName": "Sky Group",
    "organizerLogoUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/eed1f4ef-c781-4015-8092-dda5b2f860d9/68278639dbfc24a322fd422d.png",
    "email": "shar@theskygroup.ca",
    "phone": "1 647 887 4996",
    "address": "36 Distillery Lane Unit 500 Toronto M5A3C4",
    "social": {
      "facebook": "https://www.facebook.com/theskygroupre",
      "instagram": "https://www.instagram.com/theskygroup_re"
    },
    "copyrightOwner": "Sky Group"
  },
  "meta": {
    "pageTitle": "Win Toronto Blue Jays Tickets - Canada Day Giveaway!",
    "navBrandLogoText": "Sky Group",
    "privacyPolicyLink": "https://www.mls.theskygroup.ca/privacy-policy"
  },
  "settings": {
    "ghlWebhookUrl": "",
    "theme": "dark",
    "confettiColors": ["#004c97", "#99ccff", "#ffffff", "#0073e6", "#cce6ff"],
    "showCountdownInHero": true
  },
  "deploymentInfo": {
    "repoName": "Giveaway-513",
    "repoUrl": "https://github.com/arslvn93/Giveaway-513",
    "tag": "Blue Jays Canada Day Giveaway",
    "netlifyUrl": "http://Giveaway-513.netlify.app",
    "netlifyId": "1003313164"
  }
};