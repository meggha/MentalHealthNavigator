// import React, { useState } from "react";
// import "./Personality.css";
// import { Card } from "react-bootstrap";
// interface Question {
//   q: string;
//   f: string;
// }

// interface Percentages {
//   A: number;
//   B: number;
//   C: number;
//   N: number;
// }

// export const PersonalityTest: React.FC = () => {
//   const [questions, setQuestions] = useState<Question[]>([
    // { q: "Would you call yourself a thinker", f: "N" },
    // { q: "Are you creative", f: "N" },
    // { q: "Do you like philosophy", f: "N" },
    // { q: "Do you like to think about complex questions", f: "N" },
    // {
    //   q: "Do you have an interest in artistic pursuits like painting and writing",
    //   f: "N",
    // },
    // { q: "Do you like initiating conversations", f: "A" },
    // { q: "Do you like to start talks with new people", f: "A" },
    // {
    //   q: "Is it easy for you to adjust in an environment where you initially do not know anyone",
    //   f: "A",
    // },
    // { q: "Are you social", f: "A" },
    // { q: "Do you like social events (parties, fests and events)", f: "A" },
    // { q: "Do you mostly make your decisions by heart", f: "B" },
    // { q: "Do you put others before yourself", f: "B" },
    // {
    //   q: "Do you think that one should change their views if they hurt someone",
    //   f: "B",
    // },
    // { q: "Do you often get lost in your feelings", f: "B" },
    // { q: "Are you run more by your feelings than logic", f: "B" },
    // { q: "Can you make a timetable and stick to it", f: "C" },
    // { q: "Do you usually follow the rules/laws", f: "C" },
    // { q: "Are you organised", f: "C" },
    // { q: "Do you plan before doing something", f: "C" },
    // { q: "Are you ok with following orders", f: "C" },
//   ]);

//   const [apercent, setAPercent] = useState<Percentages>({
//     A: 0,
//     B: 0,
//     C: 0,
//     N: 0,
//   });
//   const [personalityType, setPersonalityType] = useState<string | null>(null);
//   const [careerChoices, setCareerChoices] = useState<string | null>(null);

//   const handleCheckboxChange = (index: number, value: string) => {
//     const newQuestions = [...questions];
//     newQuestions[index].f = value;
//     setQuestions(newQuestions);
//   };

//   const calculatePercentages = () => {
//     const newAPercent: Percentages = { A: 0, B: 0, C: 0, N: 0 };
//     let counter = 0;
//     questions.forEach((data) => {
//       if (counter < 5 && data.f === "Yes") {
//         newAPercent.N = newAPercent.N + 20;
//       } else if (counter >= 5 && counter < 10 && data.f === "Yes") {
//         newAPercent.A = newAPercent.A + 20;
//       } else if (counter >= 10 && counter < 15 && data.f === "Yes") {
//         newAPercent.B = newAPercent.B + 20;
//       } else if (counter >= 15 && counter < 20 && data.f === "Yes") {
//         newAPercent.C = newAPercent.C + 20;
//       }
//       counter++;
//     });

