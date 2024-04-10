class EthicalDilemmaGame:
    def __init__(self):
        self.scenarios = [
            {
                "situation": "You discover a colleague gained unauthorized access to a patient's genetic data and shared it.",
                "options": [
                    ("Report the unauthorized access to the appropriate authorities, and notify the affected patient.", 
                    "Ethical and legal; ensures accountability, transparency, and patient trust."),
                    ("Monitor the situation discreetly without involving authorities.", 
                    "Unethical, risks further breaches, compromises patient confidentiality."),
                    ("Confront the colleague personally and ask for an explanation.", 
                    "Risks conflicts, lacks appropriate authority involvement."),
                    ("Share more genetic data with other colleagues to maintain a sense of equality.", 
                    "Unethical, worsens breach, damages trust among patients and colleagues.")
                ],
                "correct_option": 0
            },
            {
                "situation": "As a genetic researcher, you discover a potential breakthrough using patient data.",
                "options": [
                    ("Publish the findings immediately to share the discovery with the scientific community.", 
                    "May gain immediate recognition, but risks inaccuracies and lacks thorough validation."),
                    ("Share the preliminary findings with a select group of colleagues to receive early feedback.", 
                    "Ethical; seeks input for improvement. Balances collaboration with responsible research practices."),
                    ("Wait until further research is conducted to ensure the accuracy and reliability of the findings.", 
                    "Ethical; prioritizes scientific integrity, accuracy, and reliability."),
                    ("Suppress the information temporarily to conduct additional research without external scrutiny.", 
                    "Risks hindering scientific progress; delays dissemination of potential benefits.")
                ],
                "correct_option": 2
            },
            {
                "situation": "You, as an HR professional, are tasked with implementing mandatory genetic testing for employees.",
                "options": [
                    ("Refuse to implement mandatory genetic testing for employees, focusing on voluntary wellness programs.", 
                    "Autonomy, trust, wellness, privacy - a positive company culture embodies."),
                    ("Implement mandatory testing without providing any alternative options.", 
                    "Violating employee privacy erodes trust, risks legal backlash, harms morale."),
                    ("Only test certain groups of employees based on perceived health risks.", 
                    "Discrimination concerns, employee divisions, legal challenges, tarnished company reputation."),
                    ("Offer incentives for employees who agree to genetic testing to encourage participation.", 
                    "Coercion risks, privacy breaches, ethical dilemmas, employee distrust, wellness initiative credibility.")
                ],
                "correct_option": 0
            },
            {
                "situation": "The government proposes a program to collect genetic data for surveillance purposes.",
                "options": [
                    ("Support the government's proposal, trusting it will only be used for legitimate security purposes.", 
                    "Privacy risks, rights erosion, trust loss, unchecked surveillance, ethical concerns."),
                    ("Remain neutral on the proposal, weighing both positive and negative consequences.", 
                    "Perpetuates abuses, lacks rights engagement, fosters apathy, risking consequences."),
                    ("Oppose the government's proposal, citing concerns about privacy invasion and misuse of genetic information.", 
                    "Safeguards privacy, fuels ethics, thwarts abuse, shields rights from government."),
                    ("Encourage citizens to willingly submit their genetic data for national security.", 
                    "Privacy erosion, invasive norms, collective security weaken rights, long-term liberty threats.")
                ],
                "correct_option": 2
            },
            {
                "situation": "A biotechnology company patents a specific genetic sequence, limiting research access.",
                "options": [
                    ("Advocate for company genetic patents to incentivize innovation and profit.", 
                    "Prioritizing profit over science risks monopolies, hinders innovation, and ethical healthcare concerns."),
                    ("Ignore the issue, assuming it does not affect the broader scientific community.", 
                    "Neglecting consequences hampers transparency, collaboration, hindering scientific progress and advancements."),
                    ("Encourage other companies to patent similar genetic sequences for competition.", 
                    "Competition hinders collaboration, delays genetic data sharing, and hampers healthcare."),
                    ("Advocate for open-access policies and challenge the patent.", 
                    "Promotes collaboration, speeds research, spurs innovation, advances medical science.")
                ],
                "correct_option": 3
            },
            {
                "situation": "You are part of a team developing genetic enhancement technology.",
                "options": [
                    ("Proceed with genetic enhancement on a small scale without public knowledge.", 
                    "Lack of transparency risks mistrust, backlash, and ethical concerns."),
                    ("Ban all genetic enhancement technologies to avoid ethical dilemmas.", 
                    "Limiting genetic enhancement hampers progress, fosters illicit practices, overlooks ethical potential."),
                    ("Initiate global dialogue for ethical genetic enhancement guidelines.", 
                    "Guidelines promote genetic enhancement ethics, trust, and inclusive responsible development."),
                    ("Proceed without regulations, letting individual scientists determine ethics.", 
                    "Ethical concerns: misuse, guidelines, inconsistency, safety, consequences, accountability, harm.")
                ],
                "correct_option": 2
            },
            {
                "situation": "Your healthcare organization plans to introduce genetic counselling services.",
                "options": [
                    ("Implement genetic counselling services without emphasizing informed consent.", 
                    "Transparency, coercion, mistrust, legality, consent: ethics demand careful consideration."),
                    ("Create robust genetic counseling with informed consent, confidentiality, and impartial support.", 
                    "Ethical genetics counsel empowers, builds trust, informs, and fosters relationships."),
                    ("Hire genetic counsellors who lean towards a particular ethical or religious stance.", 
                    "Bias concerns erode trust, risk ethics, influence decisions in counseling."),
                    ("Share genetic information during counselling sessions with third-party organizations without explicit consent.", 
                    "Privacy, trust issues: legal risks, harm reputation, deter counseling, data misuse.")
                ],
                "correct_option": 1
            },
            {
                "situation": "A government health agency considers implementing mandatory genetic testing for all newborns.",
                "options": [
                    ("Implement mandatory genetic testing for all newborns without an opt-out choice.", 
                    "Parental autonomy, consent, rights, legality, trust, data: ethical dilemmas."),
                    ("Offer incentives for parents who agree to genetic testing for their newborns.", 
                    "Coercion in healthcare risks ethics, privacy, trust, and parental pressure."),
                    ("Promote opt-out system for genetic testing for newborns, ensuring autonomy, consent, secure storage.", 
                    "Promotes parental autonomy, informed choices, safeguards genetic data, ensuring child health and privacy."),
                    ("Share genetic information from newborns with external research organizations without parental consent.", 
                    "Privacy, consent, parental betrayal, legal woes, healthcare trust, data misuse.")
                ],
                "correct_option": 2
            },
            {
                "situation": "Your healthcare institution is considering selling aggregated genetic data to pharmaceutical companies.",
                "options": [
                    ("Sell the data but allocate a percentage of profits to support patient care and research.", 
                    "Balancing care, privacy risks legal, ethical issues, eroding trust."),
                    ("Refuse to sell patient data, prioritizing privacy and informed consent, advocating for alternative revenue streams.", 
                    "Promotes patient trust, privacy, ethics, and reputable healthcare data management."),
                    ("Share the data only with companies that promise to use it ethically and beneficially.", 
                    "Defining ethics, trust, and intent; risks, trust issues, unintended consequences."),
                    ("Sell the data but anonymize it, believing that anonymity justifies the transaction.", 
                    "Data anonymization offers partial privacy, no complete anonymity; re-identification risk, ethics, legality.")
                ],
                "correct_option": 1
            },
            {
                "situation": "You work for a genetic testing company with issues in explaining the implications of genetic testing.",
                "options": [
                    ("Apologize but maintain the current consent process, legally compliant.", 
                    "Neglecting legal compliance risks customer dissatisfaction, mistrust, and legal issues."),
                    ("Cease genetic testing altogether to avoid ethical concerns.", 
                    "Ethical stance sacrifices genetic testing gains, risking financial harm and reputation damage."),
                    ("Provide additional information only if customers specifically request it.", 
                    "Opacity harms trust; customers doubt genetic data's ethical usage, risking reputation."),
                    ("Enhance informed consent: Improve understanding, redesign forms, offer education.", 
                    "Trust, transparency, ethics, effort, resources; satisfaction, lasting customer relationships.")
                ],
                "correct_option": 3
            },
            {
                "situation": "You are a genetic researcher considering sharing genetic data for a study on a rare medical condition.",
                "options": [
                    ("Share genetic data without obtaining explicit consent from participants.", 
                    "Violates autonomy, privacy; risks legal backlash, harms research, erodes trust."),
                    ("Share genetic data without adequate anonymization, exposing identities.", 
                    "Poor anonymization: Privacy breach, ethics violation, re-identification risk, genetic data misuse."),
                    ("Build ethical genetic data sharing: consent, privacy, collaboration, confidentiality.", 
                    "Promotes ethical data sharing, fostering trust, privacy, transparency, and collaboration."),
                    ("Hoard genetic data without sharing, limiting collaboration.", 
                    "Privacy vs. science: Ethical quandary hinders collaboration and societal progress.")
                ],
                "correct_option": 2
            },
            {
                "situation": "A pharmaceutical company considers using genetic data for personalized medicine.",
                "options": [
                    ("Use genetic data for personalized medicine without explicit consent from patients.", 
                    "Erodes trust, risks legality, damages reputation, neglects autonomy, raises ethics."),
                    ("Share genetic data with third-party partners without proper data security.", 
                    "Privacy, ethics lapses, weak data safeguards risk unauthorized genetic data misuse."),
                    ("Promote ethical personalized medicine: Prioritize informed consent, transparency.", 
                    "Patient autonomy, privacy, trust, informed consent, ethical data use, responsible progress."),
                    ("Avoid using genetic data in personalized medicine, citing ethical and privacy risks.", 
                    "Privacy concerns can hinder personalized medicine, hindering treatment progress.")
                ],
                "correct_option": 2
            },
            {
                "situation": "An insurance company uses genetic data to determine coverage and premiums.",
                "options": [
                    ("Support the insurance company's decision to assess risk using genetic data.", 
                    "Accurate yet disregards genetic ethics, risking harm and unequal insurance."),
                    ("Advocate for legislation prohibiting the use of genetic data in insurance decisions.", 
                    "Champion genetic data protection, raise awareness, ensure fairness, prevent discrimination."),
                    ("Encourage individuals to withhold their genetic information from insurance companies.", 
                    "Option avoids bias, shifts burden to employees, ignores systemic problems."),
                    ("Suggest individuals with genetic predispositions seek insurance from companies not using genetic data.", 
                    "Option: choice, genetic discrimination persists; legislation vital for fairness.")
                ],
                "correct_option": 1
            },
            {
                "situation": "A genetic testing company offers a service revealing health risks for individuals and relatives.",
                "options": [
                    ("Continue offering the service, assuming individuals will inform their relatives.", 
                    "Individual reliance in genetic testing risks privacy breaches and trust erosion."),
                    ("Provide the information to relatives without consent for preventive measures.", 
                    "Privacy, consent, legal, relationship, and reputation concerns: Rights infringement consequences."),
                    ("Discontinue the service to avoid ethical concerns, disregarding potential benefits.", 
                    "Ceasing service for ethics hampers familial genetic information exchange."),
                    ("Revise service to require explicit consent from individual and relatives for sharing data.", 
                    "Consent safeguards genetic data, respects autonomy, privacy, and responsible sharing.")
                ],
                "correct_option": 3
            },
            {
                "situation": "Law enforcement agencies explore using genetic databases for solving cases.",
                "options": [
                    ("Allow unrestricted access to genetic databases for law enforcement.", 
                    "Raises ethical concerns: privacy, consent, genetic data misuse, distrust, legality."),
                    ("Advocate strict genetic data rules for law enforcement with warrants and consent.", 
                    "Balanced framework: ethics guide law, genetic data responsibility, trust, consent."),
                    ("Implement genetic profiling without informing individuals in genetic databases.", 
                    "Raises ethical, legal dilemmas - consent, privacy; risks backlash, trust erosion."),
                    ("Prohibit law enforcement from accessing genetic data, prioritizing individual privacy.", 
                    "Privacy vs. law enforcement sparks debate over public safety.")
                ],
                "correct_option": 1
            },
            {
                "situation": "Employer contemplates using genetic testing in hiring for workforce well-being.",
                "options": [
                    ("Oppose genetic testing in hiring, advocate non-discrimination policies, respecting privacy.", 
                    "Reject genetic testing in hiring to protect privacy and promote equality."),
                    ("Support the use of genetic testing in hiring decisions for a healthier workforce.", 
                    "Privacy, discrimination concerns risk legal action, harm reputation, and bias workplace."),
                    ("Implement genetic testing without informing job applicants for healthcare cost management.", 
                    "Ethical, legal concerns: consent, privacy; risks legal issues, trust erosion."),
                    ("Refuse to hire individuals with specific genetic predispositions as a preventive measure.", 
                    "Raises ethical, legal, reputation concerns, fostering discrimination in hiring.")
                ],
                "correct_option": 0
            }
            
        ]
        self.score = 0

    def get_user_choice(self, num_options):
        while True:
            try:
                choice = int(input("\nYour choice (1-" + str(num_options) + "): ")) - 1
                if 0 <= choice < num_options:
                    return choice
                else:
                    print("Please select a number between 1 and", num_options)
            except ValueError:
                print("Invalid input. Please enter a number.")

    def play(self):
        for scenario in self.scenarios:
            print("\nScenario:", scenario["situation"])
            for i, option in enumerate(scenario["options"], start=1):
                print(f"{i}. {option[0]}")

            choice = self.get_user_choice(len(scenario["options"]))
            print("\nOutcome:", scenario["options"][choice][1])

            if choice == scenario["correct_option"]:
                print("Correct! Well done.")
                self.score += 1
            else:
                print("Incorrect. The ethical choice was:", scenario["options"][scenario["correct_option"]][0])

        self.show_results()

    def show_results(self):
        total_scenarios = len(self.scenarios)
        percentage = (self.score / total_scenarios) * 100
        print(f"\nGame Over. You scored {self.score}/{total_scenarios} ({percentage:.2f}%) correct choices.")

if __name__ == "__main__":
    game = EthicalDilemmaGame()
    game.play()
