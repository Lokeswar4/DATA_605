const scenarios = [
    {
        "situation": "Q. You, as a healthcare professional, discover that a colleague gained unauthorized access to a patient's genetic data and shared it with a friend at a competing research institution.",
        "options": [
            ["A. Report the unauthorized access to the appropriate authorities, and notify the affected patient.", 
             "Ethical and legal; ensures accountability, transparency, and patient trust."],
            ["B. Monitor the situation discreetly without involving authorities.", 
             "Unethical, risks further breaches, compromises patient confidentiality."],
            ["C. Confront the colleague personally and ask for an explanation.", 
             "Risks conflicts, lacks appropriate authority involvement."],
            ["D. Share more genetic data with other colleagues to maintain a sense of equality.", 
             "Unethical, worsens breach, damages trust among patients and colleagues."]
        ],
        "correct_option": 0
    },
    {
        "situation": "Q. As a genetic researcher, you discover a potential breakthrough using patient data but are conflicted about whether to publish the findings immediately or wait until further research is conducted.",
        "options": [
            ["A. Publish the findings immediately to share the discovery with the scientific community.", 
             "May gain immediate recognition, but risks inaccuracies and lacks thorough validation."],
            ["B. Share the preliminary findings with a select group of colleagues to receive early feedback.", 
             "Ethical; seeks input for improvement. Balances collaboration with responsible research practices."],
            ["C. Wait until further research is conducted to ensure the accuracy and reliability of the findings.", 
             "Ethical; prioritizes scientific integrity, accuracy, and reliability."],
            ["D. Suppress the information temporarily to conduct additional research without external scrutiny.", 
             "Risks hindering scientific progress; delays dissemination of potential benefits."]
        ],
        "correct_option": 2
    },
    {
        "situation": "Q. You, as an HR professional, are tasked with implementing mandatory genetic testing for employees to identify potential health risks and reduce healthcare costs.",
        "options": [
            ["A. Refuse to implement mandatory genetic testing for employees, focusing on voluntary wellness programs.", 
            "Autonomy, trust, wellness, privacy - a positive company culture embodies."],
            ["B. Implement mandatory testing without providing any alternative options.", 
            "Violating employee privacy erodes trust, risks legal backlash, harms morale."],
            ["C. Only test certain groups of employees based on perceived health risks.", 
            "Discrimination concerns, employee divisions, legal challenges, tarnished company reputation."],
            ["D. Offer incentives for employees who agree to genetic testing to encourage participation.", 
            "Coercion risks, privacy breaches, ethical dilemmas, employee distrust, wellness initiative credibility."]
        ],
        "correct_option": 0
    },
    {
        "situation": "Q. As a citizen, the government proposes a program to collect genetic data for surveillance purposes, claiming it will enhance national security.",
        "options": [
            ["A. Support the government's proposal, trusting it will only be used for legitimate security purposes.", 
            "Privacy risks, rights erosion, trust loss, unchecked surveillance, ethical concerns."],
            ["B. Remain neutral on the proposal, weighing both positive and negative consequences.", 
            "Perpetuates abuses, lacks rights engagement, fosters apathy, risking consequences."],
            ["C. Oppose the government's proposal, citing concerns about privacy invasion and misuse of genetic information.", 
            "Safeguards privacy, fuels ethics, thwarts abuse, shields rights from government."],
            ["D. Encourage citizens to willingly submit their genetic data for national security.", 
            "Privacy erosion, invasive norms, collective security weaken rights, long-term liberty threats."]
        ],
        "correct_option": 2
    },
    {
        "situation": "Q. You work in the scientific community where a biotechnology company patents a specific genetic sequence, limiting access to research and potentially hindering the development of new treatments.",
        "options": [
            ["A. Advocate for company genetic patents to incentivize innovation and profit.", 
            "Prioritizing profit over science risks monopolies, hinders innovation, and ethical healthcare concerns."],
            ["B. Ignore the issue, assuming it does not affect the broader scientific community.", 
            "Neglecting consequences hampers transparency, collaboration, hindering scientific progress and advancements."],
            ["C. Encourage other companies to patent similar genetic sequences for competition.", 
            "Competition hinders collaboration, delays genetic data sharing, and hampers healthcare."],
            ["D. Advocate for open-access policies and challenge the patent.", 
            "Promotes collaboration, speeds research, spurs innovation, advances medical science."]
        ],
        "correct_option": 3
    },
    {
        "situation": "Q. You, as a scientist, are part of a team developing a genetic enhancement technology that could potentially increase human intelligence, strength, and longevity.",
        "options": [
            ["A. Proceed with genetic enhancement on a small scale without public knowledge.", 
            "Lack of transparency risks mistrust, backlash, and ethical concerns."],
            ["B. Ban all genetic enhancement technologies to avoid ethical dilemmas.", 
            "Limiting genetic enhancement hampers progress, fosters illicit practices, overlooks ethical potential."],
            ["C. Initiate global dialogue for ethical genetic enhancement guidelines.", 
            "Guidelines promote genetic enhancement ethics, trust, and inclusive responsible development."],
            ["D. Proceed without regulations, letting individual scientists determine ethics.", 
            "Ethical concerns: misuse, guidelines, inconsistency, safety, consequences, accountability, harm."]
        ],
        "correct_option": 2
    },
    {
        "situation": "Q. Your healthcare organization is planning to introduce genetic counselling services to assist individuals in understanding their genetic information, potential health risks, and family planning decisions. This raises ethical concerns about ensuring informed consent, maintaining confidentiality, and providing unbiased guidance.",
        "options": [
            ["A. Implement genetic counselling services without emphasizing informed consent.", 
            "Transparency, coercion, mistrust, legality, consent: ethics demand careful consideration."],
            ["B. Create robust genetic counseling with informed consent, confidentiality, and impartial support.", 
            "Ethical genetics counsel empowers, builds trust, informs, and fosters relationships."],
            ["C. Hire genetic counsellors who lean towards a particular ethical or religious stance.", 
            "Bias concerns erode trust, risk ethics, influence decisions in counseling."],
            ["D. Share genetic information during counselling sessions with third-party organizations without explicit consent.", 
            "Privacy, trust issues: legal risks, harm reputation, deter counseling, data misuse."]
        ],
        "correct_option": 1
    },
    {
        "situation": "Q. A government health agency is considering implementing mandatory genetic testing for all newborns to identify potential health conditions early in life. Concerns arise regarding parental consent, the potential for stigmatization, and the long-term implications of storing sensitive genetic information.",
        "options": [
            ["A. Implement mandatory genetic testing for all newborns without an opt-out choice.", 
            "Parental autonomy, consent, rights, legality, trust, data: ethical dilemmas."],
            ["B. Offer incentives for parents who agree to genetic testing for their newborns.", 
            "Coercion in healthcare risks ethics, privacy, trust, and parental pressure."],
            ["C. Promote opt-out system for genetic testing for newborns, ensuring autonomy, consent, secure storage.", 
            "Promotes parental autonomy, informed choices, safeguards genetic data, ensuring child health and privacy."],
            ["D. Share genetic information from newborns with external research organizations without parental consent.", 
            "Privacy, consent, parental betrayal, legal woes, healthcare trust, data misuse."]
        ],
        "correct_option": 2
    },
    {
        "situation": "Q. You work in a healthcare institution considering selling aggregated genetic data to pharmaceutical companies to generate additional revenue.",
        "options": [
            ["A. Sell the data but allocate a percentage of profits to support patient care and research.", 
            "Balancing care, privacy risks legal, ethical issues, eroding trust."],
            ["B. Refuse to sell patient data, prioritizing privacy and informed consent, advocating for alternative revenue streams.", 
            "Promotes patient trust, privacy, ethics, and reputable healthcare data management."],
            ["C. Share the data only with companies that promise to use it ethically and beneficially.", 
            "Defining ethics, trust, and intent; risks, trust issues, unintended consequences."],
            ["D. Sell the data but anonymize it, believing that anonymity justifies the transaction.", 
            "Data anonymization offers partial privacy, no complete anonymity; re-identification risk, ethics, legality."]
        ],
        "correct_option": 1
    },
    {
        "situation": "Q. You work for a genetic testing company that fails to adequately explain the potential implications of genetic testing to a customer, leading to misunderstandings about the use of their data.",
        "options": [
            ["A. Apologize but maintain the current consent process, legally compliant.", 
            "Neglecting legal compliance risks customer dissatisfaction, mistrust, and legal issues."],
            ["B. Cease genetic testing altogether to avoid ethical concerns.", 
            "Ethical stance sacrifices genetic testing gains, risking financial harm and reputation damage."],
            ["C. Provide additional information only if customers specifically request it.", 
            "Opacity harms trust; customers doubt genetic data's ethical usage, risking reputation."],
            ["D. Enhance informed consent: Improve understanding, redesign forms, offer education.", 
            "Trust, transparency, ethics, effort, resources; satisfaction, lasting customer relationships."]
        ],
        "correct_option": 3
    },
    {
        "situation": "Q. You are a genetic researcher leading a study aimed at understanding the genetic basis of a rare medical condition. To enhance the study's scope and impact, you are considering sharing the genetic data collected from participants with other researchers and institutions involved in similar research.",
        "options": [
            ["A. Share genetic data without obtaining explicit consent from participants.", 
            "Violates autonomy, privacy; risks legal backlash, harms research, erodes trust."],
            ["B. Share genetic data without adequate anonymization, exposing identities.", 
            "Poor anonymization: Privacy breach, ethics violation, re-identification risk, genetic data misuse."],
            ["C. Build ethical genetic data sharing: consent, privacy, collaboration, confidentiality.", 
            "Promotes ethical data sharing, fostering trust, privacy, transparency, and collaboration."],
            ["D. Hoard genetic data without sharing, limiting collaboration.", 
            "Privacy vs. science: Ethical quandary hinders collaboration and societal progress."]
        ],
        "correct_option": 2
    },
    {
        "situation": "Q. A pharmaceutical company is developing a groundbreaking drug that shows promising results for a specific medical condition. The company is considering utilizing genetic data from patients to tailor the drug's dosage and treatment approach, aiming for a more personalized and effective medical intervention.",
        "options": [
            ["A. Use genetic data for personalized medicine without explicit consent from patients.", 
            "Erodes trust, risks legality, damages reputation, neglects autonomy, raises ethics."],
            ["B. Share genetic data with third-party partners without proper data security.", 
            "Privacy, ethics lapses, weak data safeguards risk unauthorized genetic data misuse."],
            ["C. Promote ethical personalized medicine: Prioritize informed consent, transparency.", 
            "Patient autonomy, privacy, trust, informed consent, ethical data use, responsible progress."],
            ["D. Avoid using genetic data in personalized medicine, citing ethical and privacy risks.", 
            "Privacy concerns can hinder personalized medicine, hindering treatment progress."]
        ],
        "correct_option": 2
    },
    {
        "situation": "Q. You are an advocate facing a situation where an insurance company uses genetic data to determine coverage and premiums, leading to discrimination against individuals with certain genetic predispositions.",
        "options": [
            ["A. Support the insurance company's decision to assess risk using genetic data.", 
            "Accurate yet disregards genetic ethics, risking harm and unequal insurance."],
            ["B. Advocate for legislation prohibiting the use of genetic data in insurance decisions.", 
            "Champion genetic data protection, raise awareness, ensure fairness, prevent discrimination."],
            ["C. Encourage individuals to withhold their genetic information from insurance companies.", 
            "Option avoids bias, shifts burden to employees, ignores systemic problems."],
            ["D. Suggest individuals with genetic predispositions seek insurance from companies not using genetic data.", 
            "Option: choice, genetic discrimination persists; legislation vital for fairness."]
        ],
        "correct_option": 1
    },
    {
        "situation": "Q. You work for a genetic testing company offering a service that reveals potential health risks for both the individual and their relatives without explicit consent.",
        "options": [
            ["A. Continue offering the service, assuming individuals will inform their relatives.", 
            "Individual reliance in genetic testing risks privacy breaches and trust erosion."],
            ["B. Provide the information to relatives without consent for preventive measures.", 
            "Privacy, consent, legal, relationship, and reputation concerns: Rights infringement consequences."],
            ["C. Discontinue the service to avoid ethical concerns, disregarding potential benefits.", 
            "Ceasing service for ethics hampers familial genetic information exchange."],
            ["D. Revise service to require explicit consent from individual and relatives for sharing data.", 
            "Consent safeguards genetic data, respects autonomy, privacy, and responsible sharing."]
        ],
        "correct_option": 3
    },
    {
        "situation": "Q. Law enforcement agencies are exploring the use of genetic databases and ancestry testing services to solve cold cases and identify potential suspects. The databases contain genetic information submitted by individuals for genealogical research.",
        "options": [
            ["A. Allow unrestricted access to genetic databases for law enforcement.", 
            "Raises ethical concerns: privacy, consent, genetic data misuse, distrust, legality."],
            ["B. Advocate strict genetic data rules for law enforcement with warrants and consent.", 
            "Balanced framework: ethics guide law, genetic data responsibility, trust, consent."],
            ["C. Implement genetic profiling without informing individuals in genetic databases.", 
            "Raises ethical, legal dilemmas - consent, privacy; risks backlash, trust erosion."],
            ["D. Prohibit law enforcement from accessing genetic data, prioritizing individual privacy.", 
            "Privacy vs. law enforcement sparks debate over public safety."]
        ],
        "correct_option": 1
    },
    {
        "situation": "Q. Employer contemplates using genetic testing in hiring to gauge health risks and potential medical conditions for informed decisions on workforce well-being. Raises ethical concerns about privacy and discrimination, requiring careful consideration and legal compliance.",
        "options": [
            ["A. Oppose genetic testing in hiring, advocate non-discrimination policies, respecting privacy.", 
            "Reject genetic testing in hiring to protect privacy and promote equality."],
            ["B. Support the use of genetic testing in hiring decisions for a healthier workforce.", 
            "Privacy, discrimination concerns risk legal action, harm reputation, and bias workplace."],
            ["C. Implement genetic testing without informing job applicants for healthcare cost management.", 
            "Ethical, legal concerns: consent, privacy; risks legal issues, trust erosion."],
            ["D. Refuse to hire individuals with specific genetic predispositions as a preventive measure.", 
            "Raises ethical, legal, reputation concerns, fostering discrimination in hiring."]
        ],
        "correct_option": 0
    }
];
let currentScenarioIndex = 0;
let score = 0;
let timer;
let timeLimit = 30; // Time limit in seconds for each scenario