//     setAPercent(newAPercent);
//   };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   calculatePercentages();
  //   let sn: string, ie: string, jp: string, tf: string;

  //   if (apercent["N"] > 50) {
  //     sn = "N";
  //   } else {
  //     sn = "S";
  //   }

  //   if (apercent["A"] > 50) {
  //     ie = "E";
  //   } else {
  //     ie = "I";
  //   }

  //   if (apercent["C"] > 50) {
  //     jp = "J";
  //   } else {
  //     jp = "P";
  //   }

  //   if (apercent["B"] > 50) {
  //     tf = "F";
  //   } else {
  //     tf = "T";
  //   }

  //   const ptype = ie + sn + tf + jp;
  //   setPersonalityType(ptype);
  //   let choices = "";
  //   if (ptype === "INTP") {
  //     choices =
  //       "Physicists, chemists, biologists, photographers, strategic planners, mathematicians, university professors, computer programmers, computer animators, technical writers, engineers, lawyers, forensic researchers, writers, artists, psychologists, social scientists, systems analysts, researchers, surveyors. Highly analytical, you can discover connections between two seemingly unrelated things, and work best when allowed to use your imagination and critical thinking. You like working independently with creative freedom which will help you realize your full potential. In difficult circumstances, you do not like taking orders from other people and prefer it when things go as you personally like them to be.";
  //   } else if (ptype === "ENTP") {
  //     choices =
  //       "Entrepreneurs, lawyers, psychologists, consultants, sales representatives, actors, engineers, scientists, inventors, marketers, computer programmers, comedians, computer analysts, credit investigators, journalists, psychiatrists, public relations, designers, writers, artists, musicians, politicians. Very freedom-oriented, you need a career that allows you to act independently and express your creativity and insight. You do not like following rules if they do not make sense to you and prefer working independently.";
  //   } else if (ptype === "INTJ") {
  //     choices =
  //       "Scientists, engineers, professors, teachers, medical doctors, dentists, corporate strategists, organization founders, business administrators, managers, military, lawyers, judges, computer programmers, system analysts, computer specialists, psychologists, photographers, research department managers, researchers, university instructors. You have a particular skill at grasping difficult, complex concepts and building strategies.";
  //   } else if (ptype === "ENTJ") {
  //     choices =
  //       "Business executives, CEOs, organization founders, business administrators, managers, entrepreneurs, judges, lawyers, computer consultants, university professors, politicians, credit investigators, labor relations worker, marketing department manager, mortgage banker, systems analysts, scientists. They are born to lead and can steer the organization towards their vision, using their excellent organizing and understanding of what needs to get done.";
  //   } else if (ptype === "INFP") {
  //     choices =
  //       "Writers, artists, counselors, social workers, English teachers, fine arts teachers, child care workers, clergy, missionaries, psychologists, psychiatrists, scientists, political activists, editors, education consultants, journalists, religious educators, social scientists. Driven by a strong sense of personal values, they are also highly creative and can offer support from behind the scenes.";
  //   } else if (ptype === "ENFP") {
  //     choices =
  //       "Actors, journalists, writers, musicians, painters, consultants, psychologists, psychiatrists, entrepreneurs, teachers, counselors, politicians, television reporters, marketers, scientists, sales representatives, artists, clergy, public relations, social scientists, social workers. Very creative and fun-loving, they excel at careers that allow them to express their ideas and spontaneity.";
  //   } else if (ptype === "INFJ") {
  //     choices =
  //       "Counselors, clergy, missionaries, teachers, medical doctors, dentists, chiropractors, psychologists, psychiatrists, writers, musicians, artists, psychics, photographers, child care workers, education consultants, librarians, marketers, scientists, social workers. Blessed with an idealistic vision, they do best when they seek to make that vision a reality.";
  //   } else if (ptype === "ENFJ") {
  //     choices =
  //       "Teachers, consultants, psychiatrists, social workers, counselors, clergy, sales representative, human resources, managers, events coordinators, politicians, diplomats, writers, actors, designers, musicians, religious workers, writers. They have a gift of encouraging others to actualize themselves and provide excellent leadership.";
  //   } else if (ptype === "ISFP") {
  //     choices =
  //       "Artists, musicians, composers, designers, child care workers, social workers, counselors, teachers, veterinarians, forest rangers, bookkeepers, carpenters, personal service workers, clerical supervisors, secretaries, dental and medical staffers, waiters and waitresses, chefs, nurses, mechanics, physical therapists, x-ray technicians. They tend to do well in the arts, as well as helping others and working with people.";
  //   } else if (ptype === "ESFP") {
  //     choices =
  //       "Actors, painters, comedians, sales representatives, teachers, counselors, social workers, child care, fashion designers, interior decorators, consultants, photographers, musicians, human resources managers, clerical supervisors, coaches, factory supervisors, food service workers, receptionists, recreation workers, religious educators, respiratory therapists. Optimistic and fun-loving, their enthusiasm is great for motivating others.";
  //   } else if (ptype === "ISTP") {
  //     choices =
  //       "Police, detectives, forensic pathologists, computer programmers, system analysts, computer specialists, engineers, carpenters, mechanics, pilots, drivers, athletes, entrepreneurs, firefighters, paramedics, construction workers, dental hygienists, electrical engineers, farmers, military, probation officers, steelworkers, transportation operatives. With the ability to stay calm under pressure, they excel in any job that requires immediate action.";
  //   } else if (ptype === "ESTP") {
  //     choices =
  //       "Sales representatives, marketers, police, detectives, paramedics, medical technicians, computer technicians, computer technical support, entrepreneurs, comedians, agents, firefighters, military, auditors, carpenters, craft workers, farmers, laborers, service workers, transportation operatives. They have a gift for reacting to and solving immediate problems, and persuading other people.";
  //   } else if (ptype === "ISFJ") {
  //     choices =
  //       "Interior decorators, designers, nurses, administrators, managers, secretaries, child care/early childhood development, social work, counselors, paralegals, clergy, office managers, shopkeepers, bookkeepers, gardeners, clerical supervisors, curators, family practice physicians, health service workers, librarians, medical technologists, typists. Tradition-oriented and down-to-earth, they do best in jobs where they can help people achieve their goals, or where structure is needed.";
  //   } else if (ptype === "ESFJ") {
  //     choices =
  //       "Home economics, nursing, teaching, administrators, child care, family practice physician, clergy, office managers, counselors, social workers, bookkeeping, accounting, secretaries, organization leaders, dental assistants, radiological technologists, receptionists, religious educators, speech pathologists. They do best in jobs where they can apply their natural warmth at building relationships with other people.";
  //   } else if (ptype === "ISTJ") {
  //     choices =
  //       "Business executives, administrators and managers, accountants, police, detectives, judges, lawyers, medical doctors, dentists, computer programmers, systems analysts, computer specialists, auditors, electricians, math teachers, mechanical engineers, steelworkers, technicians. Similar to the House husbands, they have a knack for detail and memorization, but work more behind the scenes instead of up front as a leader.";
  //   } else if (ptype === "ESTJ") {
  //     choices =
  //       "Teacher, Professor, Military, business administrators, managers, police/detective work, judges, financial officers, teachers, sales representatives, government workers, insurance agents, underwriters, nursing administrators, trade and technical teachers, Natural leaders, they work best when they are in charge and enforcing the rules.";
  //   }

  //   setCareerChoices(choices);
  //   // You might want to handle this case appropriately, like displaying an error message

  //   // setCareerChoices(choices);
  // };

