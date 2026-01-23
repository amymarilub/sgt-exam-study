const QUIZ_QUESTIONS = [
    {
        type: 'multiple-choice',
        category: 'complaints',
        question: 'Within how many calendar days must a Line Complaint investigation be completed?',
        options: [
            '14 calendar days',
            '21 calendar days',
            '30 calendar days',
            '180 calendar days'
        ],
        correct: 1, // Index starts at 0, so 1 = "21 calendar days"
        explanation: 'Line Complaints must be investigated by the immediate supervisor or chain of command and completed within 21 calendar days from the date the complaint was received. Extensions may be granted by the Deputy Chief for good cause.',
        reference: 'Procedure 303, Section .04 - Line Complaint Investigation Process'
    },

    {
        type: 'multiple-choice',
        category: 'complaints',
        question: 'Which type of complaint involves allegations that could result in suspension or dismissal?',
        options: [
            'Line Complaint',
            'Anonymous Complaint',
            'Formal Complaint',
            'Administrative Complaint'
        ],
        correct: 2,
        explanation: 'Formal Complaints involve allegations of serious misconduct that could result in suspension or dismissal, such as use of excessive force, criminal conduct, on-duty intoxication, domestic violence, or misuse of authority. These are investigated by Internal Affairs.',
        reference: 'Procedure 303, Section .03 - Definitions'
    },

    {
        type: 'multiple-choice',
        category: 'complaints',
        question: 'Who investigates Formal Complaints?',
        options: [
            'The accused member\'s immediate supervisor',
            'The Division Commander',
            'Internal Affairs',
            'The Deputy Chief of Field Operations'
        ],
        correct: 2,
        explanation: 'Formal Complaints must be investigated by Internal Affairs. The Deputy Chief of Management Services must be notified immediately upon receipt of any Formal Complaint.',
        reference: 'Procedure 303, Section .04 - Formal Complaint Investigation Process'
    },

    {
        type: 'scenario',
        category: 'complaints',
        question: 'You are a patrol supervisor. A citizen approaches you and states that an officer was rude to them during a traffic stop earlier today. The citizen wants to file a complaint but doesn\'t want to provide their name. What should you do?',
        options: [
            'Tell the citizen you cannot accept anonymous complaints',
            'Accept the complaint and document it, but explain it may be difficult to fully investigate without their contact information',
            'Refer the citizen to Internal Affairs since it\'s an anonymous complaint',
            'Tell the citizen they must provide identification to file a complaint'
        ],
        correct: 1,
        explanation: 'Anonymous complaints must be accepted and documented. While it may be difficult to fully investigate without a complainant available for interview, supervisors must accept all complaints courteously and professionally. Members shall not require complainants to provide identification as a prerequisite to accepting a complaint.',
        reference: 'Procedure 303, Section .04 - Anonymous Complaints and Accepting Complaints'
    },

    {
        type: 'multiple-choice',
        category: 'complaints',
        question: 'What finding indicates that the alleged act occurred but was justified, lawful, and proper?',
        options: [
            'Sustained',
            'Not Sustained',
            'Exonerated',
            'Unfounded'
        ],
        correct: 2,
        explanation: 'Exonerated means the alleged act occurred, but the investigation revealed it was justified, lawful, and proper. This is different from Unfounded (the incident did not occur) or Not Sustained (insufficient evidence to prove or disprove).',
        reference: 'Procedure 303, Section .04 - Findings and Dispositions'
    },

    {
        type: 'multiple-choice',
        category: 'cba-definitions',
        question: 'For purposes of disciplinary actions in Articles 28 and 29, how many hours constitute one "day"?',
        options: [
            '6 hours',
            '8 hours',
            '10 hours',
            '12 hours'
        ],
        correct: 1,
        explanation: 'A "day" for disciplinary actions is defined as an 8-hour day, NOT calendar days or work schedule days.',
        reference: 'CBA Article 2 - Definitions'
    },

    {
        type: 'multiple-choice',
        category: 'cba-definitions',
        question: 'How many members make up the Executive Board?',
        options: [
            'Four (4) members',
            'Five (5) members',
            'Six (6) members',
            'Seven (7) members'
        ],
        correct: 2,
        explanation: 'The Executive Board consists of six (6) elected/appointed members: President, Vice President, Secretary, Treasurer, Parliamentarian, and Sergeant-at-Arms.',
        reference: 'CBA Article 2 - Definitions'
    },

    {
        type: 'multiple-choice',
        category: 'cba-definitions',
        question: 'When does "longevity" begin for an officer?',
        options: [
            'From the date of hire',
            'From the date they became a probationary Police Officer',
            'From the date they complete the academy',
            'From the first day of active duty'
        ],
        correct: 1,
        explanation: 'Longevity is time in service from the date the employee became a probationary Police Officer, NOT from hire date.',
        reference: 'CBA Article 2 - Definitions'
    },

    {
        type: 'multiple-choice',
        category: 'cba-association',
        question: 'On what date is the annual 6-hour vacation deduction taken for the Association pool?',
        options: [
            'September 1st',
            'September 30th',
            'October 1st',
            'January 1st'
        ],
        correct: 2,
        explanation: 'The annual vacation deduction occurs on October 1st each year. Officers can opt-out during September.',
        reference: 'CBA Article 3, Section 2'
    },

    {
        type: 'scenario',
        category: 'cba-association',
        question: 'Officer Martinez is in full uniform at headquarters and wants to withdraw his Association dues. He goes to the Accounting Office and requests the form. What must happen?',
        options: [
            'He can sign the form immediately',
            'He must change out of uniform before signing',
            'He must wait 24 hours before signing',
            'He must get supervisor approval first'
        ],
        correct: 1,
        explanation: 'Officers must be OUT of uniform to withdraw Association dues. They must personally visit the Accounting Office, be out of uniform, personally sign, and identify themselves.',
        reference: 'CBA Article 3, Section 2'
    },

    {
        type: 'multiple-choice',
        category: 'cba-association',
        question: 'When is the double dues deduction taken after an Association member dies?',
        options: [
            'Immediately upon notification',
            'Within 14 days of death',
            'The month immediately following the death',
            'At the end of the fiscal year'
        ],
        correct: 2,
        explanation: 'Double dues are deducted from each Association member during the month immediately following the member\'s death.',
        reference: 'CBA Article 3, Section 2'
    },

    {
        type: 'multiple-choice',
        category: 'cba-association',
        question: 'What is the maximum number of officers who can take Association leave at any given time?',
        options: [
            'Six (6) officers',
            'Eight (8) officers',
            'Ten (10) officers',
            'Twelve (12) officers'
        ],
        correct: 1,
        explanation: 'A maximum of 8 officers at any given time can take Association leave when requested by the Association President.',
        reference: 'CBA Article 3, Section 3'
    },

    {
        type: 'multiple-choice',
        category: 'cba-association',
        question: 'How many regular monthly board meetings can on-duty board members attend per month?',
        options: [
            'One (1) meeting',
            'Two (2) meetings',
            'Three (3) meetings',
            'Unlimited meetings'
        ],
        correct: 1,
        explanation: 'Board members on duty can attend the 2 regularly scheduled board meetings each month, plus up to 2 specially called meetings per fiscal year.',
        reference: 'CBA Article 3, Section 5'
    },

    {
        type: 'multiple-choice',
        category: 'cba-promotions',
        question: 'What is the maximum number of seniority points for a standard promotional candidate?',
        options: [
            'Eight (8) points',
            'Ten (10) points',
            'Twelve (12) points',
            'Thirteen (13) points'
        ],
        correct: 1,
        explanation: 'Standard seniority is 1 point per year as a classified officer, maximum 10 points. Detective/Sergeant candidates can earn up to 13 points with additional qualifications.',
        reference: 'CBA Article 11, Section 1'
    },

    {
        type: 'multiple-choice',
        category: 'cba-promotions',
        question: 'How many calendar days before the exam must study materials be announced (standard)?',
        options: [
            '60+ calendar days',
            '75+ calendar days',
            '90+ calendar days',
            '120+ calendar days'
        ],
        correct: 2,
        explanation: 'Study materials must be announced 90+ calendar days before the exam (or 365+ days if SAPD study book exists).',
        reference: 'CBA Article 11, Section 2'
    },

    {
        type: 'multiple-choice',
        category: 'cba-promotions',
        question: 'What is the registration window for promotional exams?',
        options: [
            '120-110 calendar days before exam',
            '115-105 calendar days before exam',
            '100-90 calendar days before exam',
            '90-80 calendar days before exam'
        ],
        correct: 1,
        explanation: 'Registration is 115-105 calendar days before the exam. The exam is announced 120+ days before.',
        reference: 'CBA Article 11, Section 3'
    },

    {
        type: 'multiple-choice',
        category: 'cba-promotions',
        question: 'What is the minimum passing score for promotional exams (unless consultant determines otherwise)?',
        options: [
            '65%',
            '70%',
            '75%',
            '80%'
        ],
        correct: 1,
        explanation: 'Minimum passing score is 70% out of 100% unless a qualified consultant determines a different cut-off score based on statistical validity.',
        reference: 'CBA Article 11, Section 3'
    },

    {
        type: 'scenario',
        category: 'cba-promotions',
        question: 'Officer Chen arrives 3 minutes after the promotional exam has started due to traffic. She explains the situation to the proctor. What happens?',
        options: [
            'She can take the exam with a time penalty',
            'She can take the exam but starts when she arrives',
            'She must reschedule for the next exam cycle',
            'She is not admitted to the exam'
        ],
        correct: 3,
        explanation: 'Candidates arriving after the appointed starting time will NOT be admitted or allowed to participate in the examination. No exceptions.',
        reference: 'CBA Article 11, Section 3'
    },

    {
        type: 'multiple-choice',
        category: 'cba-promotions',
        question: 'How long does the eligibility list last for Sergeant (WITHOUT assessment)?',
        options: [
            'Six (6) months',
            'Twelve (12) months',
            'Eighteen (18) months',
            'Twenty-four (24) months'
        ],
        correct: 1,
        explanation: 'Detective and Sergeant eligibility lists last 12 months (increases to 18 months with assessment). Lieutenant and Captain lists last 18 months.',
        reference: 'CBA Article 11, Section 3'
    },

    {
        type: 'multiple-choice',
        category: 'cba-promotions',
        question: 'Within how many calendar days of promotion must mandatory training be completed?',
        options: [
            'Thirty (30) days',
            'Forty-five (45) days',
            'Sixty (60) days',
            'Ninety (90) days'
        ],
        correct: 2,
        explanation: 'All promoted officers must attend 40+ hour mandatory training within 60 calendar days of promotion.',
        reference: 'CBA Article 11, Section 4'
    },

    {
        type: 'multiple-choice',
        category: 'cba-promotions',
        question: 'A newly promoted Lieutenant has how long to complete 60 college credit hours or an Associate\'s degree?',
        options: [
            'Thirty-six (36) months',
            'Forty-eight (48) months',
            'Sixty (60) months',
            'No requirement'
        ],
        correct: 1,
        explanation: 'Lieutenants have 48 months to complete 60 college hours or Associate\'s degree. Captains have 60 months for Bachelor\'s.',
        reference: 'CBA Article 11, Section 4'
    },

    {
        type: 'multiple-choice',
        category: 'cba-seniority',
        question: 'How long must an officer wait after transferring to a new unit before bidding on premium relief days using seniority?',
        options: [
            'Three (3) months',
            'Six (6) months',
            'Nine (9) months',
            'Twelve (12) months'
        ],
        correct: 1,
        explanation: 'Officers must wait 6 months after transferring before they can bid on premium relief days, EXCEPT Patrol-to-Patrol transfers can use seniority immediately.',
        reference: 'CBA Article 12, Section 2'
    },

    {
        type: 'scenario',
        category: 'cba-seniority',
        question: 'Two sergeants have identical seniority and both want the same relief days. Sgt. Williams was #25 on the promotional list. Sgt. Rodriguez was #40. Who gets the relief days?',
        options: [
            'The older sergeant',
            'The sergeant with more total time on the department',
            'Sgt. Williams (higher on promotional list)',
            'Sgt. Rodriguez'
        ],
        correct: 2,
        explanation: 'When seniority is tied, the officer highest on the hiring/promotional list is senior. Williams at #25 beats Rodriguez at #40.',
        reference: 'CBA Article 12, Section 5'
    },

    {
        type: 'multiple-choice',
        category: 'cba-seniority',
        question: 'What happens to an officer\'s vacation schedule when they transfer to a different shift?',
        options: [
            'They keep their existing schedule',
            'They get first choice in the new shift',
            'They lose their schedule and must request new dates',
            'They split vacation between old and new shifts'
        ],
        correct: 2,
        explanation: 'Officers lose their vacation request time when transferring shifts and must put in for a new vacation schedule based on available openings.',
        reference: 'CBA Article 12, Section 6'
    },

    {
        type: 'scenario',
        category: 'cba-seniority',
        question: 'Officer Martinez transfers from Patrol B-Shift to Patrol C-Shift. Can he immediately use his seniority to bid on available relief days?',
        options: [
            'No, must wait 6 months',
            'Yes, Patrol-to-Patrol transfers are exempt from waiting period',
            'No, must wait 12 months',
            'Only with supervisor approval'
        ],
        correct: 1,
        explanation: 'Officers transferring from one Patrol shift to another Patrol shift are entitled to use seniority immediately - no 6-month wait required.',
        reference: 'CBA Article 12, Section 6'
    },

    {
        type: 'multiple-choice',
        category: 'cba-grievance',
        question: 'Within how many calendar days must an officer file a grievance after learning of the event?',
        options: [
            'Seven (7) days',
            'Fourteen (14) days',
            'Twenty-one (21) days',
            'Thirty (30) days'
        ],
        correct: 2,
        explanation: 'Officers must submit a grievance within 21 calendar days of actual or constructive knowledge of the occurrence or event.',
        reference: 'CBA Article 15, Section 3 - Step 1'
    },

    {
        type: 'multiple-choice',
        category: 'cba-grievance',
        question: 'How long does the Chief have to respond to a grievance at Step 2?',
        options: [
            'Seven (7) calendar days',
            'Fourteen (14) calendar days',
            'Twenty-one (21) calendar days',
            'Thirty (30) calendar days'
        ],
        correct: 1,
        explanation: 'The Chief has 14 calendar days to act on the grievance and render a decision in writing at Step 2.',
        reference: 'CBA Article 15, Section 3 - Step 2'
    },

    {
        type: 'scenario',
        category: 'cba-grievance',
        question: 'A grievance is submitted to the Chief at Step 2. The Chief does not respond within the required timeframe. What happens?',
        options: [
            'The grievance is considered denied',
            'The grievance is automatically satisfied',
            'The grievance advances to Step 3',
            'The timeframe is extended automatically'
        ],
        correct: 2,
        explanation: 'If the City fails to meet time limits at any step, the grievance automatically advances to the next step.',
        reference: 'CBA Article 15, Section 2'
    },

    {
        type: 'multiple-choice',
        category: 'cba-grievance',
        question: 'Can disciplinary matters under Chapter 143 be grieved through Article 15?',
        options: [
            'Yes, all disciplinary matters',
            'Yes, but only suspensions under 5 days',
            'No, they go through Article 28',
            'Only with Chief approval'
        ],
        correct: 2,
        explanation: 'Disciplinary matters subject to Chapter 143 are NOT subject to Article 15 grievance procedure - they are covered in Article 28.',
        reference: 'CBA Article 15, Section 1'
    },

    {
        type: 'multiple-choice',
        category: 'cba-grievance',
        question: 'How far in advance of the arbitration hearing must discovery requests be made?',
        options: [
            'Discovery allowed any time before hearing',
            'At least 14 days before hearing',
            'At least 7 days before hearing',
            'No discovery within 7 days of hearing'
        ],
        correct: 3,
        explanation: 'Discovery SHALL NOT be requested within 7 calendar days prior to the hearing.',
        reference: 'CBA Article 15, Section 4'
    },

    {
        type: 'multiple-choice',
        category: 'cba-grievance',
        question: 'Who pays the arbitrator\'s fees in a grievance?',
        options: [
            'The City pays all fees',
            'The Association pays all fees',
            'The City and Association split equally',
            'The losing party pays'
        ],
        correct: 2,
        explanation: 'The City and Association share equally the fees and expenses of the arbitrator.',
        reference: 'CBA Article 15, Section 4'
    },

    {
        type: 'multiple-choice',
        category: 'cba-discipline',
        question: 'Within how many calendar days must a line complaint investigation be completed?',
        options: [
            'Ten (10) days',
            'Fourteen (14) days',
            'Twenty-one (21) days',
            'Thirty (30) days'
        ],
        correct: 2,
        explanation: 'Line complaint investigations must be completed within 21 calendar days from receipt of the written complaint.',
        reference: 'CBA Article 29, Section 1'
    },

    {
        type: 'multiple-choice',
        category: 'cba-discipline',
        question: 'What is the maximum suspension that can be imposed for a line complaint (with Chief approval)?',
        options: [
            'Three (3) working days',
            'Five (5) working days',
            'Ten (10) working days',
            'Fifteen (15) working days'
        ],
        correct: 1,
        explanation: 'Line complaints can result in suspensions up to 5 working days (40 working hours) if approved by the Chief.',
        reference: 'CBA Article 29, Section 1'
    },

    {
        type: 'multiple-choice',
        category: 'cba-discipline',
        question: 'Who typically investigates line complaints?',
        options: [
            'The officer\'s Sergeant',
            'The officer\'s Lieutenant',
            'The Captain of the station/section',
            'Internal Affairs'
        ],
        correct: 2,
        explanation: 'Line complaints are investigated by the Captain of the station/section. If the officer IS a Captain or above, the Division Commander, Bureau Commander, or Chief investigates.',
        reference: 'CBA Article 29, Section 1'
    },

    {
        type: 'scenario',
        category: 'cba-discipline',
        question: 'An officer is being interviewed by their Captain about a line complaint. The officer requests to have their attorney present during the interview. What happens?',
        options: [
            'The attorney must be allowed to attend',
            'The attorney can attend if the Chief approves',
            'The officer has no right to attorney during chain of command interviews',
            'The attorney can attend but cannot speak'
        ],
        correct: 2,
        explanation: 'Officers have NO right to an attorney during line complaint interviews with commanding officers (but they CAN seek advice from an attorney).',
        reference: 'CBA Article 29, Section 1'
    },

    {
        type: 'multiple-choice',
        category: 'cba-discipline',
        question: 'An officer has how many calendar days to agree or disagree with proposed discipline from a line complaint?',
        options: [
            'Three (3) days',
            'Five (5) days',
            'Seven (7) days',
            'Ten (10) days'
        ],
        correct: 1,
        explanation: 'Officers have 5 calendar days to agree or disagree with proposed discipline. If they disagree, the case goes to Internal Affairs.',
        reference: 'CBA Article 29, Section 1'
    },

    {
        type: 'scenario',
        category: 'cba-discipline',
        question: 'Officer Lee agrees to a 4-day suspension from a line complaint and signs the agreement. Two weeks later, he believes the suspension was unfair. Can he appeal?',
        options: [
            'Yes, to the Commission within 30 days',
            'Yes, to arbitration within 60 days',
            'Yes, but only to the Chief',
            'No, agreed suspensions cannot be appealed'
        ],
        correct: 3,
        explanation: 'Suspensions agreed to by an officer may NOT be appealed to or altered by the Commission, an arbitrator, or by any court. This is FINAL.',
        reference: 'CBA Article 29, Section 1'
    },

    {
        type: 'multiple-choice',
        category: 'cba-discipline',
        question: 'During a line complaint investigation, the Captain discovers additional misconduct not in the original complaint. Can the investigation scope expand?',
        options: [
            'Yes, if approved by the Chief',
            'Yes, if the officer agrees',
            'No, investigation confined to written complaint only',
            'Yes, but must notify the officer first'
        ],
        correct: 2,
        explanation: 'Line complaint investigations are confined to the written complaint, and that complaint only. Cannot expand scope.',
        reference: 'CBA Article 29, Section 1'
    },

    {
        type: 'multiple-choice',
        category: 'cba-discipline',
        question: 'What rights do officers have during Internal Affairs investigations?',
        options: [
            'Same as line complaints - no attorney',
            'Attorney present and all Chapter 143 rights',
            'Attorney only if facing termination',
            'Association rep only, no attorney'
        ],
        correct: 1,
        explanation: 'During IA investigations, officers have the right to attorney present, Association representative, written notice, copy of complaint, and all Chapter 143 rights.',
        reference: 'CBA Article 29, Section 2'
    },

    {
        type: 'multiple-choice',
        category: 'cba-discipline',
        question: 'What is the investigation timeline for Internal Affairs formal complaints?',
        options: [
            'Sixty (60) calendar days',
            'Ninety (90) calendar days',
            'One hundred eighty (180) calendar days',
            'Three hundred sixty-five (365) calendar days'
        ],
        correct: 2,
        explanation: 'Internal Affairs formal complaints must be completed within 180 calendar days, as required by Chapter 143 of the Texas Local Government Code.',
        reference: 'CBA Article 29, Section 2 / Procedure 303'
    },

];
