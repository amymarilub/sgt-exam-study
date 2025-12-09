// ========================================
// STUDY DOCUMENTS
// ========================================
// Add your full procedure documents here

const STUDY_DOCUMENTS = [
    {
        title: "Procedure 303 - General Manual",
        content: `
            <h2>COMPLAINTS AGAINST DEPARTMENT MEMBERS</h2>
            
            <h3>Policy</h3>
            <p>The San Antonio Police Department accepts and investigates all complaints against Department members. The Department encourages the reporting of officer misconduct as well as commendable behavior. All complaints will be courteously received and properly investigated in a fair and impartial manner with due regard for the individual rights of all involved. The Department will continually strive to improve services to the community and employees through its accountability systems.</p>

            <h3>Purpose</h3>
            <p>The purpose of this procedure is to establish guidelines for the reporting, investigation, and disposition of complaints against Department members. This procedure also outlines the responsibilities of the Office of the Chief of Police, the Office of Management Services (OMS), Internal Affairs, and supervisory personnel in the complaint process.</p>

            <h3>Definitions</h3>
            
            <p><strong>Line Complaint:</strong> A complaint is a Line Complaint when it involves minor policy violations of the General Manual or other related directives. Line Complaints also include complaints concerning performance, usually related to discourteous or unprofessional behavior. Line Complaints do not involve violations that could result in suspension or dismissal.</p>

            <p><strong>Formal Complaint:</strong> A Formal Complaint involves allegations of misconduct that could result in suspension or dismissal. Examples include use of excessive force, criminal conduct, on-duty intoxication, domestic violence, or misuse of authority.</p>

            <p><strong>Anonymous Complaint:</strong> A complaint where the source refuses to identify themselves or provide contact information for follow-up.</p>

            <p><strong>Chain of Command:</strong> The supervisory hierarchy through which complaints are processed and investigated.</p>

            <h3>Procedures</h3>

            <h4>Accepting Complaints</h4>
            <p>All Department members shall accept complaints courteously and professionally, regardless of the time, place, or manner in which the complaint is received. Complaints may be received in person, by telephone, by mail, or electronically through the Department's website.</p>

            <p>Department members shall not discourage any person from filing a complaint. Members shall not require complainants to provide identification or be present at a particular location as a prerequisite to accepting a complaint.</p>

            <h4>Line Complaint Investigation Process</h4>
            <p>Line Complaints shall be investigated by the member's immediate supervisor or chain of command. The investigation must be completed within 21 calendar days from the date the complaint was received, unless an extension is granted by the Deputy Chief.</p>

            <p>The supervisor conducting the investigation shall interview the complainant, the accused member(s), and any witnesses. All interviews shall be documented in writing. The supervisor shall gather all relevant evidence including video footage, photographs, and documents.</p>

            <p>Upon completion of the investigation, the supervisor shall prepare a written report containing findings and recommendations. The report shall be forwarded through the chain of command to the Division Commander for review and approval.</p>

            <h4>Formal Complaint Investigation Process</h4>
            <p>Formal Complaints shall be investigated by Internal Affairs. The Deputy Chief of Management Services shall be notified immediately upon receipt of any Formal Complaint.</p>

            <p>Internal Affairs shall conduct a thorough and complete investigation. The investigation shall include interviews of the complainant, accused member(s), and all relevant witnesses. Internal Affairs shall gather all available evidence including video recordings, audio recordings, photographs, documents, and physical evidence.</p>

            <p>Accused members shall be afforded their rights under Chapter 143 of the Texas Local Government Code (Civil Service) and applicable labor agreements. Members have the right to representation during investigative interviews.</p>

            <h4>Investigation Time Frames</h4>
            <p>Line Complaints must be completed within 21 calendar days. Formal Complaints investigated by Internal Affairs must be completed within 180 calendar days from the date the complaint was filed, as required by Chapter 143 of the Texas Local Government Code.</p>

            <p>Extensions may be granted by the Chief of Police or designee for good cause. Any extension must be documented in writing with justification for the delay.</p>

            <h4>Findings and Dispositions</h4>
            <p>All complaints shall receive one of the following dispositions:</p>
            
            <p><strong>Sustained:</strong> The investigation disclosed sufficient evidence to prove the allegation.</p>
            
            <p><strong>Not Sustained:</strong> The investigation failed to disclose sufficient evidence to prove or disprove the allegation.</p>
            
            <p><strong>Exonerated:</strong> The alleged act occurred, but the investigation revealed it was justified, lawful, and proper.</p>
            
            <p><strong>Unfounded:</strong> The investigation conclusively proved the allegation was false or the incident did not occur.</p>
            
            <p><strong>Policy Failure:</strong> The member's actions were consistent with Department policy, but the policy itself may be inadequate or inappropriate.</p>

            <h4>Notification of Complainant</h4>
            <p>Upon conclusion of the investigation, the complainant shall be notified in writing of the disposition. The notification shall include the finding (sustained, not sustained, exonerated, or unfounded) but shall not include specific disciplinary action taken against any member.</p>

            <p>Complainants have the right to appeal the disposition to the Chief of Police within 30 days of receiving written notification of the findings.</p>

            <h4>Anonymous Complaints</h4>
            <p>Anonymous complaints shall be accepted and investigated to the extent possible. However, without a complainant available for interview and follow-up, it may be difficult to fully investigate the allegations. Anonymous complaints shall be documented and investigated at the discretion of the chain of command or Internal Affairs, depending on the severity of the allegations.</p>

            <h4>Supervisor Responsibilities</h4>
            <p>Supervisors are responsible for ensuring complaints are properly received, documented, and investigated in accordance with this procedure. Supervisors shall monitor the conduct and performance of subordinates to identify potential issues before they result in formal complaints.</p>

            <p>Supervisors shall ensure that Line Complaint investigations are completed within the required time frame and that all investigative reports are thorough, complete, and accurate.</p>

            <h3>References</h3>
            <p>Texas Local Government Code, Chapter 143 (Civil Service for Municipalities)<br>
            Police Officers' Bill of Rights<br>
            City of San Antonio Personnel Policies<br>
            SAPD General Manual, Various Procedures</p>
        `
    },
    {
        title: "Procedure 501 - Use of Force (Coming Soon)",
        content: `
            <p style="text-align: center; color: #999; margin-top: 50px;">
                This document will be added when study materials become available.
            </p>
        `
    },
    {
        title: "Procedure 204 - Patrol Procedures (Coming Soon)",
        content: `
            <p style="text-align: center; color: #999; margin-top: 50px;">
                This document will be added when study materials become available.
            </p>
        `
    },
    {
        title: "Criminal Investigations Manual (Coming Soon)",
        content: `
            <p style="text-align: center; color: #999; margin-top: 50px;">
                This document will be added when study materials become available.
            </p>
        `
    }
];


// ========================================
// QUIZ QUESTIONS
// ========================================
// Add your practice questions here

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
    }

    // ===== ADD MORE QUESTIONS HERE =====
    // Copy the format above to add new questions
    // Remember:
    // - correct: uses index starting at 0 (so 0=first option, 1=second option, etc.)
    // - category: 'complaints', 'use-of-force', 'patrol', 'investigations', etc.
    // - type: 'multiple-choice' or 'scenario'
    
];