//   return (
//     <div>
//       <head>
//         <title>
//           <h1>Personality Test</h1>
//         </title>
//       </head>
//       <form onSubmit={handleSubmit}>
//         {questions.map((data, index) => (
//           <div key={index}>
//             <div style={{height:"50px",display:"flex" }}>
//               <div>
//               {index + 1}. {data.q}
//               </div>
              // <label>
              //   <div className="checkbox-wrapper-31">
              //     <input
              //       type="checkbox"
              //       checked={data.f === "Yes"}
              //       onChange={() => handleCheckboxChange(index, "Yes")}
              //     />
              //     <svg viewBox="0 0 35.6 35.6">
              //       <circle
              //         className="background"
              //         cx="17.8"
              //         cy="17.8"
              //         r="17.8"
              //       ></circle>
              //       <circle
              //         className="stroke"
              //         cx="17.8"
              //         cy="17.8"
              //         r="14.37"
              //       ></circle>
              //       <polyline
              //         className="check"
              //         points="11.78 18.12 15.55 22.23 25.17 12.87"
              //       ></polyline>
              //     </svg>
              //   </div>
              //   Yes
              // </label>
              // <label style={{display:"flex",justifyContent:"end"}}>
              //   <div className="checkbox-wrapper-31">
              //     <input
              //       type="checkbox"
              //       checked={data.f === "No"}
              //       onChange={() => handleCheckboxChange(index, "No")}
              //     />
              //     <svg viewBox="0 0 35.6 35.6">
              //       <circle
              //         className="background"
              //         cx="17.8"
              //         cy="17.8"
              //         r="17.8"
              //       ></circle>
              //       <circle
              //         className="stroke"
              //         cx="17.8"
              //         cy="17.8"
              //         r="14.37"
              //       ></circle>
              //       <polyline
              //         className="check"
              //         points="11.78 18.12 15.55 22.23 25.17 12.87"
              //       ></polyline>
              //     </svg>
              //   </div>
              //   No
              // </label>
//             </div>
//           </div>
//         ))}
//         <button type="submit">Submit</button>
//       </form>
//       <p>Your extroversion percentage: {apercent.A}%</p>
//       <p>Your creativity percentage: {apercent.N}%</p>
//       <p>Your feeling percentage: {apercent.B}%</p>
//       <p>Your conscientious percentage: {apercent.C}%</p>
//       <p>Your personality type is: {personalityType}</p>
//       {careerChoices && <p>Your career choices are: {careerChoices}</p>}
//     </div>
//   );
// };
import React, { useState } from "react";
import { Card } from "react-bootstrap";
  import "./Personality.css";

interface Question {
  q: string;
  f: string;
}

interface Percentages {
  A: number;
  B: number;
  C: number;
  N: number;
}

