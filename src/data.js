const questions = [
    {
      "question": "What is the smallest planet in our solar system?",
      "options": ["Mars", "Venus", "Mercury", "Pluto"],
      "correctOption": 3,
      "category": "science",
      "difficulty": "easy"
    },
    {
      "question": "What is the name of the world's largest social media platform?",
      "options": ["Twitter", "Instagram", "Facebook", "LinkedIn"],
      "correctOption": 3,
      "category": "technology",
      "difficulty": "medium"
    },
    {
      "question": "Which country has the world's largest population?",
      "options": ["India", "Russia", "China", "United States"],
      "correctOption": 3,
      "category": "world-affairs",
      "difficulty": "hard"
    },
    {
      "question": "Who holds the record for the most goals scored in a single FIFA World Cup tournament?",
      "options": ["Diego Maradona", "Pele", "Ronaldo", "Just Fontaine"],
      "correctOption": 4,
      "category": "sports",
      "difficulty": "medium"
    },
    {
      "question": "What is the name of the phenomenon where a full moon appears larger and brighter than normal?",
      "options": ["Supermoon", "Blue Moon", "Harvest Moon", "Blood Moon"],
      "correctOption": 1,
      "category": "science",
      "difficulty": "hard"
    },
    {
      "question": "What is the name of the largest species of sea turtle?",
      "options": ["Leatherback", "Green", "Hawksbill", "Loggerhead"],
      "correctOption": 1,
      "category": "world-affairs",
      "difficulty": "medium"
    },
    {
      "question": "Which company is the largest producer of computer processors?",
      "options": ["Intel", "AMD", "Nvidia", "Apple"],
      "correctOption": 1,
      "category": "technology",
      "difficulty": "easy"
    },
    {
      "question": "Which country won the first FIFA World Cup tournament in 1930?",
      "options": ["Uruguay", "Brazil", "Argentina", "Italy"],
      "correctOption": 1,
      "category": "sports",
      "difficulty": "hard"
    },
    {
      "question": "What is the name of the longest river in Africa?",
      "options": ["Nile", "Congo", "Zambezi", "Niger"],
      "correctOption": 1,
      "category": "world-affairs",
      "difficulty": "easy"
    },
    {
      "question": "What is the chemical symbol for gold?",
      "options": ["Ag", "Au", "Fe", "Cu"],
      "correctOption": 2,
      "category": "science",
      "difficulty": "easy"
    },
    {
      "question": "What is the name of the largest planet in our solar system?",
      "options": ["Mars", "Saturn", "Jupiter", "Uranus"],
      "correctOption": 3,
      "category": "science",
      "difficulty": "medium"
    },
    {
      "question": "What is the name of the first website ever created?",
      "options": ["Google", "Yahoo", "Amazon", "CERN"],
      "correctOption": 4,
      "category": "technology",
      "difficulty": "hard"
    },
    {
      "question": "Which country is home to the world's largest desert?",
      "options": ["United States", "China", "Russia", "Algeria"],
      "correctOption": 4,
      "category": "world-affairs",
      "difficulty": "medium"
    },
    {
      "question": "Which country has won the most Olympic gold medals of all time?",
      "options": ["United States", "Russia", "China", "Germany"],
      "correctOption": 1,
      "category": "sports",
      "difficulty": "hard"
    },
    {
      "question": "What is the name of the device used to measure wind speed?",
      "options": ["Barometer", "Thermometer", "Anemometer", "Hygrometer"],
      "correctOption": 3,
      "category": "science",
      "difficulty": "medium"
    },
    {
      "question": "What is the name of the largest planet in our solar system?",
      "options": ["Mars", "Saturn", "Jupiter", "Uranus"],
      "correctOption": 3,
      "category": "science",
      "difficulty": "medium"
    },
    {
      "question": "What is the name of the first programming language?",
      "options": ["C", "Fortran", "Java", "Python"],
      "correctOption": 2,
      "category": "technology",
      "difficulty": "hard"
    },
    {
      "question": "Which country has won the most FIFA World Cup tournaments?",
      "options": ["Brazil", "Germany", "Argentina", "Italy"],
      "correctOption": 1,
      "category": "sports",
      "difficulty": "hard"
    },
    {
      "question": "What is the smallest bone in the human body?",
      "options": ["Stapes", "Femur", "Humerus", "Tibia"],
      "correctOption": 1,
      "category": "science",
      "difficulty": "easy"
    },
    {
      "question": "What does the acronym HTML stand for?",
      "options": ["Hyperlink Text Markup Language", "Hypertext Markup Language", "Hypermedia Text Markup Language", "Hypertext Transfer Markup Language"],
      "correctOption": 2,
      "category": "technology",
      "difficulty": "medium"
    },
    {
      "question": "Which city is the capital of Australia?",
      "options": ["Melbourne", "Sydney", "Canberra", "Brisbane"],
      "correctOption": 3,
      "category": "world-affairs",
      "difficulty": "easy"
    },
    {
      "question": "In what year did Usain Bolt break the world record in the 100m sprint?",
      "options": ["2008", "2012", "2016", "2020"],
      "correctOption": 1,
      "category": "sports",
      "difficulty": "medium"
    },
    {
      "question": "What is the boiling point of water in degrees Celsius?",
      "options": ["100", "50", "0", "-50"],
      "correctOption": 1,
      "category": "science",
      "difficulty": "easy"
    },
    {
      "question": "What is the name of the world's largest coral reef system?",
      "options": ["Amazon Reef", "Great Barrier Reef", "Belize Barrier Reef", "Mesoamerican Barrier Reef"],
      "correctOption": 2,
      "category": "science",
      "difficulty": "medium"
    },
    {
      "question": "What is the name of the first commercially successful personal computer?",
      "options": ["IBM PC", "Apple Macintosh", "Compaq Portable", "Atari 800"],
      "correctOption": 1,
      "category": "technology",
      "difficulty": "hard"
    },
    {
      "question": "Which country is the largest in terms of land area?",
      "options": ["Russia", "Canada", "China", "United States"],
      "correctOption": 1,
      "category": "world-affairs",
      "difficulty": "easy"
    },
    {
      "question": "Which country has won the most Wimbledon tennis singles titles (men's and women's combined)?",
      "options": ["United States", "Switzerland", "Great Britain", "Australia"],
      "correctOption": 3,
      "category": "sports",
      "difficulty": "hard"
    },
    {
      "question": "What is the atomic number of oxygen?",
      "options": ["6", "8", "10", "12"],
      "correctOption": 2,
      "category": "science",
      "difficulty": "easy"
    },
    {
      "question": "Which programming language was invented by Guido van Rossum in the 1990s?",
      "options": ["Java", "C++", "Python", "JavaScript"],
      "correctOption": 3,
      "category": "technology",
      "difficulty": "medium"
    },
    {
      "question": "What is the name of the largest ocean on Earth?",
      "options": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
      "correctOption": 3,
      "category": "world-affairs",
      "difficulty": "easy"
    },
    {
      "question": "Which country has won the most Olympic gold medals (summer and winter combined)?",
      "options": ["United States", "Russia", "China", "Germany"],
      "correctOption": 1,
      "category": "sports",
      "difficulty": "hard"
    },
    // Add more questions...
  ];
  
  export default questions;
  