function displayScenario() {
    const scenario = scenarios[currentScenarioIndex];
    const scenarioElement = document.getElementById('scenario');
    const optionsElement = document.getElementById('options');

    scenarioElement.textContent = scenario.situation;
    optionsElement.innerHTML = '';

    scenario.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option[0];
        optionButton.id = 'option-' + index; // Assign an ID for reference
        optionButton.onclick = () => chooseOption(index);
        optionsElement.appendChild(optionButton);
    });

    startTimer();
}

function startTimer() {
    let timeRemaining = timeLimit;
    timer = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timer);
            nextScenario();
        } else {
            document.getElementById('timer').textContent = `Time remaining: ${timeRemaining} seconds`;
            timeRemaining--;
        }
    }, 1000);
}

function chooseOption(index) {
    clearInterval(timer); // Stop the timer when an option is chosen
    disableAllOptions(); // Disable all option buttons

    const scenario = scenarios[currentScenarioIndex];
    const outcomeElement = document.getElementById('outcome');
    const correct = index === scenario.correct_option;
    const outcomeMessage = scenario.options[index][1];

    outcomeElement.innerHTML = correct ? 
        `<p class="correct">Correct choice, "${outcomeMessage}"</p>` :
        `<p class="incorrect">Incorrect choice, "${outcomeMessage}"</p>`;

    if (correct) {
        score++;
    }

    document.getElementById('next').style.display = 'block';
}

function disableAllOptions() {
    scenarios[currentScenarioIndex].options.forEach((_, index) => {
        document.getElementById('option-' + index).disabled = true;
    });
}

function nextScenario() {
    clearInterval(timer);
    currentScenarioIndex++;
    if (currentScenarioIndex < scenarios.length) {
        displayScenario();
    } else {
        endGame();
    }
    document.getElementById('outcome').textContent = '';
    document.getElementById('next').style.display = 'none';
}

function endGame() {
    const gameElement = document.getElementById('game');
    const totalScenarios = scenarios.length;
    const finalPercentageScore = (score / totalScenarios) * 100;
    gameElement.innerHTML = `<h2>Game Over</h2><p>Your final score is ${finalPercentageScore.toFixed(2)}%</p>`;
}

window.onload = displayScenario;