export const PersonalityTest: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([
    // ... your question array
    { q: "Would you call yourself a thinker", f: "N" },
    { q: "Are you creative", f: "N" },
    { q: "Do you like philosophy", f: "N" },
    { q: "Do you like to think about complex questions", f: "N" },
    {
      q: "Do you have an interest in artistic pursuits like painting and writing",
      f: "N",
    },
    { q: "Do you like initiating conversations", f: "A" },
    { q: "Do you like to start talks with new people", f: "A" },
    {
      q: "Is it easy for you to adjust in an environment where you initially do not know anyone",
      f: "A",
    },
    { q: "Are you social", f: "A" },
    { q: "Do you like social events (parties, fests and events)", f: "A" },
    { q: "Do you mostly make your decisions by heart", f: "B" },
    { q: "Do you put others before yourself", f: "B" },
    {
      q: "Do you think that one should change their views if they hurt someone",
      f: "B",
    },
    { q: "Do you often get lost in your feelings", f: "B" },
    { q: "Are you run more by your feelings than logic", f: "B" },
    { q: "Can you make a timetable and stick to it", f: "C" },
    { q: "Do you usually follow the rules/laws", f: "C" },
    { q: "Are you organised", f: "C" },
    { q: "Do you plan before doing something", f: "C" },
    { q: "Are you ok with following orders", f: "C" },
  ]);
  const [apercent, setAPercent] = useState<Percentages>({
    A: 0,
    B: 0,
    C: 0,
    N: 0,
  });
  const [personalityType, setPersonalityType] = useState<string | null>(null);
  const [careerChoices, setCareerChoices] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false); // New state variable

  const handleCheckboxChange = (index: number, value: string) => {
    const newQuestions = [...questions];
    newQuestions[index].f = value;
    setQuestions(newQuestions);
    calculatePercentages(); // Calculate percentages as questions are answered
  };

  const calculatePercentages = () => {
    let counter = 0;
    let answeredCount = 0;
    const newAPercent: Percentages = { A: 0, B: 0, C: 0, N: 0 };
    questions.forEach((data) => {
      if (data.f !== "") {
        answeredCount++;
        if (counter < 5 && data.f === "Yes") {
          newAPercent.N = (newAPercent.N + 20) / answeredCount;
        } else if (counter >= 5 && counter < 10 && data.f === "Yes") {
          newAPercent.A = (newAPercent.A + 20) / answeredCount;
        } else if (counter >= 10 && counter < 15 && data.f === "Yes") {
          newAPercent.B = (newAPercent.B + 20) / answeredCount;
        } else if (counter >= 15 && counter < 20 && data.f === "Yes") {
          newAPercent.C = (newAPercent.C + 20) / answeredCount;
        }
      }
      counter++;
    });

    setAPercent(newAPercent);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    if (currentQuestionIndex === questions.length) {
      handleSubmit(); // Calculate personality type and display results on last question
    }
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  // const handleSubmit = () => {
  //   let sn: string, ie: string, jp: string, tf: string;

  //   if (apercent["N"] > 50) {
  //     sn = "N";
  //   } else {
  //     sn = "S";
  //   }



  //   if (apercent["A"] > 50) {
  //     ie = "E";
  //   } else {
  //     ie = "I";
  //   }

  //   if (apercent["C"] > 50) {
  //     jp = "J";
  //   } else {
  //     jp = "P";
  //   }

  //   if (apercent["B"] > 50) {
  //     tf = "F";
  //   } else {
  //     tf = "T";
  //   }

  //   const ptype = ie + sn + tf + jp;
  //   setPersonalityType(ptype);

  //   let careerChoices = "";
  //   if (ptype === "INTP") {
  //     careerChoices =
  //       "Physicists, chemists, biologists, photographers, strategic planners, mathematicians, university professors, computer programmers, computer animators, technical writers, engineers, lawyers, forensic researchers, writers, artists, psychologists, social scientists, systems analysts, researchers, surveyors. Highly analytical, you can discover connections between two seemingly unrelated things, and work best when allowed to use your imagination and critical thinking. You like working independently with creative freedom which will help you realize your full potential. In difficult circumstances, you do not like taking orders from other people and prefer it when things go as you personally like them to be.";
  //   } else if (ptype === "ENTP") {
  //     careerChoices =
  //       "Entrepreneurs, lawyers, psychologists, consultants, sales representatives, actors, engineers, scientists, inventors, marketers, computer programmers, comedians, computer analysts, credit investigators, journalists, psychiatrists, public relations, designers, writers, artists, musicians, politicians. Very freedom-oriented, you need a career that allows you to act independently and express your creativity and insight. You do not like following rules if they do not make sense to you and prefer working independently.";
  //   } else if (ptype === "INTJ") {
  //     careerChoices =
  //       "Scientists, engineers, professors, teachers, medical doctors, dentists, corporate strategists, organization founders, business administrators, managers, military, lawyers, judges, computer programmers, system analysts, computer specialists, psychologists, photographers, research department managers, researchers, university instructors. You have a particular skill at grasping difficult, complex concepts and building strategies.";
  //   } else if (ptype === "ENTJ") {
  //     careerChoices =
  //       "Business executives, CEOs, organization founders, business administrators, managers, entrepreneurs, judges, lawyers, computer consultants, university professors, politicians, credit investigators, labor relations worker, marketing department manager, mortgage banker, systems analysts, scientists. They are born to lead and can steer the organization towards their vision, using their excellent organizing and understanding of what needs to get done.";
  //   } else if (ptype === "INFP") {
  //     careerChoices =
  //       "Writers, artists, counselors, social workers, English teachers, fine arts teachers, child care workers, clergy, missionaries, psychologists, psychiatrists, scientists, political activists, editors, education consultants, journalists, religious educators, social scientists. Driven by a strong sense of personal values, they are also highly creative and can offer support from behind the scenes.";
  //   } else if (ptype === "ENFP") {
  //     careerChoices =
  //       "Actors, journalists, writers, musicians, painters, consultants, psychologists, psychiatrists, entrepreneurs, teachers, counselors, politicians, television reporters, marketers, scientists, sales representatives, artists, clergy, public relations, social scientists, social workers. Very creative and fun-loving, they excel at careers that allow them to express their ideas and spontaneity.";
  //   } else if (ptype === "INFJ") {
  //     careerChoices =
  //       "Counselors, clergy, missionaries, teachers, medical doctors, dentists, chiropractors, psychologists, psychiatrists, writers, musicians, artists, psychics, photographers, child care workers, education consultants, librarians, marketers, scientists, social workers. Blessed with an idealistic vision, they do best when they seek to make that vision a reality.";
  //   } else if (ptype === "ENFJ") {
  //     careerChoices =
  //       "Teachers, consultants, psychiatrists, social workers, counselors, clergy, sales representative, human resources, managers, events coordinators, politicians, diplomats, writers, actors, designers, musicians, religious workers, writers. They have a gift of encouraging others to actualize themselves and provide excellent leadership.";
  //   } else if (ptype === "ISFP") {
  //     careerChoices =
  //       "Artists, musicians, composers, designers, child care workers, social workers, counselors, teachers, veterinarians, forest rangers, bookkeepers, carpenters, personal service workers, clerical supervisors, secretaries, dental and medical staffers, waiters and waitresses, chefs, nurses, mechanics, physical therapists, x-ray technicians. They tend to do well in the arts, as well as helping others and working with people.";
  //   } else if (ptype === "ESFP") {
  //     careerChoices =
  //       "Actors, painters, comedians, sales representatives, teachers, counselors, social workers, child care, fashion designers, interior decorators, consultants, photographers, musicians, human resources managers, clerical supervisors, coaches, factory supervisors, food service workers, receptionists, recreation workers, religious educators, respiratory therapists. Optimistic and fun-loving, their enthusiasm is great for motivating others.";
  //   } else if (ptype === "ISTP") {
  //     careerChoices =
  //       "Police, detectives, forensic pathologists, computer programmers, system analysts, computer specialists, engineers, carpenters, mechanics, pilots, drivers, athletes, entrepreneurs, firefighters, paramedics, construction workers, dental hygienists, electrical engineers, farmers, military, probation officers, steelworkers, transportation operatives. With the ability to stay calm under pressure, they excel in any job that requires immediate action.";
  //   } else if (ptype === "ESTP") {
  //     careerChoices =
  //       "Sales representatives, marketers, police, detectives, paramedics, medical technicians, computer technicians, computer technical support, entrepreneurs, comedians, agents, firefighters, military, auditors, carpenters, craft workers, farmers, laborers, service workers, transportation operatives. They have a gift for reacting to and solving immediate problems, and persuading other people.";
  //   } else if (ptype === "ISFJ") {
  //     careerChoices =
  //       "Interior decorators, designers, nurses, administrators, managers, secretaries, child care/early childhood development, social work, counselors, paralegals, clergy, office managers, shopkeepers, bookkeepers, gardeners, clerical supervisors, curators, family practice physicians, health service workers, librarians, medical technologists, typists. Tradition-oriented and down-to-earth, they do best in jobs where they can help people achieve their goals, or where structure is needed.";
  //   } else if (ptype === "ESFJ") {
  //     careerChoices =
  //       "Home economics, nursing, teaching, administrators, child care, family practice physician, clergy, office managers, counselors, social workers, bookkeeping, accounting, secretaries, organization leaders, dental assistants, radiological technologists, receptionists, religious educators, speech pathologists. They do best in jobs where they can apply their natural warmth at building relationships with other people.";
  //   } else if (ptype === "ISTJ") {
  //     careerChoices =
  //       "Business executives, administrators and managers, accountants, police, detectives, judges, lawyers, medical doctors, dentists, computer programmers, systems analysts, computer specialists, auditors, electricians, math teachers, mechanical engineers, steelworkers, technicians. Similar to the House husbands, they have a knack for detail and memorization, but work more behind the scenes instead of up front as a leader.";
  //   } else if (ptype === "ESTJ") {
  //     careerChoices =
  //       "Teacher, Professor, Military, business administrators, managers, police/detective work, judges, financial officers, teachers, sales representatives, government workers, insurance agents, underwriters, nursing administrators, trade and technical teachers, Natural leaders, they work best when they are in charge and enforcing the rules.";
  //   }
  //   setSubmitButtonClicked(true);
  // };
  const handleSubmit=(e: React.FormEvent)=>  {
    e.preventDefault();
    calculatePercentages();
    let sn: string, ie: string, jp: string, tf: string;

    if (apercent["N"] > 50) {
      sn = "N";
    } else {
      sn = "S";
    }

    if (apercent["A"] > 50) {
      ie = "E";
    } else {
      ie = "I";
    }

    if (apercent["C"] > 50) {
      jp = "J";
    } else {
      jp = "P";
    }

    if (apercent["B"] > 50) {
      tf = "F";
    } else {
      tf = "T";
    }

    const ptype = ie + sn + tf + jp;
    setPersonalityType(ptype);
    let choices = "";
    if (ptype === "INTP") {
      choices =
        "Physicists, chemists, biologists, photographers, strategic planners, mathematicians, university professors, computer programmers, computer animators, technical writers, engineers, lawyers, forensic researchers, writers, artists, psychologists, social scientists, systems analysts, researchers, surveyors. Highly analytical, you can discover connections between two seemingly unrelated things, and work best when allowed to use your imagination and critical thinking. You like working independently with creative freedom which will help you realize your full potential. In difficult circumstances, you do not like taking orders from other people and prefer it when things go as you personally like them to be.";
    } else if (ptype === "ENTP") {
      choices =
        "Entrepreneurs, lawyers, psychologists, consultants, sales representatives, actors, engineers, scientists, inventors, marketers, computer programmers, comedians, computer analysts, credit investigators, journalists, psychiatrists, public relations, designers, writers, artists, musicians, politicians. Very freedom-oriented, you need a career that allows you to act independently and express your creativity and insight. You do not like following rules if they do not make sense to you and prefer working independently.";
    } else if (ptype === "INTJ") {
      choices =
        "Scientists, engineers, professors, teachers, medical doctors, dentists, corporate strategists, organization founders, business administrators, managers, military, lawyers, judges, computer programmers, system analysts, computer specialists, psychologists, photographers, research department managers, researchers, university instructors. You have a particular skill at grasping difficult, complex concepts and building strategies.";
    } else if (ptype === "ENTJ") {
      choices =
        "Business executives, CEOs, organization founders, business administrators, managers, entrepreneurs, judges, lawyers, computer consultants, university professors, politicians, credit investigators, labor relations worker, marketing department manager, mortgage banker, systems analysts, scientists. They are born to lead and can steer the organization towards their vision, using their excellent organizing and understanding of what needs to get done.";
    } else if (ptype === "INFP") {
      choices =
        "Writers, artists, counselors, social workers, English teachers, fine arts teachers, child care workers, clergy, missionaries, psychologists, psychiatrists, scientists, political activists, editors, education consultants, journalists, religious educators, social scientists. Driven by a strong sense of personal values, they are also highly creative and can offer support from behind the scenes.";
    } else if (ptype === "ENFP") {
      choices =
        "Actors, journalists, writers, musicians, painters, consultants, psychologists, psychiatrists, entrepreneurs, teachers, counselors, politicians, television reporters, marketers, scientists, sales representatives, artists, clergy, public relations, social scientists, social workers. Very creative and fun-loving, they excel at careers that allow them to express their ideas and spontaneity.";
    } else if (ptype === "INFJ") {
      choices =
        "Counselors, clergy, missionaries, teachers, medical doctors, dentists, chiropractors, psychologists, psychiatrists, writers, musicians, artists, psychics, photographers, child care workers, education consultants, librarians, marketers, scientists, social workers. Blessed with an idealistic vision, they do best when they seek to make that vision a reality.";
    } else if (ptype === "ENFJ") {
      choices =
        "Teachers, consultants, psychiatrists, social workers, counselors, clergy, sales representative, human resources, managers, events coordinators, politicians, diplomats, writers, actors, designers, musicians, religious workers, writers. They have a gift of encouraging others to actualize themselves and provide excellent leadership.";
    } else if (ptype === "ISFP") {
      choices =
        "Artists, musicians, composers, designers, child care workers, social workers, counselors, teachers, veterinarians, forest rangers, bookkeepers, carpenters, personal service workers, clerical supervisors, secretaries, dental and medical staffers, waiters and waitresses, chefs, nurses, mechanics, physical therapists, x-ray technicians. They tend to do well in the arts, as well as helping others and working with people.";
    } else if (ptype === "ESFP") {
      choices =
        "Actors, painters, comedians, sales representatives, teachers, counselors, social workers, child care, fashion designers, interior decorators, consultants, photographers, musicians, human resources managers, clerical supervisors, coaches, factory supervisors, food service workers, receptionists, recreation workers, religious educators, respiratory therapists. Optimistic and fun-loving, their enthusiasm is great for motivating others.";
    } else if (ptype === "ISTP") {
      choices =
        "Police, detectives, forensic pathologists, computer programmers, system analysts, computer specialists, engineers, carpenters, mechanics, pilots, drivers, athletes, entrepreneurs, firefighters, paramedics, construction workers, dental hygienists, electrical engineers, farmers, military, probation officers, steelworkers, transportation operatives. With the ability to stay calm under pressure, they excel in any job that requires immediate action.";
    } else if (ptype === "ESTP") {
      choices =
        "Sales representatives, marketers, police, detectives, paramedics, medical technicians, computer technicians, computer technical support, entrepreneurs, comedians, agents, firefighters, military, auditors, carpenters, craft workers, farmers, laborers, service workers, transportation operatives. They have a gift for reacting to and solving immediate problems, and persuading other people.";
    } else if (ptype === "ISFJ") {
      choices =
        "Interior decorators, designers, nurses, administrators, managers, secretaries, child care/early childhood development, social work, counselors, paralegals, clergy, office managers, shopkeepers, bookkeepers, gardeners, clerical supervisors, curators, family practice physicians, health service workers, librarians, medical technologists, typists. Tradition-oriented and down-to-earth, they do best in jobs where they can help people achieve their goals, or where structure is needed.";
    } else if (ptype === "ESFJ") {
      choices =
        "Home economics, nursing, teaching, administrators, child care, family practice physician, clergy, office managers, counselors, social workers, bookkeeping, accounting, secretaries, organization leaders, dental assistants, radiological technologists, receptionists, religious educators, speech pathologists. They do best in jobs where they can apply their natural warmth at building relationships with other people.";
    } else if (ptype === "ISTJ") {
      choices =
        "Business executives, administrators and managers, accountants, police, detectives, judges, lawyers, medical doctors, dentists, computer programmers, systems analysts, computer specialists, auditors, electricians, math teachers, mechanical engineers, steelworkers, technicians. Similar to the House husbands, they have a knack for detail and memorization, but work more behind the scenes instead of up front as a leader.";
    } else if (ptype === "ESTJ") {
      choices =
        "Teacher, Professor, Military, business administrators, managers, police/detective work, judges, financial officers, teachers, sales representatives, government workers, insurance agents, underwriters, nursing administrators, trade and technical teachers, Natural leaders, they work best when they are in charge and enforcing the rules.";
    }

    setCareerChoices(choices);
    // You might want to handle this case appropriately, like displaying an error message

    // setCareerChoices(choices);
  };


  return (
    
    <div  >
      <head>
        <title>
          <h1>Personality Test</h1>
        </title>
      </head>
      <div >
        {(personalityType && careerChoices) || submitButtonClicked ? (

          <div >
            <h2>Your Personality Type: {personalityType}</h2>
            <h4>Recommended Career Choices:</h4>
            <p>{careerChoices}</p>

          </div>
        ) : ( 
        <div className="card1" style={{display:"flex",justifyContent:"center", alignItems:"center",backgroundColor:"#F8E559"}} >
        {questions[currentQuestionIndex] && (
         <div key={currentQuestionIndex}>
           <h4>{questions[currentQuestionIndex].q}</h4>
           <div  style={{display:"flex",  justifyContent:"space-around", flexWrap:"wrap" , padding:"20px"}}>
           <label>
               <div className="checkbox-wrapper-31">
                 <input
                   type="checkbox"
                   checked={questions[currentQuestionIndex].f === "Yes"}
                   onChange={() => handleCheckboxChange(currentQuestionIndex, "Yes")}
                 />
                 <svg viewBox="0 0 35.6 35.6">
                   <circle
                     className="background"
                     cx="17.8"
                     cy="17.8"
                     r="17.8"
                   ></circle>
                   <circle
                     className="stroke"
                     cx="17.8"
                     cy="17.8"
                     r="14.37"
                   ></circle>
                   <polyline
                     className="check"
                     points="11.78 18.12 15.55 22.23 25.17 12.87"
                   ></polyline>
                 </svg>
               </div>
               Yes
             </label>
             <label >
               <div className="checkbox-wrapper-31">
                 <input
                   type="checkbox"
                   checked={questions[currentQuestionIndex].f === "No"}
                   onChange={() => handleCheckboxChange(currentQuestionIndex, "No")}
                 />
                 <svg viewBox="0 0 35.6 35.6">
                   <circle
                     className="background"
                     cx="17.8"
                     cy="17.8"
                     r="17.8"
                   ></circle>
                   <circle
                     className="stroke"
                     cx="17.8"
                     cy="17.8"
                     r="14.37"
                   ></circle>
                   <polyline
                     className="check"
                     points="11.78 18.12 15.55 22.23 25.17 12.87"
                   ></polyline>
                 </svg>
               </div>
               No
             </label>
             </div>
           <div style={{display:"flex",justifyContent:"space-around", padding:"20px"}}>
           <button className="button2" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
             Previous
           </button>
           <button className="button2" onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
             Next
           </button>
           </div>
         </div>
       )}
       <div style={{display:"flex",justifyContent:"space-around", padding:"20px"}}>
       <button type="submit"  className="button2" onClick={handleSubmit} disabled={currentQuestionIndex !== questions.length - 1}>Submit</button> 
     </div>
     </div>
   )}
        {/* <div className="card1" style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
         {questions[currentQuestionIndex] && (
          <div key={currentQuestionIndex}>
            <h4>{questions[currentQuestionIndex].q}</h4>
            <div  style={{display:"flex",  justifyContent:"space-around", flexWrap:"wrap" , padding:"20px"}}>
            <label>
                <div className="checkbox-wrapper-31">
                  <input
                    type="checkbox"
                    checked={questions[currentQuestionIndex].f === "Yes"}
                    onChange={() => handleCheckboxChange(currentQuestionIndex, "Yes")}
                  />
                  <svg viewBox="0 0 35.6 35.6">
                    <circle
                      className="background"
                      cx="17.8"
                      cy="17.8"
                      r="17.8"
                    ></circle>
                    <circle
                      className="stroke"
                      cx="17.8"
                      cy="17.8"
                      r="14.37"
                    ></circle>
                    <polyline
                      className="check"
                      points="11.78 18.12 15.55 22.23 25.17 12.87"
                    ></polyline>
                  </svg>
                </div>
                Yes
              </label>
              <label >
                <div className="checkbox-wrapper-31">
                  <input
                    type="checkbox"
                    checked={questions[currentQuestionIndex].f === "No"}
                    onChange={() => handleCheckboxChange(currentQuestionIndex, "No")}
                  />
                  <svg viewBox="0 0 35.6 35.6">
                    <circle
                      className="background"
                      cx="17.8"
                      cy="17.8"
                      r="17.8"
                    ></circle>
                    <circle
                      className="stroke"
                      cx="17.8"
                      cy="17.8"
                      r="14.37"
                    ></circle>
                    <polyline
                      className="check"
                      points="11.78 18.12 15.55 22.23 25.17 12.87"
                    ></polyline>
                  </svg>
                </div>
                No
              </label>
              </div>
            <div style={{display:"flex",justifyContent:"space-around", padding:"20px"}}>
            <button className="button2" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
              Previous
            </button>
            <button className="button2" onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
              Next
            </button>
            </div>
          </div>
        )}
        <div style={{display:"flex",justifyContent:"space-around", padding:"20px"}}>
        <button type="submit"  className="button2" onClick={handleSubmit} disabled={currentQuestionIndex !== questions.length - 1}>Submit</button> 
      </div>
      </div>
    </div>
    </div> */}
    </div>
   </div>
  );
};