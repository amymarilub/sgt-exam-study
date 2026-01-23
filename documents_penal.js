const DOCUMENTS_PENAL = [
    {
        category: 'Penal Code',
        title: "Chapter 9 - Justification",
        content: `
<h1 style="color: #4fc3f7; font-size: 32px; margin-bottom: 15px;">Chapter 9</h1>
<h2 style="color: #b0b0b0; font-size: 22px; font-weight: normal; margin-bottom: 30px;">Justification</h2>

<div style="background: linear-gradient(to right, rgba(79, 195, 247, 0.25), rgba(79, 195, 247, 0.05)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4fc3f7; border-radius: 5px;">
    <h3 style="color: #4fc3f7; margin: 0 0 10px 0; font-size: 18px;">📖 Quick Summary</h3>
    <p style="font-size: 17px; line-height: 1.7; margin: 0; color: #e0e0e0;">When you can legally use force, including deadly force</p>
</div>

<div style="background: linear-gradient(to right, rgba(255, 193, 7, 0.2), rgba(255, 193, 7, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #ffc107; border-radius: 5px;">
    <h3 style="color: #ffc107; margin: 0 0 15px 0; font-size: 18px;">⚡ Must Know</h3>
    <ul style="margin: 0; padding-left: 20px; color: #e0e0e0;">
        <li style="margin: 8px 0; font-size: 16px;">Peace officer use of deadly force</li>
        <li style="margin: 8px 0; font-size: 16px;">Self-defense and Castle Doctrine</li>
        <li style="margin: 8px 0; font-size: 16px;">Defense of third persons</li>
        <li style="margin: 8px 0; font-size: 16px;">Property protection</li>
    </ul>
</div>

<div style="background: linear-gradient(to right, rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4caf50; border-radius: 5px;">
    <h3 style="color: #4caf50; margin: 0 0 10px 0; font-size: 18px;">🔑 Key Terms</h3>
    <p style="margin: 0; font-size: 15px;"><strong style='color: #4caf50;'>Deadly force</strong>, <strong style='color: #4caf50;'>Reasonable belief</strong>, <strong style='color: #4caf50;'>Imminent threat</strong></p>
</div>

<hr style="border: none; border-top: 2px solid #444; margin: 35px 0;">

<h2 style="color: #4fc3f7; font-size: 24px; margin-bottom: 25px;">📋 Sections</h2>


<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.01. DEFINITIONS.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">In this chapter:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Custody" has the meaning assigned by Section</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Escape" has the meaning assigned by Section</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Deadly force" means force that is intended or known by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the actor to cause, or in the manner of its use or intended use is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">capable of causing, death or serious bodily injury.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) "Habitation" has the meaning assigned by Section</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) "Vehicle" has the meaning assigned by Section</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.02. JUSTIFICATION AS A DEFENSE.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">It is a defense to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">prosecution that the conduct in question is justified under this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">chapter.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.03. CONFINEMENT AS JUSTIFIABLE FORCE.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Confinement is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">justified when force is justified by this chapter if the actor takes</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">reasonable measures to terminate the confinement as soon as he knows</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">he safely can unless the person confined has been arrested for an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.04. THREATS AS JUSTIFIABLE FORCE.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">The threat of force is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">justified when the use of force is justified by this chapter. For</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">purposes of this section, a threat to cause death or serious bodily</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">injury by the production of a weapon or otherwise, as long as the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor's purpose is limited to creating an apprehension that he will</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">use deadly force if necessary, does not constitute the use of deadly</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">force.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.05. RECKLESS INJURY OF INNOCENT THIRD PERSON.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Even</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">though an actor is justified under this chapter in threatening or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">using force or deadly force against another, if in doing so he also</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">recklessly injures or kills an innocent third person, the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">justification afforded by this chapter is unavailable in a prosecution</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">for the reckless injury or killing of the innocent third person.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.06. CIVIL REMEDIES UNAFFECTED.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">The fact that conduct is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">justified under this chapter does not abolish or impair any remedy for</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the conduct that is available in a civil suit.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.21. PUBLIC DUTY.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) Except as qualified by Subsections</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) and (c), conduct is justified if the actor reasonably believes the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conduct is required or authorized by law, by the judgment or order of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a competent court or other governmental tribunal, or in the execution</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of legal process.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page - 1 -</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) The other sections of this chapter control when force is</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">used against a person to protect persons (Subchapter C), to protect</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property (Subchapter D), for law enforcement (Subchapter E), or by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">virtue of a special relationship (Subchapter F).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) The use of deadly force is not justified under this section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">unless the actor reasonably believes the deadly force is specifically</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">required by statute or unless it occurs in the lawful conduct of war.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">If deadly force is so justified, there is no duty to retreat before</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">using it.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) The justification afforded by this section is available if</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the actor reasonably believes:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the court or governmental tribunal has jurisdiction or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the process is lawful, even though the court or governmental tribunal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">lacks jurisdiction or the process is unlawful; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) his conduct is required or authorized to assist a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">public servant in the performance of his official duty, even though</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the servant exceeds his lawful authority.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.22. NECESSITY.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Conduct is justified if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the actor reasonably believes the conduct is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">immediately necessary to avoid imminent harm;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the desirability and urgency of avoiding the harm</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">clearly outweigh, according to ordinary standards of reasonableness,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the harm sought to be prevented by the law proscribing the conduct;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a legislative purpose to exclude the justification</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">claimed for the conduct does not otherwise plainly appear.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.31. SELF-DEFENSE.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) Except as provided in Subsection</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(b), a person is justified in using force against another when and to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the degree the actor reasonably believes the force is immediately</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">necessary to protect the actor against the other's use or attempted</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">use of unlawful force. The actor's belief that the force was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">immediately necessary as described by this subsection is presumed to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">be reasonable if the actor:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) knew or had reason to believe that the person against</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">whom the force was used:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) unlawfully and with force entered, or was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">attempting to enter unlawfully and with force, the actor's occupied</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">habitation, vehicle, or place of business or employment;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) unlawfully and with force removed, or was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">attempting to remove unlawfully and with force, the actor from the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor's habitation, vehicle, or place of business or employment; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) was committing or attempting to commit aggravated</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">kidnapping, murder, sexual assault, aggravated sexual assault,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">robbery, or aggravated robbery;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -2 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(2)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">did not provoke the person against whom the force was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">used; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) was not otherwise engaged in criminal activity, other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">than a Class C misdemeanor that is a violation of a law or ordinance</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">regulating traffic at the time the force was used.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) The use of force against another is not justified:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) in response to verbal provocation alone;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) to resist an arrest or search that the actor knows is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">being made by a peace officer, or by a person acting in a peace</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">officer's presence and at his direction, even though the arrest or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">search is unlawful, unless the resistance is justified under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (c);</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) if the actor consented to the exact force used or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">attempted by the other;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) if the actor provoked the other's use or attempted use</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of unlawful force, unless:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the actor abandons the encounter, or clearly</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">communicates to the other his intent to do so reasonably believing he</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">cannot safely abandon the encounter; and</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the other nevertheless continues or attempts to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">use unlawful force against the actor; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) if the actor sought an explanation from or discussion</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">with the other person concerning the actor's differences with the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other person while the actor was:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) carrying a weapon in violation of Section 46.02;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) possessing or transporting a weapon in violation</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of Section 46.05.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) The use of force to resist an arrest or search is justified:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) if, before the actor offers any resistance, the peace</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">officer (or person acting at his direction) uses or attempts to use</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">greater force than necessary to make the arrest or search; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) when and to the degree the actor reasonably believes</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the force is immediately necessary to protect himself against the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">peace officer's (or other person's) use or attempted use of greater</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">force than necessary.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) The use of deadly force is not justified under this</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">subchapter except as provided in Sections 9.32, 9.33, and 9.34.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) A person who has a right to be present at the location where</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the force is used, who has not provoked the person against whom the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">force is used, and who is not engaged in criminal activity at the time</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the force is used is not required to retreat before using force as</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">described by this section.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) For purposes of Subsection (a), in determining whether an</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor described by Subsection (e) reasonably believed that the use of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">force was necessary, a finder of fact may not consider whether the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor failed to retreat.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.32. DEADLY FORCE IN DEFENSE OF PERSON.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">justified in using deadly force against another:</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -3 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">A person is</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) if the actor would be justified in using force against</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the other under Section 9.31; and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(2)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">when and to the degree the actor reasonably believes</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the deadly force is immediately necessary:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) to protect the actor against the other's use or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">attempted use of unlawful deadly force; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) to prevent the other's imminent commission of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">aggravated kidnapping, murder, sexual assault, aggravated sexual</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">assault, robbery, or aggravated robbery.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) The actor's belief under Subsection (a)(2) that the deadly</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">force was immediately necessary as described by that subdivision is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">presumed to be reasonable if the actor:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) knew or had reason to believe that the person against</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">whom the deadly force was used:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) unlawfully and with force entered, or was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">attempting to enter unlawfully and with force, the actor's occupied</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">habitation, vehicle, or place of business or employment;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) unlawfully and with force removed, or was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">attempting to remove unlawfully and with force, the actor from the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor's habitation, vehicle, or place of business or employment; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) was committing or attempting to commit an offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">described by Subsection (a)(2)(B);</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) did not provoke the person against whom the force was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">used; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) was not otherwise engaged in criminal activity, other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">than a Class C misdemeanor that is a violation of a law or ordinance</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">regulating traffic at the time the force was used.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) A person who has a right to be present at the location where</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the deadly force is used, who has not provoked the person against whom</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the deadly force is used, and who is not engaged in criminal activity</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">at the time the deadly force is used is not required to retreat before</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">using deadly force as described by this section.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) For purposes of Subsection (a)(2), in determining whether an</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor described by Subsection (c) reasonably believed that the use of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">deadly force was necessary, a finder of fact may not consider whether</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the actor failed to retreat.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.33. DEFENSE OF THIRD PERSON.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">A person is justified in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">using force or deadly force against another to protect a third person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) under the circumstances as the actor reasonably</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">believes them to be, the actor would be justified under Section 9.31 or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">9.32 in using force or deadly force to protect himself against the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">unlawful force or unlawful deadly force he reasonably believes to be</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">threatening the third person he seeks to protect; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor reasonably believes that his intervention is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">immediately necessary to protect the third person.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.34. PROTECTION OF LIFE OR HEALTH.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person is</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">justified in using force, but not deadly force, against another when</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -4 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and to the degree he reasonably believes the force is immediately</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">necessary to prevent the other from committing suicide or inflicting</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">serious bodily injury to himself.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person is justified in using both force and deadly force</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">against another when and to the degree he reasonably believes the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">force or deadly force is immediately necessary to preserve the other's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">life in an emergency.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.41.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">PROTECTION OF ONE'S OWN PROPERTY. (a) A person in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">lawful possession of land or tangible, movable property is justified</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">in using force against another when and to the degree the actor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">reasonably believes the force is immediately necessary to prevent or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">terminate the other's trespass on the land or unlawful interference</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">with the property.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person unlawfully dispossessed of land or tangible,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">movable property by another is justified in using force against the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other when and to the degree the actor reasonably believes the force</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is immediately necessary to reenter the land or recover the property</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if the actor uses the force immediately or in fresh pursuit after the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">dispossession and:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the actor reasonably believes the other had no claim of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">right when he dispossessed the actor; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the other accomplished the dispossession by using</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">force, threat, or fraud against the actor.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.42. DEADLY FORCE TO PROTECT PROPERTY.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">A person is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">justified in using deadly force against another to protect land or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">tangible, movable property:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) if he would be justified in using force against the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other under Section 9.41; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) when and to the degree he reasonably believes the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">deadly force is immediately necessary:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) to prevent the other's imminent commission of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">arson, burglary, robbery, aggravated robbery, theft during the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">nighttime, or criminal mischief during the nighttime; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) to prevent the other who is fleeing immediately</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">after committing burglary, robbery, aggravated robbery, or theft</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">during the nighttime from escaping with the property; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) he reasonably believes that:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the land or property cannot be protected or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">recovered by any other means; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the use of force other than deadly force to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">protect or recover the land or property would expose the actor or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">another to a substantial risk of death or serious bodily injury.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.43.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">PROTECTION OF THIRD PERSON'S PROPERTY. A person is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">justified in using force or deadly force against another to protect</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -5 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">land or tangible, movable property of a third person if, under the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">circumstances as he reasonably believes them to be, the actor would be</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">justified under Section 9.41 or 9.42 in using force or deadly force to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">protect his own land or property and:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the actor reasonably believes the unlawful interference</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">constitutes attempted or consummated theft of or criminal mischief to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the tangible, movable property; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor reasonably believes that:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the third person has requested his protection of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the land or property;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) he has a legal duty to protect the third person's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">land or property; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) the third person whose land or property he uses</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">force or deadly force to protect is the actor's spouse, parent, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">child, resides with the actor, or is under the actor's care.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.44. USE OF DEVICE TO PROTECT PROPERTY.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">The justification</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">afforded by Sections 9.41 and 9.43 applies to the use of a device to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">protect land or tangible, movable property if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the device is not designed to cause, or known by the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor to create a substantial risk of causing, death or serious bodily</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">injury; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) use of the device is reasonable under all the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">circumstances as the actor reasonably believes them to be when he</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">installs the device.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.51. ARREST AND SEARCH.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A peace officer, or a person</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">acting in a peace officer's presence and at his direction, is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">justified in using force against another when and to the degree the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor reasonably believes the force is immediately necessary to make</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or assist in making an arrest or search, or to prevent or assist in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">preventing escape after arrest, if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the actor reasonably believes the arrest or search is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">lawful or, if the arrest or search is made under a warrant, he</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">reasonably believes the warrant is valid; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) before using force, the actor manifests his purpose to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">arrest or search and identifies himself as a peace officer or as one</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">acting at a peace officer's direction, unless he reasonably believes</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">his purpose and identity are already known by or cannot reasonably be</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">made known to the person to be arrested.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person other than a peace officer (or one acting at his</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">direction) is justified in using force against another when and to the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">degree the actor reasonably believes the force is immediately</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">necessary to make or assist in making a lawful arrest, or to prevent</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or assist in preventing escape after lawful arrest if, before using</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">force, the actor manifests his purpose to and the reason for the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">arrest or reasonably believes his purpose and the reason are already</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -6 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">known by or cannot reasonably be made known to the person to be</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">arrested.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) A peace officer is justified in using deadly force against</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">another when and to the degree the peace officer reasonably believes</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the deadly force is immediately necessary to make an arrest, or to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">prevent escape after arrest, if the use of force would have been</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">justified under Subsection (a) and:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the actor reasonably believes the conduct for which</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">arrest is authorized included the use or attempted use of deadly</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">force; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor reasonably believes there is a substantial</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">risk that the person to be arrested will cause death or serious bodily</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">injury to the actor or another if the arrest is delayed.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) A person other than a peace officer acting in a peace</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">officer's presence and at his direction is justified in using deadly</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">force against another when and to the degree the person reasonably</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">believes the deadly force is immediately necessary to make a lawful</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">arrest, or to prevent escape after a lawful arrest, if the use of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">force would have been justified under Subsection (b) and:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the actor reasonably believes the felony or offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">against the public peace for which arrest is authorized included the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">use or attempted use of deadly force; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor reasonably believes there is a substantial</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">risk that the person to be arrested will cause death or serious bodily</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">injury to another if the arrest is delayed.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) There is no duty to retreat before using deadly force</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">justified by Subsection (c) or (d).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) Nothing in this section relating to the actor's</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">manifestation of purpose or identity shall be construed as conflicting</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">with any other law relating to the issuance, service, and execution of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an arrest or search warrant either under the laws of this state or the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">United States.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(g) Deadly force may only be used under the circumstances</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">enumerated in Subsections (c) and (d).</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.52. PREVENTION OF ESCAPE FROM CUSTODY.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">The use of force</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to prevent the escape of an arrested person from custody is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">justifiable when the force could have been employed to effect the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">arrest under which the person is in custody, except that a guard</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">employed by a correctional facility or a peace officer is justified in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">using any force, including deadly force, that he reasonably believes</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to be immediately necessary to prevent the escape of a person from the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">correctional facility.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.53. MAINTAINING SECURITY IN CORRECTIONAL FACILITY.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">An</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">officer or employee of a correctional facility is justified in using</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">force against a person in custody when and to the degree the officer</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or employee reasonably believes the force is necessary to maintain the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -7 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">security of the correctional facility, the safety or security of other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">persons in custody or employed by the correctional facility, or his</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">own safety or security.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.54. LIMITATION ON USE OF FORCE BY DRONE.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) In this</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Autonomous drone" means a drone that operates</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">autonomously through computer software or other programming.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Drone" and "law enforcement agency" have the meanings</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">assigned by Article 2B.0253, Code of Criminal Procedure.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) Notwithstanding any other law, the use of force, including</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">deadly force, involving a drone is justified under this subchapter</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">only if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) at the time the use of force occurred, the actor was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">employed by a law enforcement agency;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the use of force:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) would have been justified under another provision</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of this subchapter; and</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) did not involve the use of deadly force by means</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of an autonomous drone; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) before the use of force occurred, the law enforcement</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">agency employing the actor adopted and submitted to the Texas</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Commission on Law Enforcement a policy on the agency's use of force by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">means of a drone, as required by Article 2B.0253, Code of Criminal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Procedure, and the use of force conformed to the requirements of that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">policy.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.55. USE OF LESS-LETHAL FORCE WEAPON.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) In this</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section, "less-lethal force weapon" means:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) any weapon, device, or munition that is designed, made,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or adapted to expel a projectile or multiple projectiles against a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">target to temporarily incapacitate the target while minimizing the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">risk of serious bodily injury or death;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a chemical dispensing device;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a device used to strike a person; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) a stun gun, as defined by Section 38.14.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) This section applies only to a guard employed by a</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">correctional facility or a peace officer who is engaged in the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">discharge of the guard's or officer's official duties.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) A person to whom this section applies is justified in using</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">force with a less-lethal force weapon against another when and to the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">degree the person reasonably believes the force was necessary to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">accomplish the person's official duties as a guard or officer and if</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the person's use of the weapon is in substantial compliance with the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person's training.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -8 -</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.61. PARENT-CHILD.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) The use of force, but not deadly</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">force, against a child younger than 18 years is justified:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) if the actor is the child's parent or stepparent or is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">acting in loco parentis to the child; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) when and to the degree the actor reasonably believes</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the force is necessary to discipline the child or to safeguard or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">promote his welfare.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) For purposes of this section, "in loco parentis" includes</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">grandparent and guardian, any person acting by, through, or under the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">direction of a court with jurisdiction over the child, and anyone who</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">has express or implied consent of the parent or parents.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.62. EDUCATOR-STUDENT.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">The use of force, but not deadly</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">force, against a person is justified:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) if the actor is entrusted with the care, supervision,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or administration of the person for a special purpose; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) when and to the degree the actor reasonably believes</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the force is necessary to further the special purpose or to maintain</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">discipline in a group.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 9.63. GUARDIAN-INCOMPETENT.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">The use of force, but not</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">deadly force, against a mental incompetent is justified:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) if the actor is the incompetent's guardian or someone</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">similarly responsible for the general care and supervision of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">incompetent; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) when and to the degree the actor reasonably believes</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the force is necessary:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) to safeguard and promote the incompetent's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">welfare; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) if the incompetent is in an institution for his</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">care and custody, to maintain discipline in the institution.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -9 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">PENAL CODE</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">TITLE 5. OFFENSES AGAINST THE PERSON</p>
</div>
`
    },
    
    {
        category: 'Penal Code',
        title: "Chapter 19 - Criminal Homicide",
        content: `
<h1 style="color: #4fc3f7; font-size: 32px; margin-bottom: 15px;">Chapter 19</h1>
<h2 style="color: #b0b0b0; font-size: 22px; font-weight: normal; margin-bottom: 30px;">Criminal Homicide</h2>

<div style="background: linear-gradient(to right, rgba(79, 195, 247, 0.25), rgba(79, 195, 247, 0.05)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4fc3f7; border-radius: 5px;">
    <h3 style="color: #4fc3f7; margin: 0 0 10px 0; font-size: 18px;">📖 Quick Summary</h3>
    <p style="font-size: 17px; line-height: 1.7; margin: 0; color: #e0e0e0;">Criminal homicide - murder, capital murder, manslaughter</p>
</div>

<div style="background: linear-gradient(to right, rgba(255, 193, 7, 0.2), rgba(255, 193, 7, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #ffc107; border-radius: 5px;">
    <h3 style="color: #ffc107; margin: 0 0 15px 0; font-size: 18px;">⚡ Must Know</h3>
    <ul style="margin: 0; padding-left: 20px; color: #e0e0e0;">
        <li style="margin: 8px 0; font-size: 16px;">Murder = intentional/knowing death</li>
        <li style="margin: 8px 0; font-size: 16px;">Capital murder = murder + aggravating factor</li>
        <li style="margin: 8px 0; font-size: 16px;">Manslaughter = reckless death</li>
    </ul>
</div>

<div style="background: linear-gradient(to right, rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4caf50; border-radius: 5px;">
    <h3 style="color: #4caf50; margin: 0 0 10px 0; font-size: 18px;">🔑 Key Terms</h3>
    <p style="margin: 0; font-size: 15px;"><strong style='color: #4caf50;'>Intentionally</strong>, <strong style='color: #4caf50;'>Knowingly</strong>, <strong style='color: #4caf50;'>Recklessly</strong></p>
</div>

<hr style="border: none; border-top: 2px solid #444; margin: 35px 0;">

<h2 style="color: #4fc3f7; font-size: 24px; margin-bottom: 25px;">📋 Sections</h2>


<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 19.01. TYPES OF CRIMINAL HOMICIDE.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">A person commits</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">criminal homicide if he intentionally, knowingly, recklessly, or with</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">criminal negligence causes the death of an individual.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) Criminal homicide is murder, capital murder, manslaughter, or</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">criminally negligent homicide.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 19.02. MURDER.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Adequate cause" means cause that would commonly produce a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">degree of anger, rage, resentment, or terror in a person of ordinary</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">temper, sufficient to render the mind incapable of cool reflection.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Sudden passion" means passion directly caused by and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">arising out of provocation by the individual killed or another acting</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">with the person killed which passion arises at the time of the offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and is not solely the result of former provocation.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person commits an offense if the person:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) intentionally or knowingly causes the death of an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">individual;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) intends to cause serious bodily injury and commits an act</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">clearly dangerous to human life that causes the death of an individual;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) commits or attempts to commit a felony, other than</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">manslaughter, and in the course of and in furtherance of the commission</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or attempt, or in immediate flight from the commission or attempt, the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person commits or attempts to commit an act clearly dangerous to human</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">life that causes the death of an individual; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) knowingly manufactures or delivers a controlled substance</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">included in Penalty Group 1-B under Section 481.1022, Health and Safety</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Code, in violation of Section 481.1123, Health and Safety Code, and an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">individual dies as a result of injecting, ingesting, inhaling, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">introducing into the individual's body any amount of the controlled</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">substance manufactured or delivered by the actor, regardless of whether</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the controlled substance was used by itself or with another substance,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">including a drug, adulterant, or dilutant.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) Except as provided by Subsection (d), an offense under this</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section is a felony of the first degree.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) At the punishment stage of a trial, the defendant may raise the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">issue as to whether he caused the death under the immediate influence of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">sudden passion arising from an adequate cause. If the defendant proves</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the issue in the affirmative by a preponderance of the evidence, the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense is a felony of the second degree.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) It is a defense to prosecution under Subsection (b)(4) that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor's conduct in manufacturing or delivering the controlled substance</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">was authorized under Chapter 481, Health and Safety Code, or other state</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or federal law.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 19.03. CAPITAL MURDER.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense if</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the person commits murder as defined under Section 19.02(b)(1) and:</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page - 1 -</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the person murders a peace officer or fireman who is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">acting in the lawful discharge of an official duty and who the person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">knows is a peace officer or fireman;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the person intentionally commits the murder in the course</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of committing or attempting to commit kidnapping, burglary, robbery,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">aggravated sexual assault, arson, obstruction or retaliation, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">terroristic threat under Section 22.07(a)(1), (3), (4), (5), or (6);</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the person commits the murder for remuneration or the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">promise of remuneration or employs another to commit the murder for</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">remuneration or the promise of remuneration;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) the person commits the murder while escaping or attempting</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to escape from a penal institution;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) the person, while incarcerated in a penal institution,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">murders another:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) who is employed in the operation of the penal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">institution; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) with</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">intent</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">establish,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">maintain,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">participate in a combination or in the profits of a combination;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) the person:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) while incarcerated for an offense under this section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or Section 19.02, murders another; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) while serving a sentence of life imprisonment or a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">term of 99 years for an offense under Section 20.04, 22.021, or 29.03,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">murders another;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) the person murders more than one person:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) during the same criminal transaction; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) during different criminal transactions but the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">murders are committed pursuant to the same scheme or course of conduct;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(8) the person murders an individual under 10 years of age;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(9) the person murders an individual 10 years of age or older</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">but younger than 15 years of age; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(10) the person murders another person in retaliation for or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">on account of the service or status of the other person as a judge or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">justice of the supreme court, the court of criminal appeals, a court of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">appeals, a district court, a criminal district court, a constitutional</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">county court, a statutory county court, a justice court, or a municipal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">court.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a capital felony.</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) If the jury or, when authorized by law, the judge does not find</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">beyond a reasonable doubt that the defendant is guilty of an offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under this section, he may be convicted of murder or of any other lesser</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">included offense.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) For purposes of Subsection (a)(1), the actor is presumed to</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">have known the person murdered was a peace officer or fireman if the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person was wearing a distinctive uniform or badge indicating the person's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">employment as a peace officer or fireman.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 19.04. MANSLAUGHTER.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense if he</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">recklessly causes the death of an individual.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -2 -</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a felony of the second degree,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">except that the offense is a felony of the first degree if it is shown on</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the trial of the offense that the defendant committed an offense under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 28.09 and that conduct caused the death of an individual.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 19.05. CRIMINALLY NEGLIGENT HOMICIDE.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an offense if he causes the death of an individual by criminal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">negligence.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a state jail felony.</strong></p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 19.06. APPLICABILITY TO CERTAIN CONDUCT.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">This chapter does</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">not apply to the death of an unborn child if the conduct charged is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) conduct committed by the mother of the unborn child;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a lawful medical procedure performed by a physician or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other licensed health care provider with the requisite consent, if the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">death of the unborn child was the intended result of the procedure;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a lawful medical procedure performed by a physician or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other licensed health care provider with the requisite consent as part of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an assisted reproduction as defined by Section 160.102, Family Code; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) the dispensation of a drug in accordance with law or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">administration of a drug prescribed in accordance with law.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -3 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">PENAL CODE</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">TITLE 5. OFFENSES AGAINST THE PERSON</p>
</div>
`
    },
    
    {
        category: 'Penal Code',
        title: "Chapter 20 - Kidnapping",
        content: `
<h1 style="color: #4fc3f7; font-size: 32px; margin-bottom: 15px;">Chapter 20</h1>
<h2 style="color: #b0b0b0; font-size: 22px; font-weight: normal; margin-bottom: 30px;">Kidnapping</h2>

<div style="background: linear-gradient(to right, rgba(79, 195, 247, 0.25), rgba(79, 195, 247, 0.05)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4fc3f7; border-radius: 5px;">
    <h3 style="color: #4fc3f7; margin: 0 0 10px 0; font-size: 18px;">📖 Quick Summary</h3>
    <p style="font-size: 17px; line-height: 1.7; margin: 0; color: #e0e0e0;">Kidnapping, unlawful restraint, smuggling</p>
</div>

<div style="background: linear-gradient(to right, rgba(255, 193, 7, 0.2), rgba(255, 193, 7, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #ffc107; border-radius: 5px;">
    <h3 style="color: #ffc107; margin: 0 0 15px 0; font-size: 18px;">⚡ Must Know</h3>
    <ul style="margin: 0; padding-left: 20px; color: #e0e0e0;">
        <li style="margin: 8px 0; font-size: 16px;">Unlawful restraint = restricting movement</li>
        <li style="margin: 8px 0; font-size: 16px;">Kidnapping = abduction with intent</li>
    </ul>
</div>

<div style="background: linear-gradient(to right, rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4caf50; border-radius: 5px;">
    <h3 style="color: #4caf50; margin: 0 0 10px 0; font-size: 18px;">🔑 Key Terms</h3>
    <p style="margin: 0; font-size: 15px;"><strong style='color: #4caf50;'>Abduct</strong>, <strong style='color: #4caf50;'>Restrain</strong></p>
</div>

<hr style="border: none; border-top: 2px solid #444; margin: 35px 0;">

<h2 style="color: #4fc3f7; font-size: 24px; margin-bottom: 25px;">📋 Sections</h2>


<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 20.01. DEFINITIONS.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">In this chapter:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Restrain" means to restrict a person's movements without</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">consent, so as to interfere substantially with the person's liberty, by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">moving the person from one place to another or by confining the person.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Restraint is "without consent" if it is accomplished by:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) force, intimidation, or deception; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) any means, including acquiescence of the victim, if:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) the victim is a child who is less than 14 years</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of age or an incompetent person and the parent, guardian, or person or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">institution acting in loco parentis has not acquiesced in the movement or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">confinement; or</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) the victim is a child who is 14 years of age or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">older and younger than 17 years of age, the victim is taken outside of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the state and outside a 120-mile radius from the victim's residence, and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the parent, guardian, or person or institution acting in loco parentis</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">has not acquiesced in the movement.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Abduct" means to restrain a person with intent to prevent</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">his liberation by:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) secreting or holding him in a place where he is not</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">likely to be found; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) using or threatening to use deadly force.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Relative" means a parent or stepparent, ancestor,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">sibling, or uncle or aunt, including an adoptive relative of the same</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">degree through marriage or adoption.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) "Person"</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">means</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">individual</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">corporation,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">association, limited liability company, or other entity or organization</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">governed by the Business Organizations Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) Notwithstanding Section 1.07, "individual" means a human</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">being who has been born and is alive.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) "Agricultural land" has the meaning assigned by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">75.001, Civil Practice and Remedies Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) "Firearm" has the meaning assigned by Section 46.01.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(8) "Special investigator" includes an agent of the United</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">States Department of Homeland Security.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 20.02. UNLAWFUL RESTRAINT.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if he intentionally or knowingly restrains another person.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) It is an affirmative defense to prosecution under this section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the person restrained was a child younger than 14 years of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">age;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor was a relative of the child; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the actor's sole intent was to assume lawful control of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the child.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under this section is a Class A misdemeanor, except</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that the offense is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a state jail felony if the person restrained was a child</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page - 1 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">younger than 17 years of age;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a felony of the third degree if:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the actor recklessly exposes the victim to a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">substantial risk of serious bodily injury;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the actor restrains an individual the actor knows is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a public servant while the public servant is lawfully discharging an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">official duty or in retaliation or on account of an exercise of official</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">power or performance of an official duty as a public servant; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) the actor, while in custody or committed to a civil</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">commitment facility, restrains any other person; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) notwithstanding Subdivision (2)(B), a felony of the second</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">degree if the actor restrains an individual the actor knows is a peace</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">officer or judge while the officer or judge is lawfully discharging an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">official duty or in retaliation or on account of an exercise of official</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">power or performance of an official duty as a peace officer or judge.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) It is no offense to detain or move another under this section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">when it is for the purpose of effecting a lawful arrest or detaining an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">individual lawfully arrested.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) It is an affirmative defense to prosecution under this section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the person restrained was a child who is 14 years of age</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or older and younger than 17 years of age;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor does not restrain the child by force,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">intimidation, or deception; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the actor is not more than three years older than the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">child.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 20.03. KIDNAPPING.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense if he</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">intentionally or knowingly abducts another person.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) It is an affirmative defense to prosecution under this section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the abduction was not coupled with intent to use or to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">threaten to use deadly force;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor was a relative of the person abducted; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the actor's sole intent was to assume lawful control of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the victim.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under this section is a felony of the third degree.</strong></p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 20.04. AGGRAVATED KIDNAPPING.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">A person commits an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense if he intentionally or knowingly abducts another person with the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">intent to:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) hold him for ransom or reward;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) use him as a shield or hostage;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) facilitate the commission of a felony or the flight after</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the attempt or commission of a felony;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) inflict bodily injury on him or violate or abuse him</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">sexually;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) terrorize him or a third person; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) interfere with the performance of any governmental or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">political function.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person commits an offense if the person intentionally or</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -2 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">knowingly abducts another person and uses or exhibits a deadly weapon</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">during the commission of the offense.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) Except as provided by Subsection (d), an offense under this</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section is a felony of the first degree.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) At the punishment stage of a trial, the defendant may raise the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">issue as to whether he voluntarily released the victim in a safe place.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">If the defendant proves the issue in the affirmative by a preponderance</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the evidence, the offense is a felony of the second degree.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 20.05. SMUGGLING OF PERSONS.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if the person knowingly:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) uses a motor vehicle, aircraft, watercraft, or other means</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of conveyance to transport an individual with the intent to:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) conceal the individual from a peace officer or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">special investigator; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) flee from a person the actor knows is a peace officer</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or special investigator attempting to lawfully arrest or detain the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) encourages or induces a person to enter or remain in this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">country in violation of federal law by concealing, harboring, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">shielding that person from detection; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) assists, guides, or directs two or more individuals to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">enter or remain on agricultural land without the effective consent of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">owner.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) Subject to Subsections (b-1) and (b-2), an offense under this</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section is a felony of the third degree with a term of imprisonment of 10</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">years, except that the offense is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a felony of the second degree with a minimum term of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">imprisonment of 10 years if:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the actor commits the offense in a manner that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">creates a substantial likelihood that the smuggled individual will suffer</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">serious bodily injury or death;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the smuggled individual is a child younger than 18</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">years of age at the time of the offense;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) the offense was committed with the intent to obtain a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">pecuniary benefit;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) during the commission of the offense the actor,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">another party to the offense, or an individual assisted, guided, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">directed by the actor knowingly possessed a firearm; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(E) the actor commits the offense under Subsection</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)(1)(B); or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a felony of the first degree with a minimum term of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">imprisonment of 10 years if:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) it is shown on the trial of the offense that, as a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">direct result of the commission of the offense, the smuggled individual</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">became a victim of sexual assault, as defined by Section 22.011, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">aggravated sexual assault, as defined by Section 22.021; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the smuggled individual suffered serious bodily</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">injury or death.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(b-1) If at the punishment stage of the trial or at the time of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">entering a plea agreement for an offense under this section punishable as</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -3 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a felony of the third degree, the attorney representing the state in the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">prosecution of the offense certifies to the court in writing that the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor has provided significant cooperation to the state or law</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">enforcement, and describes the manner of cooperation, the minimum term of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">imprisonment is five years. The certification is confidential and shall</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">be sealed by the court, except that the certification may be accessed by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the office of the attorney representing the state, the attorney</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">representing the defendant, and the court. For purposes of this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">subsection, "significant cooperation" includes:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) testifying in a trial on behalf of the state against other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">parties to the offense;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) providing relevant information regarding the case and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other parties to the offense;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) providing information that furthers the investigation of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the charged offense and any other parties involved; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) providing information that aids law enforcement.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(b-2) At the punishment stage of a trial of an offense under this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section, other than an offense punishable under Subsection (b)(1)(A),</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(C), (D), or (E) or (b)(2), the actor may raise the issue as to whether</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the actor is related to the smuggled individual in the third degree of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">consanguinity or, at the time of the offense, in the third degree of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">affinity. If the actor proves the issue in the affirmative by a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">preponderance of the evidence, the offense is a felony of the third</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">degree with a minimum term of imprisonment of five years.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) It is an affirmative defense to prosecution of an offense under</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">this section, other than an offense punishable under Subsection (b)(1)(A)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or (b)(2), that the actor is related to the smuggled individual within</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the second degree of consanguinity or, at the time of the offense, within</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the second degree of affinity.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) If conduct constituting an offense under this section also</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">constitutes an offense under another section of this code, the actor may</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">be prosecuted under either section or under both sections.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 20.06. CONTINUOUS SMUGGLING OF PERSONS.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an offense if, during a period that is 10 or more days in duration, the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person engages two or more times in conduct that constitutes an offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under Section 20.05.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) If a jury is the trier of fact, members of the jury are not</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">required to agree unanimously on which specific conduct engaged in by the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">defendant constituted an offense under Section 20.05 or on which exact</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">date the defendant engaged in that conduct. The jury must agree</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">unanimously that the defendant, during a period that is 10 or more days</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">in duration, engaged two or more times in conduct that constitutes an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense under Section 20.05.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) If the victim of an offense under Subsection (a) is the same</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">victim as a victim of an offense under Section 20.05, a defendant may not</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">be convicted of the offense under Section 20.05 in the same criminal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">action as the offense under Subsection (a), unless the offense under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 20.05:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) is charged in the alternative;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) occurred outside the period in which the offense alleged</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -4 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under Subsection (a) was committed; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) is considered by the trier of fact to be a lesser included</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense of the offense alleged under Subsection (a).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) A defendant may not be charged with more than one count under</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (a) if all of the conduct that constitutes an offense under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 20.05 is alleged to have been committed against the same victim.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) Except as provided by Subsections (f) and (g), an offense under</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">this section is a felony of the second degree with a minimum term of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">imprisonment of 10 years.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) An offense under this section is a felony of the first degree</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">with a minimum term of imprisonment of 10 years if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the conduct constituting an offense under Section 20.05 is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conducted in a manner that creates a substantial likelihood that the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">smuggled individual will suffer serious bodily injury or death; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the smuggled individual is a child younger than 18 years</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of age at the time of the offense.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(g) An offense under this section is a felony of the first degree,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">punishable by imprisonment in the Texas Department of Criminal Justice</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">for life or for any term of not more than 99 years or less than 25 years,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) it is shown on the trial of the offense that, as a direct</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">result of the commission of the offense, the smuggled individual became a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">victim of sexual assault, as defined by Section 22.011, or aggravated</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">sexual assault, as defined by Section 22.021; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the smuggled individual suffered serious bodily injury or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">death.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 20.07. OPERATION OF STASH HOUSE.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense if the person knowingly:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) uses or permits another to use any real estate, building,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">room, tent, vehicle, boat, or other property owned by the person or under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the person's control to commit an offense or to facilitate the commission</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of an offense under Section 20.05, 20.06, 20A.02, 20A.03, 43.04, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">43.05; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) rents or leases any property to another, intending that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the property be used as described by Subdivision (1).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a felony of the third degree</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">with a minimum term of imprisonment of five years, except that the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense is a felony of the second degree with a minimum term of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">imprisonment of five years if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the offense is committed under Subsection (a)(1) and the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property that is the subject of the offense is used to commit or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">facilitate the commission of an offense under Section 20.06, 20A.03, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">43.05; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) it is shown on the trial of the offense that as a direct</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">result of the commission of the offense:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) an individual became a victim of sexual assault, as</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">defined by Section 22.011, or aggravated sexual assault, as defined by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 22.021; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) an individual suffered serious bodily injury or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">death.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -5 -</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) If conduct that constitutes an offense under this section also</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">constitutes an offense under another law, the actor may be prosecuted</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under this section, the other law, or both.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -6 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">PENAL CODE</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">TITLE 5. OFFENSES AGAINST THE PERSON</p>
</div>
`
    },
    
    {
        category: 'Penal Code',
        title: "Chapter 20A - Trafficking of Persons",
        content: `
<h1 style="color: #4fc3f7; font-size: 32px; margin-bottom: 15px;">Chapter 20A</h1>
<h2 style="color: #b0b0b0; font-size: 22px; font-weight: normal; margin-bottom: 30px;">Trafficking of Persons</h2>

<div style="background: linear-gradient(to right, rgba(79, 195, 247, 0.25), rgba(79, 195, 247, 0.05)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4fc3f7; border-radius: 5px;">
    <h3 style="color: #4fc3f7; margin: 0 0 10px 0; font-size: 18px;">📖 Quick Summary</h3>
    <p style="font-size: 17px; line-height: 1.7; margin: 0; color: #e0e0e0;">Trafficking - forced labor and sexual exploitation</p>
</div>

<div style="background: linear-gradient(to right, rgba(255, 193, 7, 0.2), rgba(255, 193, 7, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #ffc107; border-radius: 5px;">
    <h3 style="color: #ffc107; margin: 0 0 15px 0; font-size: 18px;">⚡ Must Know</h3>
    <ul style="margin: 0; padding-left: 20px; color: #e0e0e0;">
        <li style="margin: 8px 0; font-size: 16px;">Force, fraud, or coercion</li>
        <li style="margin: 8px 0; font-size: 16px;">Commercial sexual exploitation</li>
    </ul>
</div>

<div style="background: linear-gradient(to right, rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4caf50; border-radius: 5px;">
    <h3 style="color: #4caf50; margin: 0 0 10px 0; font-size: 18px;">🔑 Key Terms</h3>
    <p style="margin: 0; font-size: 15px;"><strong style='color: #4caf50;'>Trafficking</strong></p>
</div>

<hr style="border: none; border-top: 2px solid #444; margin: 35px 0;">

<h2 style="color: #4fc3f7; font-size: 24px; margin-bottom: 25px;">📋 Sections</h2>


<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 20A.01. DEFINITIONS.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">In this chapter:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Child" means a person younger than 18 years of age.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(1-a) "Coercion" as defined by Section 1.07 includes:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) destroying, concealing, confiscating, or withholding</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">from a trafficked person, or threatening to destroy, conceal, confiscate,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or withhold from a trafficked person, the person's actual or purported:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) government records; or</strong></p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) identifying information or documents;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) causing a trafficked person, without the person's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">consent, to become intoxicated, as defined by Section 49.01, to a degree</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that impairs the person's ability to appraise the nature of or resist</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">engaging in any conduct, including performing or providing labor or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">services; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) withholding alcohol or a controlled substance to a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">degree that impairs the ability of a trafficked person with a chemical</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">dependency, as defined by Section 462.001, Health and Safety Code, to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">appraise the nature of or resist engaging in any conduct, including</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">performing or providing labor or services.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(1-b) "Disabled individual" has the meaning assigned by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 22.021(b).</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Forced labor or services" means labor or services, other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">than labor or services that constitute sexual conduct, that are performed</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or provided by another person and obtained through an actor's use of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">force, fraud, or coercion.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(2-a) "Premises" has the meaning assigned by Section 481.134,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Health and Safety Code.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(2-b) "School" means a public or private primary or secondary</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">school.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Sexual conduct" has the meaning assigned by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">43.25.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) "Traffic" means to transport, entice, recruit, harbor,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">provide, or otherwise obtain another person by any means.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 20A.02. TRAFFICKING OF PERSONS.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense if the person knowingly:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) traffics another person with the intent that the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">trafficked person engage in forced labor or services;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) receives a benefit from participating in a venture that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">involves an activity described by Subdivision (1), including by receiving</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">labor or services the person knows are forced labor or services;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) traffics another person and, through force, fraud, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">coercion, causes the trafficked person to engage in conduct prohibited</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) Section 43.02 (Prostitution);</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) Section 43.03 (Promotion of Prostitution);</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(B-1) Section 43.031 (Online Promotion of Prostitution);</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) Section 43.04 (Aggravated Promotion of Prostitution);</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(C-1) Section 43.041 (Aggravated Online Promotion of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page - 1 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Prostitution); or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) Section 43.05 (Compelling Prostitution);</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) receives a benefit from participating in a venture that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">involves an activity described by Subdivision (3) or engages in sexual</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conduct with a person trafficked in the manner described in Subdivision</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(3);</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) traffics a child or disabled individual with the intent</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that the trafficked child or disabled individual engage in forced labor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or services;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) receives a benefit from participating in a venture that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">involves an activity described by Subdivision (5), including by receiving</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">labor or services the person knows are forced labor or services;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) traffics a child or disabled individual and by any means</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">causes the trafficked child or disabled individual to engage in, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">become the victim of, conduct prohibited by:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) Section 21.02 (Continuous Sexual Abuse of Young Child</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or Disabled Individual);</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) Section 21.11 (Indecency with a Child);</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) Section 22.011 (Sexual Assault);</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) Section 22.021 (Aggravated Sexual Assault);</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(E) Section 43.02 (Prostitution);</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(E-1) Section 43.021 (Solicitation of Prostitution);</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(F) Section 43.03 (Promotion of Prostitution);</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(F-1) Section 43.031 (Online Promotion of Prostitution);</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(G) Section 43.04 (Aggravated Promotion of Prostitution);</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(G-1) Section 43.041 (Aggravated Online Promotion of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Prostitution);</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(H) Section 43.05 (Compelling Prostitution);</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(I) Section 43.25 (Sexual Performance by a Child);</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(J) Section 43.251 (Employment Harmful to Children); or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(K) Section 43.26 (Possession or Promotion of Child</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Pornography); or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(8) receives a benefit from participating in a venture that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">involves an activity described by Subdivision (7) or engages in sexual</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conduct with a child or disabled individual trafficked in the manner</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">described in Subdivision (7).</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a-1) Repealed by Acts 2021, 87th Leg., R.S., Ch. 807 (H.B. 1540),</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Sec. 62(5) and Ch. 905 (H.B. 3521), Sec. 2, eff. September 1, 2021.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Text of subsection as amended by Acts 2023, 88th Leg., R.S., Ch. 93</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(S.B. 1527),</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 2.02</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) Except as otherwise provided by this subsection and Subsection</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(b-1), an offense under this section is a felony of the second</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">degree. An offense under this section is a felony of the first degree</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the applicable conduct constitutes an offense under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (a)(5), (6), (7), or (8), regardless of whether the actor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">knows the age of the child or whether the actor knows the victim is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">disabled at the time of the offense;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the commission of the offense results in serious bodily</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -2 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">injury to or the death of the person who is trafficked;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the commission of the offense results in the death of an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">unborn child of the person who is trafficked; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) the actor:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) used or exhibited a deadly weapon during the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">commission of the offense;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) intentionally, knowingly, or recklessly impeded the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">normal breathing or circulation of the blood of the trafficked person by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">applying pressure to the person's throat or neck or by blocking the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person's nose or mouth; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) recruited, enticed, or obtained the trafficked person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">from a shelter or facility operating as a residential treatment center</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that serves runaway youth, foster children, the homeless, or persons</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">subjected to human trafficking, domestic violence, or sexual assault.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Text of subsection as amended by Acts 2023, 88th Leg., R.S., Ch. 452</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(H.B. 3554), Sec. 1</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) Except as otherwise provided by this subsection and Subsection</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(b-1), an offense under this section is a felony of the second</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">degree. An offense under this section is a felony of the first degree</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the applicable conduct constitutes an offense under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (a)(5), (6), (7), or (8), regardless of whether the actor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">knows the age of the child at the time of the offense;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the commission of the offense results in the death of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person who is trafficked; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the commission of the offense results in the death of an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">unborn child of the person who is trafficked.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Text of subsection as amended by Acts 2023, 88th Leg., R.S., Ch. 451</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(H.B. 3553), Sec. 2</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(b-1) An offense under this section is a felony of the first degree</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">punishable by imprisonment in the Texas Department of Criminal Justice</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">for life or for a term of not more than 99 years or less than 25 years if</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">it is shown on the trial of the offense that the actor committed the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense in a location that was:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) on the premises of or within 1,000 feet of the premises</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) a school; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) an institution of higher education or private or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">independent institution of higher education, as defined by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">61.003, Education Code; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) on premises or within 1,000 feet of premises where:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) an official school function was taking place; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) an event sponsored or sanctioned by the University</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Interscholastic League was taking place.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Text of subsection as amended by Acts 2023, 88th Leg., R.S., Ch. 452</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(H.B. 3554), Sec. 1</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -3 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(b-1) An offense under this section is a felony of the first degree</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">punishable by imprisonment in the Texas Department of Criminal Justice</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">for life or for a term of not more than 99 years or less than 25 years if</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">it is shown on the trial of the offense that the actor committed the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense in a location that was:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) on the premises of or within 1,000 feet of the premises</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) a school;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a juvenile detention facility;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) a post-adjudication secure correctional facility;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) a shelter or facility operating as a residential</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">treatment center that serves runaway youth, foster children, people who</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">are homeless, or persons subjected to human trafficking, domestic</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">violence, or sexual assault;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(E) a community center offering youth services and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">programs; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(F) a child-care facility, as defined by Section 42.002,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Human Resources Code; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) on premises or within 1,000 feet of premises where:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) an official school function was taking place; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) an event sponsored or sanctioned by the University</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Interscholastic League was taking place.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) If conduct constituting an offense under this section also</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">constitutes an offense under another section of this code, the actor may</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">be prosecuted under either section or under both sections.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) If the victim of an offense under Subsection (a)(7)(A) is the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">same victim as a victim of an offense under Section 21.02, a defendant</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">may not be convicted of the offense under Section 21.02 in the same</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">criminal action as the offense under Subsection (a)(7)(A) unless the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense under Section 21.02:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) is charged in the alternative;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) occurred outside the period in which the offense alleged</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under Subsection (a)(7)(A) was committed; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) is considered by the trier of fact to be a lesser included</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense of the offense alleged under Subsection (a)(7)(A).</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 20A.03. CONTINUOUS TRAFFICKING OF PERSONS.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">commits an offense if, during a period that is 30 or more days in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">duration, the person engages two or more times in conduct that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">constitutes an offense under Section 20A.02 against one or more victims.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) If a jury is the trier of fact, members of the jury are not</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">required to agree unanimously on which specific conduct engaged in by the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">defendant constituted an offense under Section 20A.02 or on which exact</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">date the defendant engaged in that conduct. The jury must agree</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">unanimously that the defendant, during a period that is 30 or more days</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">in duration, engaged in conduct that constituted an offense under Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">20A.02.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) If the victim of an offense under Subsection (a) is the same</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">victim as a victim of an offense under Section 20A.02, a defendant may</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">not be convicted of the offense under Section 20A.02 in the same criminal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -4 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">action as the offense under Subsection (a), unless the offense under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 20A.02:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) is charged in the alternative;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) occurred outside the period in which the offense alleged</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under Subsection (a) was committed; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) is considered by the trier of fact to be a lesser included</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense of the offense alleged under Subsection (a).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) A defendant may not be charged with more than one count under</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (a) if all of the conduct that constitutes an offense under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 20A.02 is alleged to have been committed against the same victim.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) An offense under this section is a felony of the first degree,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">punishable by imprisonment in the Texas Department of Criminal Justice</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">for life or for any term of not more than 99 years or less than 25 years.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 20A.04. ACCOMPLICE WITNESS; TESTIMONY AND IMMUNITY.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">party to an offense under this chapter may be required to provide</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">evidence or testify about the offense.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A party to an offense under this chapter may not be prosecuted</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">for any offense about which the party is required to provide evidence or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">testify, and the evidence and testimony may not be used against the party</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">in any adjudicatory proceeding except a prosecution for aggravated</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">perjury. For purposes of this subsection, "adjudicatory proceeding" means</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a proceeding before a court or any other agency of government in which</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the legal rights, powers, duties, or privileges of specified parties are</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">determined.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) A conviction under this chapter may be had on the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">uncorroborated testimony of a party to the offense.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 20A.05. PROSECUTION BY ATTORNEY GENERAL.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">The attorney general has jurisdiction to prosecute and shall</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">represent the state in the prosecution of an offense under this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">chapter as provided by Section 402.103, Government Code.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -5 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">PENAL CODE</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">TITLE 5. OFFENSES AGAINST THE PERSON</p>
</div>
`
    },
    
    {
        category: 'Penal Code',
        title: "Chapter 21 - Sexual Offenses",
        content: `
<h1 style="color: #4fc3f7; font-size: 32px; margin-bottom: 15px;">Chapter 21</h1>
<h2 style="color: #b0b0b0; font-size: 22px; font-weight: normal; margin-bottom: 30px;">Sexual Offenses</h2>

<div style="background: linear-gradient(to right, rgba(79, 195, 247, 0.25), rgba(79, 195, 247, 0.05)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4fc3f7; border-radius: 5px;">
    <h3 style="color: #4fc3f7; margin: 0 0 10px 0; font-size: 18px;">📖 Quick Summary</h3>
    <p style="font-size: 17px; line-height: 1.7; margin: 0; color: #e0e0e0;">Sexual offenses - assault, consent, age restrictions</p>
</div>

<div style="background: linear-gradient(to right, rgba(255, 193, 7, 0.2), rgba(255, 193, 7, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #ffc107; border-radius: 5px;">
    <h3 style="color: #ffc107; margin: 0 0 15px 0; font-size: 18px;">⚡ Must Know</h3>
    <ul style="margin: 0; padding-left: 20px; color: #e0e0e0;">
        <li style="margin: 8px 0; font-size: 16px;">Sexual assault = contact without consent</li>
        <li style="margin: 8px 0; font-size: 16px;">Age of consent = 17</li>
        <li style="margin: 8px 0; font-size: 16px;">Indecency with child</li>
    </ul>
</div>

<div style="background: linear-gradient(to right, rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4caf50; border-radius: 5px;">
    <h3 style="color: #4caf50; margin: 0 0 10px 0; font-size: 18px;">🔑 Key Terms</h3>
    <p style="margin: 0; font-size: 15px;"><strong style='color: #4caf50;'>Consent</strong>, <strong style='color: #4caf50;'>Sexual contact</strong></p>
</div>

<hr style="border: none; border-top: 2px solid #444; margin: 35px 0;">

<h2 style="color: #4fc3f7; font-size: 24px; margin-bottom: 25px;">📋 Sections</h2>


<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 21.01. DEFINITIONS.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">In this chapter:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Deviate sexual intercourse" means:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) any contact between any part of the genitals of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">one person and the mouth or anus of another person; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the penetration of the genitals or the anus of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">another person with an object.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Sexual contact" means, except as provided by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">21.11 or 21.12, any touching of the anus, breast, or any part of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">genitals of another person with intent to arouse or gratify the sexual</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">desire of any person.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Sexual intercourse" means any penetration of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">female sex organ by the male sex organ.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) "Spouse" means a person to whom a person is legally</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">married under Subtitle A, Title 1, Family Code, or a comparable law of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">another jurisdiction.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 21.02. CONTINUOUS SEXUAL ABUSE OF YOUNG CHILD OR DISABLED INDIVIDUAL.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Child" has the meaning assigned by Section 22.011(c).</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Disabled individual" has the meaning assigned by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 22.021(b).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person commits an offense if:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) during a period that is 30 or more days in duration,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the person commits two or more acts of sexual abuse, regardless of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">whether the acts of sexual abuse are committed against one or more</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">victims; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) at the time of the commission of each of the acts of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">sexual abuse, the actor is 17 years of age or older and the victim is:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) a child younger than 14 years of age, regardless</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of whether the actor knows the age of the victim at the time of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a disabled individual.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) For purposes of this section, "act of sexual abuse" means</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">any act that is a violation of one or more of the following penal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">laws:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) aggravated kidnapping under Section 20.04(a)(4), if the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor committed the offense with the intent to violate or abuse the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">victim sexually;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) indecency with a child under Section 21.11(a)(1), if the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor committed the offense in a manner other than by touching,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">including touching through clothing, the breast of a child;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) sexual assault under Section 22.011;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) aggravated sexual assault under Section 22.021;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page - 1 -</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) burglary under Section 30.02, if the offense is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">punishable under Subsection (d) of that section and the actor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">committed the offense with the intent to commit an offense listed in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subdivisions (1)-(4);</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) sexual performance by a child under Section 43.25;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) trafficking of persons under Section 20A.02(a)(3), (4),</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(7), or (8); and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(8) compelling prostitution under Section 43.05.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) If a jury is the trier of fact, members of the jury are not</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">required to agree unanimously on which specific acts of sexual abuse</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">were committed by the defendant or the exact date when those acts were</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">committed. The jury must agree unanimously that the defendant, during</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a period that is 30 or more days in duration, committed two or more</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">acts of sexual abuse.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) A defendant may not be convicted in the same criminal action</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of an offense listed under Subsection (c) the victim of which is the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">same victim as a victim of the offense alleged under Subsection (b)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">unless the offense listed in Subsection (c):</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) is charged in the alternative;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) occurred outside the period in which the offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">alleged under Subsection (b) was committed; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) is considered by the trier of fact to be a lesser</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">included offense of the offense alleged under Subsection (b).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) A defendant may not be charged with more than one count</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under Subsection (b) if all of the specific acts of sexual abuse that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">are alleged to have been committed are alleged to have been committed</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">against a single victim.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(g) With respect to a prosecution under this section involving</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">only one or more victims described by Subsection (b)(2)(A), it is an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">affirmative defense to prosecution under this section that the actor:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) was not more than five years older than:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the victim of the offense, if the offense is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">alleged to have been committed against only one victim; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the youngest victim of the offense, if the offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is alleged to have been committed against more than one victim;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) did not use duress, force, or a threat against a victim</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">at the time of the commission of any of the acts of sexual abuse</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">alleged as an element of the offense; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) at the time of the commission of any of the acts of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">sexual abuse alleged as an element of the offense:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) was not required under Chapter 62, Code of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Criminal Procedure, to register for life as a sex offender; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) was not a person who under Chapter 62 had a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">reportable conviction or adjudication for an offense under this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section or an act of sexual abuse as described by Subsection (c).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(h) An offense under this section is a felony of the first</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">degree, punishable by imprisonment in the Texas Department of Criminal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Justice for life, or for any term of not more than 99 years or less</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">than 25 years.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -2 -</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 21.03. CONTINUOUS SEXUAL ABUSE.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) during a period that is 30 or more days in duration,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the person commits two or more acts of sexual abuse against two or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">more victims; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) at the time of the commission of each of the acts of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">sexual abuse, the actor is 17 years of age or older.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) For purposes of this section, "act of sexual abuse" means</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">any act that is a violation of one or more of the following penal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">laws:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) aggravated kidnapping under Section 20.04(a)(4), if the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor committed the offense with the intent to violate or abuse the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">victim sexually;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) indecency with a child under Section 21.11(a)(1), if the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor committed the offense in a manner other than by touching,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">including touching through clothing, the breast of a child;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) sexual assault under Section 22.011;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) aggravated sexual assault under Section 22.021;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) burglary under Section 30.02, if the offense is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">punishable under Subsection (d) of that section and the actor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">committed the offense with the intent to commit an offense listed in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subdivisions (1)-(4);</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) sexual performance by a child under Section 43.25;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) trafficking of persons under Section 20A.02(a)(3), (4),</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(7), or (8); and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(8) compelling prostitution under Section 43.05.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) If a jury is the trier of fact, members of the jury are not</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">required to agree unanimously on which specific acts of sexual abuse</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">were committed by the defendant or the exact date when those acts were</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">committed. The jury must agree unanimously that the defendant, during</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a period that is 30 or more days in duration, committed two or more</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">acts of sexual abuse against two or more victims.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) A defendant may not be convicted in the same criminal action</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of an offense listed under Subsection (b) the victim of which is the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">same victim as a victim of the offense under Subsection (a) unless the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense listed in Subsection (b):</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) is charged in the alternative;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) occurred outside the period in which the offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">alleged under Subsection (a) was committed; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) is considered by the trier of fact to be a lesser</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">included offense of the offense alleged under Subsection (a).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) A defendant may not be charged with more than one count</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under Subsection (a) if all of the specific acts of sexual abuse that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">are alleged to have been committed are alleged to have been committed</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">against only two victims.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) With respect to a prosecution under this section involving</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">only two or more victims younger than 17 years of age, it is an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">affirmative defense to prosecution under this section that the actor:</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -3 -</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) was not more than five years older than the youngest</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">victim of the offense;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) did not use duress, force, or a threat against a victim</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">at the time of the commission of any of the acts of sexual abuse</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">alleged as an element of the offense; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) at the time of the commission of any of the acts of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">sexual abuse alleged as an element of the offense:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) was not required under Chapter 62, Code of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Criminal Procedure, to register for life as a sex offender; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) was not a person who under Chapter 62, Code of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Criminal Procedure, had a reportable conviction or adjudication for an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense under this section or an act of sexual abuse as described by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (b).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(g) An offense under this section is a felony of the first</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">degree.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 21.06. HOMOSEXUAL CONDUCT.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense if he engages in deviate sexual intercourse with another</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">individual of the same sex.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a Class C misdemeanor.</strong></p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 21.07. PUBLIC LEWDNESS.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense if the person knowingly engages</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">in any of the following acts in a public place or, if not in a public</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">place, the person is reckless about whether another is present who</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">will be offended or alarmed by the person's:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) act of sexual intercourse;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) act of deviate sexual intercourse; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) act of sexual contact.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a Class A misdemeanor,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">except that the offense is a felony of the third degree if the actor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is civilly committed as a sexually violent predator under Chapter 841,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Health and Safety Code.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 21.08. INDECENT EXPOSURE.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if he exposes his anus or any part of his genitals with intent to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">arouse or gratify the sexual desire of any person, and he is reckless</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">about whether another is present who will be offended or alarmed by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">his act.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a Class B misdemeanor,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">except that the offense is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a Class A misdemeanor if it is shown on the trial of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the offense that the defendant has been previously convicted one time</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of an offense under this section;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a state jail felony if it is shown on the trial of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense that the defendant has been previously convicted two or more</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">times of an offense under this section; or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -4 -</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a felony of the third degree if the actor is civilly</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">committed as a sexually violent predator under Chapter 841, Health and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Safety Code.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 21.09. BESTIALITY.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense if the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person knowingly:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) engages in an act involving contact between:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the person's mouth, anus, or genitals and the anus</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or genitals of an animal; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the person's anus or genitals and the mouth of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">animal;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) fondles or touches the anus or genitals of an animal in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a manner that is not a generally accepted and otherwise lawful animal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">husbandry or veterinary practice, including touching through clothing;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) causes an animal to contact the seminal fluid of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) inserts any part of a person's body or any object into</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the anus or genitals of an animal in a manner that is not a generally</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">accepted and otherwise lawful animal husbandry or veterinary practice;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) possesses, sells, transfers, purchases, or otherwise</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">obtains an animal with the intent that the animal be used for conduct</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">described by Subdivision (1), (2), (3), or (4);</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) organizes, promotes, conducts, or participates as an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">observer of conduct described by Subdivision (1), (2), (3), or (4);</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) causes a person to engage or aids a person in engaging</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">in conduct described by Subdivision (1), (2), (3), or (4);</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(8) permits conduct described by Subdivision (1), (2), (3),</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or (4) to occur on any premises under the person's control;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(9) engages in conduct described by Subdivision (1), (2),</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(3), or (4) in the presence of a child younger than 18 years of age;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(10) advertises, offers, or accepts the offer of an animal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">with the intent that the animal be used in this state for conduct</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">described by Subdivision (1), (2), (3), or (4).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a state jail felony, unless</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the offense is committed under Subsection (a)(9) or results in serious</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">bodily injury or death of the animal, in which event the offense is a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">felony of the second degree.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) It is an exception to the application of this section that</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the conduct engaged in by the actor is a generally accepted and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">otherwise lawful animal husbandry or veterinary practice.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 21.11. INDECENCY WITH A CHILD.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense if, with a child younger than 17 years of age, whether the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">child is of the same or opposite sex and regardless of whether the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person knows the age of the child at the time of the offense, the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person:</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -5 -</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) engages in sexual contact with the child or causes the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">child to engage in sexual contact; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) with intent to arouse or gratify the sexual desire of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">any person:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) exposes the person's anus or any part of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person's genitals, knowing the child is present; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) causes the child to expose the child's anus or any</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">part of the child's genitals.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) It is an affirmative defense to prosecution under this</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section that the actor:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) was not more than three years older than the victim and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the opposite sex;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) did not use duress, force, or a threat against the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">victim at the time of the offense; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) at the time of the offense:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) was not required under Chapter 62, Code of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Criminal Procedure, to register for life as a sex offender; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) was not a person who under Chapter 62 had a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">reportable conviction or adjudication for an offense under this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(b-1) It is an affirmative defense to prosecution under this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section that the actor was the spouse of the child at the time of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) In this section, "sexual contact" means the following acts,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if committed with the intent to arouse or gratify the sexual desire of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">any person:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) any touching by a person, including touching through</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">clothing, of the anus, breast, or any part of the genitals of a child;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) any touching of any part of the body of a child,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">including touching through clothing, with the anus, breast, or any</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">part of the genitals of a person.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) An offense under Subsection (a)(1) is a felony of the second</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">degree and an offense under Subsection (a)(2) is a felony of the third</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">degree.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 21.12. IMPROPER RELATIONSHIP BETWEEN EDUCATOR AND STUDENT.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) An employee of a public or private primary or secondary school</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">commits an offense if the employee:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) engages in sexual contact, sexual intercourse, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">deviate sexual intercourse with a person who is enrolled in a public</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or private primary or secondary school at which the employee works;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) holds a position described by Section 21.003(a) or (b),</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Education Code, regardless of whether the employee holds the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">appropriate certificate, permit, license, or credential for the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">position, and engages in sexual contact, sexual intercourse, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">deviate sexual intercourse with a person the employee knows is:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) enrolled in a public or private primary or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">secondary school, other than a school described by Subdivision (1); or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -6 -</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a student participant in an educational activity</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that is sponsored by a school district or a public or private primary</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or secondary school, if students enrolled in a public or private</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">primary or secondary school are the primary participants in the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">activity; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) engages in conduct described by Section 33.021, with a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person described by Subdivision (1), or a person the employee knows is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a person described by Subdivision (2)(A) or (B), regardless of the age</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of that person.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a felony of the second</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">degree.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(b-1) It is an affirmative defense to prosecution under this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the actor was the spouse of the enrolled person at the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">time of the offense; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor was not more than three years older than the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">enrolled person and, at the time of the offense, the actor and the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">enrolled person were in a relationship that began before the actor's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">employment at a public or private primary or secondary school.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) If conduct constituting an offense under this section also</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">constitutes an offense under another section of this code, the actor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">may be prosecuted under either section or both sections.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) The name of a person who is enrolled in a public or private</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">primary or secondary school and involved in an improper relationship</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">with an educator as provided by Subsection (a) may not be released to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the public and is not public information under Chapter 552, Government</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Code.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(d-1) Except as otherwise provided by this subsection, a public</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or private primary or secondary school, or a person or entity that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">operates a public or private primary or secondary school, may not</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">release externally to the general public the name of an employee of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the school who is accused of committing an offense under this section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">until the employee is indicted for the offense. The school, or the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person or entity that operates the school, may release the name of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">accused employee regardless of whether the employee has been indicted</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">for the offense as necessary for the school to:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) report the accusation:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) to the Texas Education Agency, another state</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">agency, or local law enforcement or as otherwise required by law; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) to the school's members or community in accordance</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">with the school's policies or procedures or with the religious law</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">observed by the school; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) conduct an investigation of the accusation.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) In this section, "sexual contact" means the following acts,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if committed with the intent to arouse or gratify the sexual desire of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">any person:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) any touching by an employee of a public or private</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">primary or secondary school of the anus, breast, or any part of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">genitals of:</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -7 -</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) an enrolled person described by Subsection (a)(1)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or (a)(2)(A); or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a student participant described by Subsection</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)(2)(B); or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) any touching of any part of the body of the enrolled</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person or student participant with the anus, breast, or any part of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the genitals of the employee.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 21.15. INVASIVE VISUAL RECORDING.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Female breast" means any portion of the female breast</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">below the top of the areola.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Intimate area" means the naked or clothed genitals,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">pubic area, anus, buttocks, or female breast of a person.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Changing room" means a room or portioned area provided</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">for or primarily used for the changing of clothing and includes</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">dressing rooms, locker rooms, and swimwear changing areas.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(3-a) "Place in which a person has a reasonable expectation</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of privacy" means a place in which a reasonable person would believe</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that the person could disrobe in privacy, without being concerned that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the act of undressing would be photographed or visually recorded by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">another or that a visual image of the person undressing would be</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">broadcasted or transmitted by another. The term includes a bathroom,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">bedroom, and changing room.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) "Promote" has the meaning assigned by Section 43.21.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person commits an offense if, without the other person's</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">consent and with intent to invade the privacy of the other person, the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) photographs or by videotape or other electronic means</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">records, broadcasts, or transmits a visual image of an intimate area</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of another person if the other person has a reasonable expectation</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that the intimate area is not subject to public view;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) photographs or by videotape or other electronic means</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">records, broadcasts, or transmits a visual image of another person in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a place in which a person has a reasonable expectation of privacy; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) knowing the character and content of the photograph,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">recording, broadcast, or transmission, promotes a photograph,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">recording, broadcast, or transmission described by Subdivision (1) or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(2).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under this section is a state jail felony.</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) If conduct that constitutes an offense under this section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">also constitutes an offense under any other law, the actor may be</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">prosecuted under this section or the other law.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) For purposes of Subsection (b)(2), a sign or signs posted</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">indicating that the person is being photographed or that a visual</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">image of the person is being recorded, broadcast, or transmitted is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">not sufficient to establish the person's consent under that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">subdivision.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -8 -</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 21.16. UNLAWFUL DISCLOSURE OR PROMOTION OF INTIMATE VISUAL MATERIAL.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Intimate parts" means the naked genitals, pubic area,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">anus, buttocks, or female nipple of a person.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Promote" means to procure, manufacture, issue, sell,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">give, provide, lend, mail, deliver, transfer, transmit, publish,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">distribute, circulate, disseminate, present, exhibit, or advertise or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to offer or agree to do any of the above.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Sexual conduct" means sexual contact, actual or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">simulated sexual intercourse, deviate sexual intercourse, sexual</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">bestiality, masturbation, or sadomasochistic abuse.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) "Simulated" means the explicit depiction of sexual</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conduct that creates the appearance of actual sexual conduct and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">during which a person engaging in the conduct exhibits any uncovered</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">portion of the breasts, genitals, or buttocks.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) "Visual material" means:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) any film, photograph, videotape, negative, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">slide or any photographic reproduction that contains or incorporates</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">in any manner any film, photograph, videotape, negative, or slide; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) any disk, diskette, or other physical medium, or a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">file in any digital format, that allows an image to be displayed on a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">computer or other video screen and any image transmitted to a computer</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or other video screen by telephone line, cable, satellite</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">transmission, or other method.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person commits an offense if:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) without the effective consent of the depicted person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and with the intent to harm that person, the person discloses visual</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">material depicting another person with the person's intimate parts</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">exposed or engaged in sexual conduct;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) at the time of the disclosure, the person knows or has</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">reason to believe that the visual material was obtained by the person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or created under circumstances in which the depicted person had a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">reasonable expectation that the visual material would remain private;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the disclosure of the visual material causes harm to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the depicted person; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) the disclosure of the visual material reveals the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">identity of the depicted person in any manner, including through:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) any accompanying or subsequent information or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">material related to the visual material; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) information or material provided by a third party</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">in response to the disclosure of the visual material.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) A person commits an offense if the person intentionally</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">threatens to disclose, without the consent of the depicted person,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">visual material depicting another person with the person's intimate</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">parts exposed or engaged in sexual conduct and the actor makes the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">threat to obtain a benefit:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) in return for not making the disclosure; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) in connection with the threatened disclosure.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) A person commits an offense if, knowing the character and</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">content of the visual material, the person promotes visual material</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -9 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">described by Subsection (b) on an Internet website or other forum for</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">publication that is owned or operated by the person.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) It is not a defense to prosecution under this section that</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the depicted person:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) created or consented to the creation of the visual</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">material; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) voluntarily transmitted the visual material to the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) It is an affirmative defense to prosecution under Subsection</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) or (d) that:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the disclosure or promotion is made in the course of:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) lawful and common practices of law enforcement or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">medical treatment;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) reporting unlawful activity; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) a legal proceeding, if the disclosure or promotion</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is permitted or required by law;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the disclosure or promotion consists of visual material</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">depicting in a public or commercial setting only a person's voluntary</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">exposure of:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the person's intimate parts; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the person engaging in sexual conduct; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the actor is an interactive computer service, as</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">defined by 47 U.S.C. Section 230, and the disclosure or promotion</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">consists of visual material provided by another person.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(g) An offense under this section is a state jail felony.</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(h) If conduct that constitutes an offense under this section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">also constitutes an offense under another law, the actor may be</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">prosecuted under this section, the other law, or both.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 21.165. UNLAWFUL PRODUCTION OR DISTRIBUTION OF CERTAIN SEXUALLY EXPLICIT MEDIA.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Deep fake media" means a visual depiction created or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">altered through the use of software, machine learning, artificial</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">intelligence, or any other computer-generated or technological means,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">including by adapting, modifying, manipulating, or altering an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">authentic visual depiction manually or through an automated process,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that appears to a reasonable person to depict a real person,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">indistinguishable from an authentic visual depiction of the real</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person, performing an action that did not occur in reality.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Intimate parts" and "sexual conduct" have the meanings</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">assigned by Section 21.16.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Visual depiction" means a photograph, motion picture</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">film, videotape, digital image or video, or other visual recording.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person commits an offense if, without the effective</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">consent of the person appearing to be depicted, the person knowingly</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">produces or distributes by electronic means deep fake media that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">appears to depict the person:</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -10 -</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) with visible computer-generated intimate parts or with</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the visible intimate parts of another human being as the intimate</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">parts of the person; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) engaging in sexual conduct in which the person did not</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">engage.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(b-1) A person commits an offense if the person intentionally</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">threatens to produce or distribute deep fake media with the intent to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">coerce, extort, harass, or intimidate another person.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(b-2) Consent required by Subsection (b) is valid only if the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person appearing to be depicted knowingly and voluntarily signed a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">written agreement that was drafted in plain language. The agreement</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">must include:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a general description of the deep fake media; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) if applicable, the audiovisual work into which the deep</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">fake media will be incorporated.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under Subsection (b) is a Class A misdemeanor,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">except that the offense is a felony of the third degree if it is shown</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">on the trial of the offense that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the actor has been previously convicted of an offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under this section; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the person appearing to be depicted is younger than 18</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">years of age.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(c-1) An offense under Subsection (b-1) is a Class B</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">misdemeanor, except that the offense is a Class A misdemeanor if it is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">shown on the trial of the offense that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the actor has been previously convicted of an offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under this section; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor threatened to produce or distribute deep fake</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">media appearing to depict a person younger than 18 years of age.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(c-2) It is not a defense to prosecution under this section that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the deep fake media:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) contains a disclaimer stating that the media was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">unauthorized or that the person appearing to be depicted did not</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">participate in the creation or development of the deep fake media; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) indicates, through a label or otherwise, that the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">depiction is not authentic.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(c-3) It is an affirmative defense to prosecution under this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section that the production or distribution of the deep fake media</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">occurs in the course of:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) lawful and common practices of law enforcement;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) reporting unlawful activity; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a legal proceeding, if the production or distribution</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is permitted or required by law.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(c-4) It is an affirmative defense to prosecution under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (b) that the actor:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) is an Internet service provider, cloud service</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">provider, cybersecurity service provider, communication service</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">provider, or telecommunications network that transmits data; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) acted solely in a technical, automatic, or intermediate</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">nature.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -11 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(c-5) It is an affirmative defense to prosecution under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (b) that the actor:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) is a provider or developer of a publicly accessible</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">artificial intelligence application or software that was used in the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">creation of the deep fake media;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) included a prohibition against the creation of deep</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">fake media prohibited by this section in the actor's terms and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conditions or user policies that are required to be acknowledged by a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">user before the user is granted access to the artificial intelligence</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">application or software; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) took affirmative steps to prevent the creation of deep</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">fake media prohibited by this section through technological tools,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">such as:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) training the artificial intelligence application</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or software to identify deep fake media prohibited by this section;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) providing effective reporting tools for deep fake</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">media prohibited by this section;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) filtering deep fake media prohibited by this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section created by the artificial intelligence application or software</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">before the media is shown to a user; and</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) filtering deep fake media prohibited by this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section from the artificial intelligence application or software data</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">set before the data set is used to train the application or software.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) If conduct that constitutes an offense under this section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">also constitutes an offense under another law, the actor may be</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">prosecuted under this section or the other law.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) The court shall order a defendant convicted of an offense</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under this section to make restitution to the victim of the offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">for any psychological, financial, or reputational harm incurred by the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">victim as a result of the offense.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 21.17. VOYEURISM.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense if the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person, with the intent to arouse or gratify the sexual desire of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor, observes, including remotely through the use of electronic</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">means, another person without the other person's consent while the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other person is in a dwelling or structure in which the other person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">has a reasonable expectation of privacy.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) Except as provided by Subsection (c) or (d), an offense</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under this section is a Class A misdemeanor.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under this section is a state jail felony if it</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is shown on the trial of the offense that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the actor has previously been convicted of an offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under this section;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the victim was a child younger than 18 years of age at</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the time of the offense; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the offense was committed in a location that was on the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">premises of a postsecondary educational institution.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) An offense under this section is a felony of the third</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">degree if it is shown on the trial of the offense that:</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -12 -</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the victim was a child younger than 18 years of age at</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the time of the offense; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor has previously been convicted of an offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">punishable under Subsection (c)(2).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) If conduct that constitutes an offense under this section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">also constitutes an offense under any other law, the actor may be</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">prosecuted under this section, the other law, or both.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) In this section, "postsecondary educational institution" and</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">"premises" have the meanings assigned by Section 12.502.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 21.18. SEXUAL COERCION.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Intimate visual material" means the visual material</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">described by Section 21.16(b)(1) or (c).</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Sexual conduct" has the meaning assigned by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">43.25.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person commits an offense if the person intentionally</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">threatens, including by coercion or extortion, to commit an offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under Chapter 43 or Section 20A.02(a)(3), (4), (7), or (8), 21.02, 21.03,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">21.08, 21.11, 21.12, 21.15, 21.16, 21.17, 22.011, or 22.021 to obtain, in return</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">for not committing the threatened offense or in connection with the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">threatened offense, any of the following benefits:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) intimate visual material;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) an act involving sexual conduct causing arousal or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">gratification; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a monetary benefit or other benefit of value.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) A person commits an offense if the person intentionally</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">threatens, including by coercion or extortion, to commit an offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under Chapter 19 or 20 or Section 20A.02(a)(1), (2), (5), or (6) to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">obtain, in return for not committing the threatened offense or in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">connection with the threatened offense, either of the following</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">benefits:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) intimate visual material; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) an act involving sexual conduct causing arousal or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">gratification.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) This section applies to a threat regardless of how that</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">threat is communicated, including a threat transmitted through e-mail</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or an Internet website, social media account, or chat room and a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">threat made by other electronic or technological means.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) An offense under this section is a state jail felony, except</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that the offense is a felony of the third degree if it is shown on the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">trial of the offense that the defendant has previously been convicted</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of an offense under this section.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 21.19. UNLAWFUL ELECTRONIC TRANSMISSION OF SEXUALLY EXPLICIT VISUAL MATERIAL.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) In this section, "intimate parts,"</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">"sexual conduct," and "visual material" have the meanings assigned by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 21.16.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -13 -</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person commits an offense if the person knowingly</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">transmits by electronic means visual material that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) depicts:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) any person engaging in sexual conduct or with the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person's intimate parts exposed; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) covered genitals of a male person that are in a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">discernibly turgid state; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) is not sent at the request of or with the express</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">consent of the recipient.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under this section is a Class C misdemeanor.</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) If conduct that constitutes an offense under this section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">also constitutes an offense under any other law, the actor may be</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">prosecuted under this section or the other law.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -14 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">PENAL CODE</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">TITLE 5. OFFENSES AGAINST THE PERSON</p>
</div>
`
    },
    
    {
        category: 'Penal Code',
        title: "Chapter 22 - Assaultive Offenses",
        content: `
<h1 style="color: #4fc3f7; font-size: 32px; margin-bottom: 15px;">Chapter 22</h1>
<h2 style="color: #b0b0b0; font-size: 22px; font-weight: normal; margin-bottom: 30px;">Assaultive Offenses</h2>

<div style="background: linear-gradient(to right, rgba(79, 195, 247, 0.25), rgba(79, 195, 247, 0.05)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4fc3f7; border-radius: 5px;">
    <h3 style="color: #4fc3f7; margin: 0 0 10px 0; font-size: 18px;">📖 Quick Summary</h3>
    <p style="font-size: 17px; line-height: 1.7; margin: 0; color: #e0e0e0;">Assault, aggravated assault, injury</p>
</div>

<div style="background: linear-gradient(to right, rgba(255, 193, 7, 0.2), rgba(255, 193, 7, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #ffc107; border-radius: 5px;">
    <h3 style="color: #ffc107; margin: 0 0 15px 0; font-size: 18px;">⚡ Must Know</h3>
    <ul style="margin: 0; padding-left: 20px; color: #e0e0e0;">
        <li style="margin: 8px 0; font-size: 16px;">Assault = injury/threat</li>
        <li style="margin: 8px 0; font-size: 16px;">Aggravated = serious injury or weapon</li>
    </ul>
</div>

<div style="background: linear-gradient(to right, rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4caf50; border-radius: 5px;">
    <h3 style="color: #4caf50; margin: 0 0 10px 0; font-size: 18px;">🔑 Key Terms</h3>
    <p style="margin: 0; font-size: 15px;"><strong style='color: #4caf50;'>Bodily injury</strong>, <strong style='color: #4caf50;'>Deadly weapon</strong></p>
</div>

<hr style="border: none; border-top: 2px solid #444; margin: 35px 0;">

<h2 style="color: #4fc3f7; font-size: 24px; margin-bottom: 25px;">📋 Sections</h2>


<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 22.01. ASSAULT.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">A person commits an offense if the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) intentionally, knowingly, or recklessly causes bodily</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">injury to another, including the person's spouse;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) intentionally or knowingly threatens another with imminent</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">bodily injury, including the person's spouse; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) intentionally or knowingly causes physical contact with</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">another when the person knows or should reasonably believe that the other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">will regard the contact as offensive or provocative.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under Subsection (a)(1) is a Class A misdemeanor,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">except that the offense is a felony of the third degree if the offense is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">committed against:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a person the actor knows is a public servant while the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">public servant is lawfully discharging an official duty, or in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">retaliation or on account of an exercise of official power or performance</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of an official duty as a public servant;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a person whose relationship to or association with the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">defendant is described by Section 71.0021(b), 71.003, or 71.005, Family</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Code, if:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) it is shown on the trial of the offense that the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">defendant has been previously convicted of an offense that was committed:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) against a person whose relationship to or</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">association with the defendant is described by Section 71.0021(b),</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">71.003, or 71.005, Family Code; and</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) under:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) this chapter, Chapter 19, or Section 20.03,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">20.04, 21.11, or 25.11;</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) Section 25.07, if the applicable violation</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">was based on the commission of family violence as described by Subsection</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)(1) of that section; or</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) Section 25.072, if any of the applicable</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">violations were based on the commission of family violence as described</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by Section 25.07(a)(1); or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the offense is committed by intentionally, knowingly,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or recklessly impeding the normal breathing or circulation of the blood</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the person by applying pressure to the person's throat or neck or by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">blocking the person's nose or mouth;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a person who contracts with government to perform a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">service in a facility described by Section 1.07(a)(14), Penal Code, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 51.02(13) or (14), Family Code, or an employee of that person:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) while the person or employee is engaged in performing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a service within the scope of the contract, if the actor knows the person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or employee is authorized by government to provide the service; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) in retaliation for or on account of the person's or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">employee's performance of a service within the scope of the contract;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) a person the actor knows is a security officer while the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">officer is performing a duty as a security officer;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) a person the actor knows is emergency services personnel</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">while the person is providing emergency services;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page - 1 -</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) a person the actor knows is a process server while the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person is performing a duty as a process server;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) a pregnant individual to force the individual to have an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">abortion;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(8) a person the actor knows is pregnant at the time of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(9) a person the actor knows is hospital personnel while the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person is located on hospital property, including all land and buildings</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">owned or leased by the hospital.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(b-1) Notwithstanding Subsections (b) and (c), an offense under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (a) is a felony of the third degree if the offense is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">committed:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) by an actor who is committed to a civil commitment</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">facility; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) against:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) a person the actor knows is an officer or employee of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the Texas Civil Commitment Office:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) while the officer or employee is lawfully</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">discharging an official duty; or</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) in retaliation for or on account of an exercise</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of official power or performance of an official duty by the officer or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">employee; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a person the actor knows is contracting with the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">state to perform a service in a civil commitment facility or an employee</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of that person:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) while the person or employee is engaged in</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">performing a service within the scope of the contract; or</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) in retaliation for or on account of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person's or employee's performance of a service within the scope of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">contract.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(b-2) Notwithstanding</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(b)(1),</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (a)(1) is a felony of the second degree if the offense is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">committed against a person the actor knows is a peace officer or judge</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">while the officer or judge is lawfully discharging an official duty or in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">retaliation or on account of an exercise of official power or performance</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of an official duty as a peace officer or judge.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(b-3) Notwithstanding</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(b)(2),</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (a)(1) is a felony of the second degree if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the offense is committed against a person whose</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">relationship to or association with the defendant is described by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">71.0021(b), 71.003, or 71.005, Family Code;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) it is shown on the trial of the offense that the defendant</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">has been previously convicted of an offense that was committed:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) against a person whose relationship to or association</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">with the defendant is described by Section 71.0021(b), 71.003, or 71.005,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Family Code; and</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) under:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) this chapter, Chapter 19, or Section 20.03,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">20.04, 21.11, or 25.11;</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) Section 25.07, if the applicable violation was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">based on the commission of family violence as described by Subsection</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -2 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)(1) of that section; or</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(iii) Section 25.072, if any of the applicable</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">violations were based on the commission of family violence as described</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by Section 25.07(a)(1); and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the offense is committed by intentionally, knowingly, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">recklessly impeding the normal breathing or circulation of the blood of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the person by applying pressure to the person's throat or neck or by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">blocking the person's nose or mouth.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(b-4) Notwithstanding Subsection (b), an offense under Subsection</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)(1) is a felony of the third degree if it is shown on the trial of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense that the actor committed the offense in the course of committing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an offense under Section 20.05(a)(2).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under Subsection (a)(2) or (3) is a Class C</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">misdemeanor, except that the offense is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a Class A misdemeanor if the offense is committed under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (a)(3) against an elderly individual or disabled individual,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">as those terms are defined by Section 22.04;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a Class B misdemeanor if the offense is committed by a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person who is not a sports participant against a person the actor knows</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is a sports participant either:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) while the participant is performing duties or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">responsibilities in the participant's capacity as a sports participant;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) in retaliation for or on account of the participant's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">performance of a duty or responsibility within the participant's capacity</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">as a sports participant; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a Class A misdemeanor if the offense is committed against</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a pregnant individual to force the individual to have an abortion.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) For purposes of Subsection (b), the actor is presumed to have</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">known the person assaulted was a public servant, a security officer, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">emergency services personnel if the person was wearing a distinctive</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">uniform or badge indicating the person's employment as a public servant</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or status as a security officer or emergency services personnel.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Emergency services personnel" includes firefighters,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">emergency medical services personnel as defined by Section 773.003,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Health and Safety Code, emergency room personnel, and other individuals</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">who, in the course and scope of employment or as a volunteer, provide</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">services for the benefit of the general public during emergency</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">situations.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(1-a) "Hospital personnel" includes nurses, physicians,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">physician assistants, maintenance or janitorial staff, receptionists, and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other individuals who are employed by or work in a facility that is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">licensed as a general hospital or special hospital, as those terms are</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">defined by Section 241.003, Health and Safety Code, including a hospital</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">maintained or operated by the state.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Process server" has the meaning assigned by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">156.001, Government Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Security officer" means a commissioned security officer</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">as defined by Section 1702.002, Occupations Code, or a noncommissioned</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">security officer registered under Section 1702.221, Occupations Code.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -3 -</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) "Sports participant" means a person who participates in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">any</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">official</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">capacity</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">with</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">respect</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">interscholastic,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">intercollegiate, or other organized amateur or professional athletic</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">competition and includes an athlete, referee, umpire, linesman, coach,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">instructor, administrator, or staff member.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) For the purposes of Subsections (b)(2)(A) and (b-3)(2):</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a defendant has been previously convicted of an offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">listed in those subsections committed against a person whose relationship</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to or association with the defendant is described by Section 71.0021(b),</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">71.003, or 71.005, Family Code, if the defendant was adjudged guilty of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the offense or entered a plea of guilty or nolo contendere in return for</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a grant of deferred adjudication, regardless of whether the sentence for</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the offense was ever imposed or whether the sentence was probated and the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">defendant was subsequently discharged from community supervision; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a conviction under the laws of another state for an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense containing elements that are substantially similar to the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">elements of an offense listed in those subsections is a conviction of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense listed.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(g) If conduct constituting an offense under this section also</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">constitutes an offense under another section of this code, the actor may</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">be prosecuted under either section or both sections.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 22.011. SEXUAL ASSAULT.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense if:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the person intentionally or knowingly:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) causes the penetration of the anus or sexual organ of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">another person by any means, without that person's consent;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) causes the penetration of the mouth of another person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by the sexual organ of the actor, without that person's consent; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) causes the sexual organ of another person, without</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that person's consent, to contact or penetrate the mouth, anus, or sexual</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">organ of another person, including the actor; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) regardless of whether the person knows the age of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">child at the time of the offense, the person intentionally or knowingly:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) causes the penetration of the anus or sexual organ of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a child by any means;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) causes the penetration of the mouth of a child by the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">sexual organ of the actor;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) causes the sexual organ of a child to contact or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">penetrate the mouth, anus, or sexual organ of another person, including</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the actor;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) causes the anus of a child to contact the mouth,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">anus, or sexual organ of another person, including the actor; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(E) causes the mouth of a child to contact the anus or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">sexual organ of another person, including the actor.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A sexual assault under Subsection (a)(1) is without the consent</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the other person if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the actor compels the other person to submit or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">participate by the use of physical force, violence, or coercion;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor compels the other person to submit or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">participate by threatening to use force or violence against the other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person or to cause harm to the other person, and the other person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -4 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">believes that the actor has the present ability to execute the threat;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the other person has not consented and the actor knows the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other person is unconscious or physically unable to resist;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) the actor knows that as a result of mental disease or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">defect the other person is at the time of the sexual assault incapable</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">either of appraising the nature of the act or of resisting it;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) the other person has not consented and the actor knows the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other person is unaware that the sexual assault is occurring;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) the actor has intentionally impaired the other person's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">power to appraise or control the other person's conduct by administering</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">any substance without the other person's knowledge;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) the actor compels the other person to submit or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">participate by threatening to use force or violence against any person,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and the other person believes that the actor has the ability to execute</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the threat;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(8) the actor is a public servant who coerces the other person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to submit or participate;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(9) the actor is a mental health services provider or a health</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">care services provider who causes the other person, who is a patient or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">former patient of the actor, to submit or participate by exploiting the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other person's emotional dependency on the actor;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(10) the actor is a clergyman who causes the other person to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">submit or participate by exploiting the other person's emotional</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">dependency on the clergyman in the clergyman's professional character as</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">spiritual adviser;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(11) the actor is an employee of a facility where the other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person is a resident, unless the employee and resident are formally or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">informally married to each other under Chapter 2, Family Code;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(12) the actor is a health care services provider who, in the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">course of performing an assisted reproduction procedure on the other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person, uses human reproductive material from a donor knowing that the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other person has not expressly consented to the use of material from that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">donor;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(13) the actor is a coach or tutor who causes the other person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to submit or participate by using the actor's power or influence to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">exploit the other person's dependency on the actor; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(14) the actor is a caregiver hired to assist the other person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">with activities of daily life and causes the other person to submit or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">participate by exploiting the other person's dependency on the actor.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Child" means a person younger than 17 years of age.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Spouse" means a person who is legally married to another.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Health care services provider" means:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) a physician licensed under Subtitle B, Title 3,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Occupations Code;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">chiropractor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">licensed</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Chapter</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">201,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Occupations Code;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) a physical therapist licensed under Chapter 453,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Occupations Code;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) a physician assistant licensed under Chapter 204,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Occupations Code; or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -5 -</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(E) a registered nurse, a vocational nurse, or an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">advanced practice nurse licensed under Chapter 301, Occupations Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) "Mental health services provider" means an individual,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">licensed or unlicensed, who performs or purports to perform mental health</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">services, including a:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) licensed social worker as defined by Section 505.002,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Occupations Code;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) chemical dependency counselor as defined by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">504.001, Occupations Code;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) licensed professional counselor as defined by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">503.002, Occupations Code;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) licensed marriage and family therapist as defined by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 502.002, Occupations Code;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(E) member of the clergy;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(F) psychologist offering psychological services as</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">defined by Section 501.003, Occupations Code; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(G) special officer for mental health assignment</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">certified under Section 1701.404, Occupations Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) "Employee of a facility" means a person who is an employee</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of a facility defined by Section 250.001, Health and Safety Code, or any</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other person who provides services for a facility for compensation,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">including a contract laborer.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) "Assisted reproduction" and "donor" have the meanings</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">assigned by Section 160.102, Family Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) "Human reproductive material" means:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) a human spermatozoon or ovum; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a human organism at any stage of development from</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">fertilized ovum to embryo.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) It is a defense to prosecution under Subsection (a)(2) that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conduct consisted of medical care for the child and did not include any</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">contact between the anus or sexual organ of the child and the mouth,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">anus, or sexual organ of the actor or a third party.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) It is an affirmative defense to prosecution under Subsection</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)(2):</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) that the actor was the spouse of the child at the time of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the offense; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) that:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the actor was not more than three years older than</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the victim and at the time of the offense:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) was not required under Chapter 62, Code of</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Criminal Procedure, to register for life as a sex offender; or</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) was not a person who under Chapter 62, Code of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Criminal Procedure, had a reportable conviction or adjudication for an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense under this section; and</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the victim:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) was a child of 14 years of age or older; and</strong></p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) was not:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) a person whom the actor was prohibited from</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">marrying or purporting to marry or with whom the actor was prohibited</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">from living under the appearance of being married under Section 25.01; or</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) a person with whom the actor was prohibited</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -6 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">from engaging in sexual intercourse or deviate sexual intercourse under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 25.02.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) An offense under this section is a felony of the second degree,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">except that an offense under this section is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a felony of the first degree if the victim was:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) a person whom the actor was prohibited from marrying</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or purporting to marry or with whom the actor was prohibited from living</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under the appearance of being married under Section 25.01; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a person with whom the actor was prohibited from</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">engaging in sexual intercourse or deviate sexual intercourse under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 25.02; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a state jail felony if the offense is committed under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (a)(1) and the actor has not received express consent as</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">described by Subsection (b)(12).</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 22.012. INDECENT ASSAULT.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if, without the other person's consent and with the intent to arouse or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">gratify the sexual desire of any person, the person:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) touches the anus, breast, or any part of the genitals of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">another person;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) touches another person with the anus, breast, or any part</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the genitals of any person;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) exposes or attempts to expose another person's genitals,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">pubic area, anus, buttocks, or female areola; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) causes another person to contact the blood, seminal fluid,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">vaginal fluid, saliva, urine, or feces of any person.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a Class A misdemeanor, except</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that the offense is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a state jail felony if it is shown on the trial of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense that:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the defendant has been previously convicted of an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense under this section, other than an offense punishable under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Paragraph (B); or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the defendant is a health care services provider or a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">mental health services provider and the act is:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) committed during the course of providing a</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">treatment or service to the victim; and</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) beyond the scope of generally accepted</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">practices for the treatment or service; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a felony of the third degree if it is shown on the trial</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the offense that the defendant has been previously convicted of an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense under this section that is punishable under Subdivision (1)(B).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) If conduct that constitutes an offense under this section also</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">constitutes an offense under another law, the actor may be prosecuted</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under this section, the other law, or both.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) In this section, "health care services provider" and "mental</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">health services provider" have the meanings assigned by Section 22.011.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 22.02. AGGRAVATED ASSAULT.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if the person commits assault as defined in</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 22.01</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and the person:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) causes serious bodily injury to another, including the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -7 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person's spouse; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) uses or exhibits a deadly weapon during the commission of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the assault.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a felony of the second degree,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">except that the offense is a felony of the first degree if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the actor uses a deadly weapon during the commission of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the assault and causes:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) serious bodily injury to a person whose relationship</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to or association with the defendant is described by Section 71.0021(b),</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">71.003, or 71.005, Family Code; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a traumatic brain or spine injury to another that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">results in a persistent vegetative state or irreversible paralysis;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) regardless of whether the offense is committed under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (a)(1) or (a)(2), the offense is committed:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) by a public servant acting under color of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">servant's office or employment;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) against a person the actor knows is a public servant</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">while the public servant is lawfully discharging an official duty, or in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">retaliation or on account of an exercise of official power or performance</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of an official duty as a public servant;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) in retaliation against or on account of the service</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of another as a witness, prospective witness, informant, or person who</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">has reported the occurrence of a crime;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) against a person the actor knows is a process server</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">while the person is performing a duty as a process server; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(E) against a person the actor knows is a security</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">officer while the officer is performing a duty as a security officer;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the actor is in a motor vehicle, as defined by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">501.002, Transportation Code, and:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) knowingly discharges a firearm at or in the direction</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of a habitation, building, or vehicle;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) is reckless as to whether the habitation, building,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or vehicle is occupied; and</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) in discharging the firearm, causes serious bodily</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">injury to any person; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) the actor commits the assault as part of a mass shooting.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) The actor is presumed to have known the person assaulted was a</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">public servant or a security officer if the person was wearing a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">distinctive uniform or badge indicating the person's employment as a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">public servant or status as a security officer.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Process server" has the meaning assigned by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">156.001, Government Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Security officer" means a commissioned security officer</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">as defined by Section 1702.002, Occupations Code, or a noncommissioned</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">security officer registered under Section 1702.221, Occupations Code.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 22.021. AGGRAVATED SEXUAL ASSAULT.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) if the person:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) intentionally or knowingly:</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -8 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">A person commits an</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) causes the penetration of the anus or sexual</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">organ of another person by any means, without that person's consent;</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) causes the penetration of the mouth of another</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person by the sexual organ of the actor, without that person's consent;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(iii) causes the sexual organ of another person,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">without that person's consent, to contact or penetrate the mouth, anus,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or sexual organ of another person, including the actor; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) regardless of whether the person knows the age of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">child at the time of the offense, intentionally or knowingly:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) causes the penetration of the anus or sexual</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">organ of a child by any means;</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) causes the penetration of the mouth of a child</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by the sexual organ of the actor;</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(iii) causes the sexual organ of a child to contact</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or penetrate the mouth, anus, or sexual organ of another person,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">including the actor;</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(iv) causes the anus of a child to contact the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">mouth, anus, or sexual organ of another person, including the actor; or</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(v) causes the mouth of a child to contact the anus</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or sexual organ of another person, including the actor; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) if:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the person:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) causes serious bodily injury or attempts to</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">cause the death of the victim or another person in the course of the same</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">criminal episode;</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) by acts or words places the victim in fear that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">any person will become the victim of an offense under Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">20A.02(a)(3), (4), (7), or (8) or that death, serious bodily injury, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">kidnapping will be imminently inflicted on any person;</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(iii) by acts or words occurring in the presence of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the victim threatens to cause any person to become the victim of an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense under Section 20A.02(a)(3), (4), (7), or (8) or to cause the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">death, serious bodily injury, or kidnapping of any person;</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(iv) uses or exhibits a deadly weapon in the course</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the same criminal episode;</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(v) acts in concert with another who engages in</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conduct described by Subdivision (1) directed toward the same victim and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">occurring during the course of the same criminal episode; or</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(vi) with the intent of facilitating the commission</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the offense, administers or provides to the victim of the offense any</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">substance capable of impairing the victim's ability to appraise the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">nature of the act or to resist the act;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the victim is younger than 14 years of age,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">regardless of whether the person knows the age of the victim at the time</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the offense; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) the victim is an elderly individual or a disabled</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">individual.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Child" has the meaning assigned by Section 22.011(c).</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Elderly individual" has the meaning assigned by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -9 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">22.04(c).</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Disabled individual" means a person older than 13 years</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of age who by reason of age or physical or mental disease, defect, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">injury is substantially unable to protect the person's self from harm or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to provide food, shelter, or medical care for the person's self.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An aggravated sexual assault under this section is without the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">consent of the other person if the aggravated sexual assault occurs under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the same circumstances listed in Section 22.011(b).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) The defense provided by Section 22.011(d) applies to this</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) An offense under this section is a felony of the first degree.</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) The minimum term of imprisonment for an offense under this</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section is increased to 25 years if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the victim of the offense is younger than six years of age</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">at the time the offense is committed; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the victim of the offense is younger than 14 years of age</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">at the time the offense is committed and the actor commits the offense in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a manner described by Subsection (a)(2)(A).</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 22.04. INJURY TO A CHILD, ELDERLY INDIVIDUAL, OR DISABLED INDIVIDUAL.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">A person commits an offense if he intentionally,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">knowingly, recklessly, or with criminal negligence, by act or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">intentionally, knowingly, or recklessly by omission, causes to a child,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">elderly individual, or disabled individual:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) serious bodily injury;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) serious mental deficiency, impairment, or injury; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) bodily injury.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a-1) A person commits an offense if the person is an owner,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">operator, or employee of a group home, nursing facility, assisted living</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">facility, boarding home facility, intermediate care facility for persons</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">with an intellectual or developmental disability, or other institutional</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">care facility and the person intentionally, knowingly, recklessly, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">with criminal negligence by omission causes to a child, elderly</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">individual, or disabled individual who is a resident of that group home</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or facility:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) serious bodily injury;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) serious mental deficiency, impairment, or injury; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) bodily injury.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An omission that causes a condition described by Subsection</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)(1), (2), or (3) or (a-1)(1), (2), or (3) is conduct constituting an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense under this section if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the actor has a legal or statutory duty to act; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor has assumed care, custody, or control of a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">child, elderly individual, or disabled individual.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Child" means a person 14 years of age or younger.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Elderly individual" means a person 65 years of age or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">older.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Disabled individual" means a person:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) with one or more of the following:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) autism spectrum disorder, as defined by Section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -10 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">1355.001, Insurance Code;</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) developmental disability, as defined by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">112.042, Human Resources Code;</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(iii) intellectual disability, as defined by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">591.003, Health and Safety Code;</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(iv) severe emotional disturbance, as defined by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 261.001, Family Code;</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(v) traumatic brain injury, as defined by Section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">92.001, Health and Safety Code; or</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(vi) mental illness, as defined by Section 571.003,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Health and Safety Code; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) who otherwise by reason of age or physical or mental</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">disease, defect, or injury is substantially unable to protect the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person's self from harm or to provide food, shelter, or medical care for</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the person's self.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) Repealed by Acts 2011, 82nd Leg., R.S., Ch. 620, Sec. 11,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">eff. September 1, 2011.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) For purposes of an omission that causes a condition described</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by Subsection (a)(1), (2), or (3), the actor has assumed care, custody,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or control if the actor has by act, words, or course of conduct acted so</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">as to cause a reasonable person to conclude that the actor has accepted</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">responsibility for protection, food, shelter, or medical care for a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">child, elderly individual, or disabled individual. For purposes of an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">omission that causes a condition described by Subsection (a-1)(1), (2),</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or (3), the actor acting during the actor's capacity as owner, operator,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or employee of a group home or facility described by Subsection (a-1) is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">considered to have accepted responsibility for protection, food, shelter,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or medical care for the child, elderly individual, or disabled individual</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">who is a resident of the group home or facility.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) An offense under Subsection (a)(1) or (2) or (a-1)(1) or (2) is</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a felony of the first degree when the conduct is committed intentionally</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or knowingly. When the conduct is engaged in recklessly, the offense is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a felony of the second degree.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) An offense under Subsection (a)(3) or (a-1)(3) is a felony of</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the third degree when the conduct is committed intentionally or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">knowingly, except that an offense under Subsection (a)(3) is a felony of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the second degree when the conduct is committed intentionally or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">knowingly and the victim is a disabled individual residing in a center,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">as defined by Section 555.001, Health and Safety Code, or in a facility</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">licensed under Chapter 252, Health and Safety Code, and the actor is an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">employee of the center or facility whose employment involved providing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">direct care for the victim. When the conduct is engaged in recklessly,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the offense is a state jail felony.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(g) An offense under Subsection (a) is a state jail felony when the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person acts with criminal negligence. An offense under Subsection (a-1)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is a state jail felony when the person, with criminal negligence and by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">omission, causes a condition described by Subsection (a-1)(1), (2), or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(3).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(h) A person who is subject to prosecution under both this section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and another section of this code may be prosecuted under either or both</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">sections. Section 3.04 does not apply to criminal episodes prosecuted</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -11 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under both this section and another section of this code. If a criminal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">episode is prosecuted under both this section and another section of this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">code and sentences are assessed for convictions under both sections, the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">sentences shall run concurrently.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) It is an affirmative defense to prosecution under Subsection</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(b)(2) that before the offense the actor:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) notified in person the child, elderly individual, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">disabled individual that the actor would no longer provide the applicable</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">care described by Subsection (d), and notified in writing the parents or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a person, other than the actor, acting in loco parentis to the child,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">elderly individual, or disabled individual that the actor would no longer</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">provide the applicable care described by Subsection (d); or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) notified in writing the Department of Family and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Protective Services that the actor would no longer provide the applicable</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">care described by Subsection (d).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(j) Written notification under Subsection (i)(2) or (i)(3) is not</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">effective unless it contains the name and address of the actor, the name</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and address of the child, elderly individual, or disabled individual, the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">type of care provided by the actor, and the date the care was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">discontinued.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(k) It is a defense to prosecution under this section that the act</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or omission consisted of:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) reasonable medical care occurring under the direction of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or by a licensed physician; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) emergency medical care administered in good faith and with</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">reasonable care by a person not licensed in the healing arts.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(l) It is an affirmative defense to prosecution under this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) that the act or omission was based on treatment in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">accordance with the tenets and practices of a recognized religious method</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of healing with a generally accepted record of efficacy;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) for a person charged with an act of omission causing to a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">child, elderly individual, or disabled individual a condition described</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by Subsection (a)(1), (2), or (3) that:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) there is no evidence that, on the date prior to the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense charged, the defendant was aware of an incident of injury to the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">child, elderly individual, or disabled individual and failed to report</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the incident; and</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the person:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) was a victim of family violence, as that term is</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">defined by Section 71.004, Family Code, committed by a person who is also</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">charged with an offense against the child, elderly individual, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">disabled individual under this section or any other section of this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">title;</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) did not cause a condition described by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (a)(1), (2), or (3); and</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(iii) did not reasonably believe at the time of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">omission that an effort to prevent the person also charged with an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense against the child, elderly individual, or disabled individual</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">from committing the offense would have an effect; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) that:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the actor was not more than three years older than</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -12 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the victim at the time of the offense; and</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the victim was a nondisabled or disabled child at the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">time of the offense.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(m) It is an affirmative defense to prosecution under Subsections</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)(1), (2), and (3) for injury to a disabled individual that the person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">did not know and could not reasonably have known that the individual was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a disabled individual, as defined by Subsection (c), at the time of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 22.041. ABANDONING OR ENDANGERING A CHILD, ELDERLY INDIVIDUAL, OR DISABLED INDIVIDUAL.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Abandon" means to leave in any place without providing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">reasonable and necessary care a child, elderly individual, or disabled</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">individual under circumstances under which no reasonable, similarly</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">situated person would leave a child or individual of that age and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">ability.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Child," "elderly individual," and "disabled individual"</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">have the meanings assigned by Section 22.04.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person commits an offense if the person, having custody,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">care, or control of a child, elderly individual, or disabled individual,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">intentionally abandons the child or individual in any place under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">circumstances that expose the child or individual to an unreasonable risk</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of harm.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) A person commits an offense if the person intentionally,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">knowingly, recklessly, or with criminal negligence, by act or omission,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">engages in conduct that places a child, elderly individual, or disabled</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">individual in imminent danger of death, bodily injury, or physical or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">mental impairment.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(c-1) For purposes of Subsection (c), it is presumed that a person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">engaged in conduct that places a child, elderly individual, or disabled</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">individual in imminent danger of death, bodily injury, or physical or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">mental impairment if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the person manufactured, possessed, or in any way</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">introduced into the body of any person the controlled substance</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">methamphetamine in the presence of the child, elderly individual, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">disabled individual;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the person's conduct related to the proximity or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">accessibility of the controlled substance methamphetamine to the child,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">elderly individual, or disabled individual and an analysis of a specimen</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the child's or individual's blood, urine, or other bodily substance</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">indicates the presence of methamphetamine in the body of the child or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">individual; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the person injected, ingested, inhaled, or otherwise</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">introduced a controlled substance listed in Penalty Group 1, Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">481.102, Health and Safety Code, or Penalty Group 1-B, Section 481.1022,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Health and Safety Code, into the human body when the person was not in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">lawful possession of the substance as defined by Section 481.002(24) of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that code.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) Except as provided by Subsection (e), an offense under</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (b) is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a state jail felony if the actor abandoned the child,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -13 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">elderly individual, or disabled individual with intent to return for the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">child or individual; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a felony of the third degree if the actor abandoned the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">child, elderly individual, or disabled individual without intent to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">return for the child or individual.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) An offense under Subsection (b) is a felony of the second</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">degree if the actor abandons the child, elderly individual, or disabled</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">individual under circumstances that a reasonable person would believe</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">would place the child or individual in imminent danger of death, bodily</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">injury, or physical or mental impairment.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) An offense under Subsection (c) is a state jail felony.</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(g) It is a defense to prosecution under Subsection (c) that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">act or omission enables the child, elderly individual, or disabled</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">individual to practice for or participate in an organized athletic event</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and that appropriate safety equipment and procedures are employed in the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">event.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(h) It is an exception to the application of this section for</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">abandoning or endangering a child that the actor voluntarily delivered</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the child to a designated emergency infant care provider under Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">262.302, Family Code.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 22.05. DEADLY CONDUCT.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense if he</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">recklessly engages in conduct that places another in imminent danger of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">serious bodily injury.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person commits an offense if he knowingly discharges a</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">firearm at or in the direction of:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) one or more individuals; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a habitation, building, or vehicle and is reckless as to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">whether the habitation, building, or vehicle is occupied.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) Recklessness and danger are presumed if the actor knowingly</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">pointed a firearm at or in the direction of another whether or not the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor believed the firearm to be loaded.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) For purposes of this section, "building," "habitation," and</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">"vehicle" have the meanings assigned those terms by Section 30.01.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) An offense under Subsection (a) is a Class A misdemeanor. An</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense under Subsection (b) is a felony of the third degree.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 22.06. CONSENT AS DEFENSE TO ASSAULTIVE CONDUCT.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) The</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">victim's effective consent or the actor's reasonable belief that the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">victim consented to the actor's conduct is a defense to prosecution under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 22.01 (Assault), 22.02 (Aggravated Assault), or 22.05 (Deadly</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Conduct) if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the conduct did not threaten or inflict serious bodily</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">injury; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the victim knew the conduct was a risk of:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) his occupation;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) recognized medical treatment; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) a scientific experiment conducted by recognized</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">methods.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) The defense to prosecution provided by Subsection (a) is not</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">available to a defendant who commits an offense described by Subsection</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -14 -</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) as a condition of the defendant's or the victim's initiation or</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">continued membership in a criminal street gang, as defined by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">71.01.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 22.07. TERRORISTIC THREAT.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if he threatens to commit any offense involving violence to any person or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property with intent to:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) cause a reaction of any type to his threat by an official</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or volunteer agency organized to deal with emergencies;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) place any person in fear of imminent serious bodily</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">injury;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) prevent or interrupt the occupation or use of a building,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">room, place of assembly, place to which the public has access, place of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">employment or occupation, aircraft, automobile, or other form of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conveyance, or other public place;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) cause impairment or interruption of public communications,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">public transportation, public water, gas, or power supply or other public</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">service;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) place the public or a substantial group of the public in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">fear of serious bodily injury; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) influence the conduct or activities of a branch or agency</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the federal government, the state, or a political subdivision of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">state.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under Subsection (a)(1) is a Class B misdemeanor.</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under Subsection (a)(2) is a Class B misdemeanor,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">except that the offense is a Class A misdemeanor if the offense:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) is committed against a member of the person's family or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">household or otherwise constitutes family violence; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) is committed against a public servant.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(c-1) Notwithstanding</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(c)(2),</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (a)(2) is a state jail felony if the offense is committed</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">against a person the actor knows is a peace officer or judge.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) An offense under Subsection (a)(3) is a Class A misdemeanor,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">unless the actor causes pecuniary loss of $1,500 or more to the owner of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the building, room, place, or conveyance, in which event the offense is a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">state jail felony.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) An offense under Subsection (a)(4), (a)(5), or (a)(6) is a</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">felony of the third degree.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Family" has the meaning assigned by Section 71.003,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Family Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Family violence" has the meaning assigned by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">71.004, Family Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Household" has the meaning assigned by Section 71.005,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Family Code.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(g) For purposes of Subsection (d), the amount of pecuniary loss is</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the amount of economic loss suffered by the owner of the building, room,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">place, or conveyance as a result of the prevention or interruption of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">occupation or use of the building, room, place, or conveyance.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 22.08. AIDING SUICIDE.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -15 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">A person commits an offense if,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">with intent to promote or assist the commission of suicide by another, he</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">aids or attempts to aid the other to commit or attempt to commit suicide.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a Class C misdemeanor unless</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the actor's conduct causes suicide or attempted suicide that results in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">serious bodily injury, in which event the offense is a state jail felony.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 22.09. TAMPERING WITH CONSUMER PRODUCT.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Consumer Product" means any product offered for sale to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or for consumption by the public and includes "food" and "drugs" as those</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">terms are defined in Section 431.002, Health and Safety Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Tamper" means to alter or add a foreign substance to a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">consumer product to make it probable that the consumer product will cause</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">serious bodily injury.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person commits an offense if he knowingly or intentionally</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">tampers with a consumer product knowing that the consumer product will be</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offered for sale to the public or as a gift to another.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) A person commits an offense if he knowingly or intentionally</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">threatens to tamper with a consumer product with the intent to cause</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">fear, to affect the sale of the consumer product, or to cause bodily</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">injury to any person.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) An offense under Subsection (b) is a felony of the second</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">degree unless a person suffers serious bodily injury, in which event it</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is a felony of the first degree. An offense under Subsection (c) is a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">felony of the third degree.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 22.10. LEAVING A CHILD IN A VEHICLE.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense if he intentionally or knowingly leaves a child in a motor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">vehicle for longer than five minutes, knowing that the child is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) younger than seven years of age; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) not attended by an individual in the vehicle who is 14</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">years of age or older.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a Class C misdemeanor.</strong></p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 22.11. HARASSMENT BY PERSONS IN CERTAIN FACILITIES; HARASSMENT OF PUBLIC SERVANT.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense if, with the intent</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to assault, harass, or alarm, the person:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) while imprisoned or confined in a correctional or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">detention facility, causes another person to contact the blood, seminal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">fluid, vaginal fluid, saliva, urine, or feces of the actor, any other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person, or an animal;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) while committed to a civil commitment facility, causes:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) an officer or employee of the Texas Civil Commitment</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Office to contact the blood, seminal fluid, vaginal fluid, saliva, urine,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or feces of the actor, any other person, or an animal:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) while the officer or employee is lawfully</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">discharging an official duty at a civil commitment facility; or</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) in retaliation for or on account of an exercise</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of official power or performance of an official duty by the officer or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">employee; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a person who contracts with the state to perform a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">service in the facility or an employee of that person to contact the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -16 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">blood, seminal fluid, vaginal fluid, saliva, urine, or feces of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor, any other person, or an animal:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) while the person or employee is engaged in</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">performing a service within the scope of the contract, if the actor knows</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the person or employee is authorized by the state to provide the service;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) in retaliation for or on account of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person's or employee's performance of a service within the scope of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">contract; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) causes another person the actor knows to be a public</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">servant to contact the blood, seminal fluid, vaginal fluid, saliva,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">urine, or feces of the actor, any other person, or an animal while the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">public servant is lawfully discharging an official duty or in retaliation</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or on account of an exercise of the public servant's official power or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">performance of an official duty.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a felony of the third degree.</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) If conduct constituting an offense under this section also</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">constitutes an offense under another section of this code, the actor may</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">be prosecuted under either section.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) In this section, "correctional or detention facility" means:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a secure correctional facility; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a "secure correctional facility" or a "secure detention</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">facility" as defined by Section 51.02, Family Code, operated by or under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">contract with a juvenile board or the Texas Juvenile Justice Department</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or any other facility operated by or under contract with that department.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) For purposes of Subsection (a)(3), the actor is presumed to</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">have known the person was a public servant if the person was wearing a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">distinctive uniform or badge indicating the person's employment as a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">public servant.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 22.12. APPLICABILITY TO CERTAIN CONDUCT.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">This chapter does</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">not apply to conduct charged as having been committed against an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">individual who is an unborn child if the conduct is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) committed by the mother of the unborn child;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a lawful medical procedure performed by a physician or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other health care provider with the requisite consent;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a lawful medical procedure performed by a physician or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other licensed health care provider with the requisite consent as part of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an assisted reproduction as defined by Section 160.102, Family Code; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) the dispensation of a drug in accordance with law or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">administration of a drug prescribed in accordance with law.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -17 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">PENAL CODE</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">TITLE 6. OFFENSES AGAINST THE FAMILY</p>
</div>
`
    },
    
    {
        category: 'Penal Code',
        title: "Chapter 25 - Offenses Against the Family",
        content: `
<h1 style="color: #4fc3f7; font-size: 32px; margin-bottom: 15px;">Chapter 25</h1>
<h2 style="color: #b0b0b0; font-size: 22px; font-weight: normal; margin-bottom: 30px;">Offenses Against the Family</h2>

<div style="background: linear-gradient(to right, rgba(79, 195, 247, 0.25), rgba(79, 195, 247, 0.05)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4fc3f7; border-radius: 5px;">
    <h3 style="color: #4fc3f7; margin: 0 0 10px 0; font-size: 18px;">📖 Quick Summary</h3>
    <p style="font-size: 17px; line-height: 1.7; margin: 0; color: #e0e0e0;">Offenses against family</p>
</div>

<div style="background: linear-gradient(to right, rgba(255, 193, 7, 0.2), rgba(255, 193, 7, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #ffc107; border-radius: 5px;">
    <h3 style="color: #ffc107; margin: 0 0 15px 0; font-size: 18px;">⚡ Must Know</h3>
    <ul style="margin: 0; padding-left: 20px; color: #e0e0e0;">
        <li style="margin: 8px 0; font-size: 16px;">Child custody interference</li>
        <li style="margin: 8px 0; font-size: 16px;">Protective order violations</li>
    </ul>
</div>

<div style="background: linear-gradient(to right, rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4caf50; border-radius: 5px;">
    <h3 style="color: #4caf50; margin: 0 0 10px 0; font-size: 18px;">🔑 Key Terms</h3>
    <p style="margin: 0; font-size: 15px;"><strong style='color: #4caf50;'>Protective order</strong></p>
</div>

<hr style="border: none; border-top: 2px solid #444; margin: 35px 0;">

<h2 style="color: #4fc3f7; font-size: 24px; margin-bottom: 25px;">📋 Sections</h2>


<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 25.01. BIGAMY.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) An individual commits an offense if:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) he is legally married and he:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) purports to marry or does marry a person other than</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">his spouse in this state, or any other state or foreign country, under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">circumstances that would, but for the actor's prior marriage, constitute</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a marriage; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) lives with a person other than his spouse in this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">state under the appearance of being married; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) he knows that a married person other than his spouse is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">married and he:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) purports to marry or does marry that person in this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">state, or any other state or foreign country, under circumstances that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">would, but for the person's prior marriage, constitute a marriage; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) lives with that person in this state under the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">appearance of being married.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) For purposes of this section, "under the appearance of being</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">married" means holding out that the parties are married with cohabitation</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and an intent to be married by either party.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) It is a defense to prosecution under Subsection (a)(1) that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor reasonably believed at the time of the commission of the offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that the actor and the person whom the actor married or purported to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">marry or with whom the actor lived under the appearance of being married</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">were legally eligible to be married because the actor's prior marriage</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">was void or had been dissolved by death, divorce, or annulment. For</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">purposes of this subsection, an actor's belief is reasonable if the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">belief is substantiated by a certified copy of a death certificate or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other signed document issued by a court.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) For the purposes of this section, the lawful wife or husband of</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the actor may testify both for or against the actor concerning proof of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the original marriage.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) An offense under this section is a felony of the third degree,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">except that if at the time of the commission of the offense, the person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">whom the actor marries or purports to marry or with whom the actor lives</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under the appearance of being married is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) 17 years of age, the offense is a felony of the second</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">degree; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) 16 years of age or younger, the offense is a felony of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">first degree.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 25.02. PROHIBITED SEXUAL CONDUCT.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense if the person engages in sexual intercourse or deviate sexual</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">intercourse with another person the actor knows to be, without regard to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">legitimacy:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the actor's ancestor or descendant by blood or adoption;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor's current or former stepchild or stepparent;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the actor's parent's brother or sister of the whole or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">half blood;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) the actor's brother or sister of the whole or half blood</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or by adoption;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page - 1 -</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) the children of the actor's brother or sister of the whole</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or half blood or by adoption; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) the son or daughter of the actor's aunt or uncle of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">whole or half blood or by adoption.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) For purposes of this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Deviate sexual intercourse" means any contact between the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">genitals of one person and the mouth or anus of another person with</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">intent to arouse or gratify the sexual desire of any person.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Sexual intercourse" means any penetration of the female</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">sex organ by the male sex organ.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under this section is a felony of the third degree,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">unless the offense is committed under Subsection (a)(1), in which event</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the offense is a felony of the second degree.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 25.03. INTERFERENCE WITH CHILD CUSTODY.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an offense if the person takes or retains a child younger than 18 years</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of age:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) when the person knows that the person's taking or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">retention violates the express terms of a judgment or order, including a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">temporary order, of a court disposing of the child's custody;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) when the person has not been awarded custody of the child</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by a court of competent jurisdiction, knows that a suit for divorce or a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">civil suit or application for habeas corpus to dispose of the child's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">custody has been filed, and takes the child out of the geographic area of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the counties composing the judicial district if the court is a district</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">court or the county if the court is a statutory county court, without the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">permission of the court and with the intent to deprive the court of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">authority over the child; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) outside of the United States with the intent to deprive a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person entitled to possession of or access to the child of that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">possession or access and without the permission of that person.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A noncustodial parent commits an offense if, with the intent to</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">interfere with the lawful custody of a child younger than 18 years, the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">noncustodial parent knowingly entices or persuades the child to leave the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">custody of the custodial parent, guardian, or person standing in the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">stead of the custodial parent or guardian of the child.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) It is a defense to prosecution under Subsection (a)(2) that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor returned the child to the geographic area of the counties composing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the judicial district if the court is a district court or the county if</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the court is a statutory county court, within three days after the date</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the commission of the offense.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(c-1) It is an affirmative defense to prosecution under Subsection</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)(3) that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the taking or retention of the child was pursuant to a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">valid order providing for possession of or access to the child; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) notwithstanding any violation of a valid order providing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">for possession of or access to the child, the actor's retention of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">child was due only to circumstances beyond the actor's control and the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor promptly provided notice or made reasonable attempts to provide</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">notice of those circumstances to the other person entitled to possession</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of or access to the child.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -2 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(c-2) Subsection (a)(3) does not apply if, at the time of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense, the person taking or retaining the child:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) was entitled to possession of or access to the child; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) was fleeing the commission or attempted commission of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">family violence, as defined by Section 71.004, Family Code, against the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">child or the person.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) An offense under this section is a state jail felony.</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) If conduct that constitutes an offense under Subsection (a)(3)</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">also constitutes an offense under Section 20.03, the actor may be</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">prosecuted only under Section 20.03.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 25.031. AGREEMENT TO ABDUCT FROM CUSTODY.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">A person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">commits an offense if the person agrees, for remuneration or the promise</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of remuneration, to abduct a child younger than 18 years of age by force,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">threat of force, misrepresentation, stealth, or unlawful entry, knowing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that the child is under the care and control of a person having custody</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or physical possession of the child under a court order, including a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">temporary order, or under the care and control of another person who is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">exercising care and control with the consent of a person having custody</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or physical possession under a court order, including a temporary order.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a state jail felony.</strong></p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 25.04. ENTICING A CHILD.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense if,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">with the intent to interfere with the lawful custody of a child younger</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">than 18 years, he knowingly entices, persuades, or takes the child from</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the custody of the parent or guardian or person standing in the stead of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the parent or guardian of such child.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a Class B misdemeanor, unless</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">it is shown on the trial of the offense that the actor intended to commit</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a felony against the child, in which event an offense under this section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is a felony of the third degree.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 25.05. CRIMINAL NONSUPPORT.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">An individual commits an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense if the individual intentionally or knowingly fails to provide</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">support for the individual's child younger than 18 years of age, or for</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the individual's child who is the subject of a court order requiring the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">individual to support the child.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) For purposes of this section, "child" includes a child born out</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of wedlock whose paternity has either been acknowledged by the actor or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">has been established in a civil suit under the Family Code or the law of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">another state.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) Under this section, a conviction may be had on the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">uncorroborated testimony of a party to the offense.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) It is an affirmative defense to prosecution under this section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that the actor could not provide support for the actor's child.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) The pendency of a prosecution under this section does not</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">affect the power of a court to enter an order for child support under the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Family Code.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) An offense under this section is a state jail felony.</strong></p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 25.06. HARBORING RUNAWAY CHILD.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -3 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">A person commits an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense if he knowingly harbors a child and he is criminally negligent</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">about whether the child:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) is younger than 18 years; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) has escaped from the custody of a peace officer, a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">probation officer, the Texas Youth Council, or a detention facility for</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">children, or is voluntarily absent from the child's home without the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">consent of the child's parent or guardian for a substantial length of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">time or without the intent to return.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) It is a defense to prosecution under this section that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor was related to the child within the second degree by consanguinity</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or affinity, as determined under Chapter 573, Government Code.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) It is a defense to prosecution under this section that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor notified:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the person or agency from which the child escaped or a law</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">enforcement agency of the presence of the child within 24 hours after</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">discovering that the child had escaped from custody; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a law enforcement agency or a person at the child's home</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the presence of the child within 24 hours after discovering that the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">child was voluntarily absent from home without the consent of the child's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">parent or guardian.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) An offense under this section is a Class A misdemeanor.</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) On the receipt of a report from a peace officer, probation</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">officer, the Texas Youth Council, a foster home, or a detention facility</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">for children that a child has escaped its custody or upon receipt of a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">report from a parent, guardian, conservator, or legal custodian that a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">child is missing, a law enforcement agency shall immediately enter a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">record of the child into the National Crime Information Center.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 25.07.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">VIOLATION OF CERTAIN COURT ORDERS OR CONDITIONS OF BOND</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">IN A FAMILY VIOLENCE, CHILD ABUSE OR NEGLECT, SEXUAL ASSAULT OR ABUSE,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">INDECENT ASSAULT, STALKING, OR TRAFFICKING CASE. (a) A person commits</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an offense if, in violation of a condition of bond set in a family</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">violence, sexual assault or abuse, indecent assault, stalking, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">trafficking case and related to the safety of a victim or the safety of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the community, an order issued under Subchapter A, Chapter 7B, Code of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Criminal Procedure, an order issued under Article 17.292, Code of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Criminal Procedure, an order issued under Section 6.504, Family Code,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Chapter 83, Family Code, if the temporary ex parte order has been served</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">on the person, Chapter 85, Family Code, or Subchapter F, Chapter 261,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Family Code, or an order issued by another jurisdiction as provided by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Chapter 88, Family Code, the person knowingly or intentionally:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) commits family violence or an act in furtherance of an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense under Section 20A.02, 22.011, 22.012, 22.021, or 42.072;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) communicates:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) directly with a protected individual or a member of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the family or household in a threatening or harassing manner;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a threat through any person to a protected individual</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or a member of the family or household; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) in any manner with the protected individual or a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">member of the family or household except through the person's attorney or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a person appointed by the court, if the violation is of an order</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -4 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">described by this subsection and the order prohibits any communication</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">with a protected individual or a member of the family or household;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) goes to or near any of the following places as</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">specifically described in the order or condition of bond:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the residence or place of employment or business of a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">protected individual or a member of the family or household; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) any child care facility, residence, or school where a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">child protected by the order or condition of bond normally resides or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">attends;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) possesses a firearm;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) harms, threatens, or interferes with the care, custody, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">control of a pet, companion animal, or assistance animal that is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">possessed by a person protected by the order or condition of bond;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) removes, attempts to remove, or otherwise tampers with the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">normal functioning of a global positioning monitoring system; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) tracks or monitors personal property or a motor vehicle in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the possession of a protected individual or of a member of the family or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">household of a protected individual, without the individual's effective</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">consent, including by:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) using a tracking application on a personal electronic</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">device in the possession of the protected individual or the family or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">household member or using a tracking device; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) physically following the protected individual or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">family or household member or causing another to physically follow the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">individual or member.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a-1) For purposes of Subsection (a)(5), possession of a pet,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">companion animal, or assistance animal by a person means:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) actual care, custody, control, or management of a pet,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">companion animal, or assistance animal by the person; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) constructive possession of a pet, companion animal, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">assistance animal owned by the person or for which the person has been</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the primary caregiver.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) For the purposes of this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Family violence," " family," "household," and "member of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a household" have the meanings assigned by Chapter 71, Family Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Firearm" has the meaning assigned by Chapter 46.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(2-a) "Global positioning monitoring system" has the meaning</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">assigned by Article 17.49, Code of Criminal Procedure.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Assistance animal" has the meaning assigned by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">121.002, Human Resources Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) "Sexual abuse" means any act as described by Section 21.02</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or 21.11.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) "Sexual assault" means any act as described by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">22.011 or 22.021.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) "Stalking" means any conduct that constitutes an offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under Section 42.072.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) "Trafficking" means any conduct that constitutes an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense under Section 20A.02.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(8) "Indecent assault" means any conduct that constitutes an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense under Section 22.012.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) If conduct constituting an offense under this section also</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -5 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">constitutes an offense under another section of this code, the actor may</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">be prosecuted under either section or under both sections.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) Reconciliatory actions or agreements made by persons affected</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by an order do not affect the validity of the order or the duty of a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">peace officer to enforce this section.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) A peace officer investigating conduct that may constitute an</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense under this section for a violation of an order may not arrest a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person protected by that order for a violation of that order.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) It is not a defense to prosecution under this section that</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">certain information has been excluded, as provided by Section 85.007,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Family Code, or Article 17.292, Code of Criminal Procedure, from an order</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to which this section applies.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(g) An offense under this section is a Class A misdemeanor, except</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the offense is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) subject to Subdivision (2), a state jail felony if it is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">shown at the trial of the offense that the defendant violated an order</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">issued under Subchapter A, Chapter 7B, Code of Criminal Procedure,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">following the defendant's conviction of or placement on deferred</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">adjudication community supervision for an offense, if the order was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">issued with respect to a victim of that offense; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a felony of the third degree if it is shown on the trial</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the offense that the defendant:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) has previously been convicted two or more times of an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense under this section or two or more times of an offense under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 25.072, or has previously been convicted of an offense under this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section and an offense under Section 25.072; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) has violated the order or condition of bond by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">committing an assault or the offense of stalking.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(h) For purposes of Subsection (g), a conviction under the laws of</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">another state for an offense containing elements that are substantially</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">similar to the elements of an offense under this section or Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">25.072 is considered to be a conviction under this section or Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">25.072, as applicable.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 25.071. VIOLATION OF PROTECTIVE ORDER PREVENTING OFFENSE CAUSED BY BIAS OR PREJUDICE.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense if, in</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">violation of an order issued under Subchapter C, Chapter 7B, Code of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Criminal Procedure, the person knowingly or intentionally:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) commits an offense under Title 5 or Section 28.02, 28.03,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or 28.08 and commits the offense because of bias or prejudice as</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">described by Article 42.014, Code of Criminal Procedure;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) communicates:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) directly with a protected individual in a threatening</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or harassing manner;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a threat through any person to a protected</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">individual; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) in any manner with the protected individual, if the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">order prohibits any communication with a protected individual; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) goes to or near the residence or place of employment or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">business of a protected individual.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) If conduct constituting an offense under this section also</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -6 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">constitutes an offense under another section of this code, the actor may</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">be prosecuted under either section or under both sections.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) A peace officer investigating conduct that may constitute an</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense under this section for a violation of an order may not arrest a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person protected by that order for a violation of that order.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) An offense under this section is a Class A misdemeanor unless</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">it is shown on the trial of the offense that the defendant has previously</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">been convicted under this section two or more times or has violated the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">protective order by committing an assault, in which event the offense is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a third degree felony.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 25.072.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">REPEATED VIOLATION OF CERTAIN COURT ORDERS OR</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">CONDITIONS OF BOND IN FAMILY VIOLENCE, CHILD ABUSE OR NEGLECT, SEXUAL</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">ASSAULT OR ABUSE, INDECENT ASSAULT, STALKING, OR TRAFFICKING CASE.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense if, during a period that is 12 months or</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">less in duration, the person two or more times engages in conduct that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">constitutes an offense under Section 25.07.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) If the jury is the trier of fact, members of the jury must</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">agree unanimously that the defendant, during a period that is 12 months</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or less in duration, two or more times engaged in conduct that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">constituted an offense under Section 25.07.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) A defendant may not be convicted in the same criminal action of</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">another offense an element of which is any conduct that is alleged as an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">element of the offense under Subsection (a) unless the other offense:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) is charged in the alternative;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) occurred outside the period in which the offense alleged</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under Subsection (a) was committed; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) is considered by the trier of fact to be a lesser included</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense of the offense alleged under Subsection (a).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) A defendant may not be charged with more than one count under</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (a) if all of the specific conduct that is alleged to have</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">been engaged in is alleged to have been committed in violation of a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">single court order or single setting of bond.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) An offense under this section is a felony of the third degree.</strong></p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 25.08. SALE OR PURCHASE OF CHILD.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense if he:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) possesses a child younger than 18 years of age or has the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">custody, conservatorship, or guardianship of a child younger than 18</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">years of age, whether or not he has actual possession of the child, and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">he offers to accept, agrees to accept, or accepts a thing of value for</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the delivery of the child to another or for the possession of the child</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by another for purposes of adoption; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) offers to give, agrees to give, or gives a thing of value</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to another for acquiring or maintaining the possession of a child for the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">purpose of adoption.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) It is an exception to the application of this section that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">thing of value is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a fee or reimbursement paid to a child-placing agency as</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">authorized by law;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a fee paid to an attorney, social worker, mental health</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -7 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">professional, or physician for services rendered in the usual course of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">legal or medical practice or in providing adoption counseling;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a reimbursement of legal or medical expenses incurred by a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person for the benefit of the child; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) a necessary pregnancy-related expense paid by a childplacing agency for the benefit of the child's parent during the pregnancy</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or after the birth of the child as permitted by the minimum standards for</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">child-placing agencies and Department of Protective and Regulatory</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Services rules.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under this section is a felony of the third degree,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">except that the offense is a felony of the second degree if the actor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">commits the offense with intent to commit an offense under Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">20A.02, 43.021, 43.05, or 43.25.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 25.081. UNREGULATED CUSTODY TRANSFER OF ADOPTED CHILD.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Adopted child" means a person younger than 18 years of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">age who was legally adopted through a governmental entity or through</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">private means, including a person who is in foster care or from a foreign</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">country at the time of the adoption.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Unregulated custody transfer" means the transfer of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">permanent physical custody of an adopted child by the parent, managing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conservator, or guardian of the child without receiving approval of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">transfer by a court as required by Section 162.026, Family Code.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) Except as otherwise provided by this section, a person commits</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an offense if the person knowingly:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) conducts an unregulated custody transfer of an adopted</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">child; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) facilitates or participates in the unregulated custody</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">transfer of an adopted child, including by transferring, recruiting,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">harboring, transporting, providing, soliciting, or obtaining an adopted</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">child for that purpose.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under this section is a felony of the third degree,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">except that the offense is a felony of the second degree if the actor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">commits the offense with intent to commit an offense under Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">20A.02, 43.021, 43.05, 43.25, 43.251, or 43.26.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) This section does not apply to:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the placement of an adopted child with a licensed childplacing agency, the Department of Family and Protective Services, or an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">adult relative, stepparent, or other adult with a significant and longstanding relationship to the child;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the placement of an adopted child by a licensed childplacing agency or the Department of Family and Protective Services;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the temporary placement of an adopted child by the child's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">parent, managing conservator, or guardian for a designated short-term</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">period with a specified intent and period for return of the child due to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">temporary circumstances, including:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) a vacation;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a school-sponsored function or activity; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">incarceration,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">military</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">service,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">medical</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">treatment, or incapacity of the parent, managing conservator, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -8 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">guardian;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) the placement of an adopted child in another state in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">accordance with the requirements of Subchapter B, Chapter 162, Family</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Code; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) the voluntary delivery of an adopted child under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subchapter D, Chapter 262, Family Code.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 25.09. ADVERTISING FOR PLACEMENT OF CHILD.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">commits an offense if the person advertises in the public media that the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person will place, provide, or obtain a child for adoption or any other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">form of permanent physical custody of the child.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) This section does not apply to a licensed child-placing agency</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that is identified in the advertisement as a licensed child-placing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">agency.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under this section is a Class A misdemeanor unless</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the person has been convicted previously under this section, in which</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">event the offense is a felony of the third degree.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Child" has the meaning assigned by Section 101.003,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Family Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Public media" has the meaning assigned by Section 38.01.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">The term also includes communications through the use of the Internet or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">another public computer network.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 25.10. INTERFERENCE WITH RIGHTS OF GUARDIAN OF THE PERSON.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Possessory right" means the right of a guardian of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person to have physical possession of a ward and to establish the ward's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">legal domicile, as provided by Section 1151.051(c)(1), Estates Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Ward" has the meaning assigned by Chapter 1002, Estates</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Code.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person commits an offense if the person takes, retains, or</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conceals a ward when the person knows that the person's taking,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">retention, or concealment interferes with a possessory right with respect</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to the ward.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under this section is a state jail felony.</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) This section does not apply to a governmental entity where the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">taking, retention, or concealment of the ward was authorized by Subtitle</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">E, Title 5, Family Code, or Chapter 48, Human Resources Code.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 25.11. CONTINUOUS VIOLENCE AGAINST THE FAMILY.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">commits an offense if, during a period that is 12 months or less in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">duration, the person two or more times engages in conduct that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">constitutes an offense under Section 22.01(a)(1) against another person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or persons whose relationship to or association with the defendant is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">described by Section 71.0021(b), 71.003, or 71.005, Family Code.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) If the jury is the trier of fact, members of the jury are not</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">required to agree unanimously on the specific conduct in which the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">defendant engaged that constituted an offense under Section 22.01(a)(1)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">against the person or persons described by Subsection (a), the exact date</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">when that conduct occurred, or the county in which each instance of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -9 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conduct occurred. The jury must agree unanimously that the defendant,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">during a period that is 12 months or less in duration, two or more times</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">engaged in conduct that constituted an offense under Section 22.01(a)(1)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">against the person or persons described by Subsection (a).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) A defendant may not be convicted in the same criminal action of</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">another offense the victim of which is an alleged victim of the offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under Subsection (a) and an element of which is any conduct that is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">alleged as an element of the offense under Subsection (a) unless the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other offense:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) is charged in the alternative;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) occurred outside the period in which the offense alleged</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under Subsection (a) was committed; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) is considered by the trier of fact to be a lesser included</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense of the offense alleged under Subsection (a).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) A defendant may not be charged with more than one count under</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (a) if all of the specific conduct that is alleged to have</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">been engaged in is alleged to have been committed against a single victim</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or members of the same household, as defined by Section 71.005, Family</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Code.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) An offense under this section is a felony of the third degree.</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -10 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">PENAL CODE</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">TITLE 7. OFFENSES AGAINST PROPERTY</p>
</div>
`
    },
    
    {
        category: 'Penal Code',
        title: "Chapter 28 - Arson and Criminal Mischief",
        content: `
<h1 style="color: #4fc3f7; font-size: 32px; margin-bottom: 15px;">Chapter 28</h1>
<h2 style="color: #b0b0b0; font-size: 22px; font-weight: normal; margin-bottom: 30px;">Arson and Criminal Mischief</h2>

<div style="background: linear-gradient(to right, rgba(79, 195, 247, 0.25), rgba(79, 195, 247, 0.05)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4fc3f7; border-radius: 5px;">
    <h3 style="color: #4fc3f7; margin: 0 0 10px 0; font-size: 18px;">📖 Quick Summary</h3>
    <p style="font-size: 17px; line-height: 1.7; margin: 0; color: #e0e0e0;">Arson, criminal mischief</p>
</div>

<div style="background: linear-gradient(to right, rgba(255, 193, 7, 0.2), rgba(255, 193, 7, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #ffc107; border-radius: 5px;">
    <h3 style="color: #ffc107; margin: 0 0 15px 0; font-size: 18px;">⚡ Must Know</h3>
    <ul style="margin: 0; padding-left: 20px; color: #e0e0e0;">
        <li style="margin: 8px 0; font-size: 16px;">Arson = intentionally starting fire</li>
        <li style="margin: 8px 0; font-size: 16px;">Criminal mischief = property damage</li>
    </ul>
</div>

<div style="background: linear-gradient(to right, rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4caf50; border-radius: 5px;">
    <h3 style="color: #4caf50; margin: 0 0 10px 0; font-size: 18px;">🔑 Key Terms</h3>
    <p style="margin: 0; font-size: 15px;"><strong style='color: #4caf50;'>Arson</strong></p>
</div>

<hr style="border: none; border-top: 2px solid #444; margin: 35px 0;">

<h2 style="color: #4fc3f7; font-size: 24px; margin-bottom: 25px;">📋 Sections</h2>


<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 28.01. DEFINITIONS.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">In this chapter:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Habitation" means a structure or vehicle that is adapted</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">for the overnight accommodation of persons and includes:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) each separately secured or occupied portion of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">structure or vehicle; and</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) each structure appurtenant to or connected with the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">structure or vehicle.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Building" means any structure or enclosure intended for</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">use or occupation as a habitation or for some purpose of trade,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">manufacture, ornament, or use.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Property" means:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) real property;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) tangible or intangible personal property, including</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">anything severed from land; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) a document, including money, that represents or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">embodies anything of value.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) "Vehicle" includes any device in, on, or by which any</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person or property is or may be propelled, moved, or drawn in the normal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">course of commerce or transportation.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) "Open-space land" means real property that is undeveloped</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">for the purpose of human habitation.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) "Controlled burning" means the burning of unwanted</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">vegetation with the consent of the owner of the property on which the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">vegetation is located and in such a manner that the fire is controlled</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and limited to a designated area.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 28.02. ARSON.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense if the person</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">starts a fire, regardless of whether the fire continues after ignition,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or causes an explosion with intent to destroy or damage:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) any vegetation, fence, or structure on open-space land;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) any building, habitation, or vehicle:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) knowing that it is within the limits of an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">incorporated city or town;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) knowing that it is insured against damage or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">destruction;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) knowing that it is subject to a mortgage or other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">security interest;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) knowing that it is located on property belonging to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">another;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(E) knowing that it has located within it property</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">belonging to another; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(F) when the person is reckless about whether the burning</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or explosion will endanger the life of some individual or the safety of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the property of another.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a-1) A person commits an offense if the person recklessly starts a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">fire or causes an explosion while manufacturing or attempting to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page - 1 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">manufacture a controlled substance and the fire or explosion damages any</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">building, habitation, or vehicle.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a-2) A person commits an offense if the person intentionally</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">starts a fire or causes an explosion and in so doing:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) recklessly damages or destroys a building belonging to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">another; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) recklessly causes another person to suffer bodily injury</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or death.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) It is an exception to the application of Subsection (a)(1) that</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the fire or explosion was a part of the controlled burning of open-space</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">land.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) It is a defense to prosecution under Subsection (a)(2)(A) that</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">prior to starting the fire or causing the explosion, the actor obtained a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">permit or other written authorization granted in accordance with a city</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">ordinance, if any, regulating fires and explosions.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) An offense under Subsection (a) is a felony of the second</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">degree, except that the offense is a felony of the first degree if it is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">shown on the trial of the offense that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) bodily injury or death was suffered by any person by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">reason of the commission of the offense; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the property intended to be damaged or destroyed by the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor was a habitation or a place of assembly or worship.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) An offense under Subsection (a-1) is a state jail felony,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">except that the offense is a felony of the third degree if it is shown on</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the trial of the offense that bodily injury or death was suffered by any</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person by reason of the commission of the offense.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) An offense under Subsection (a-2) is a state jail felony.</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(g) If conduct that constitutes an offense under Subsection (a-1)</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or that constitutes an offense under Subsection (a-2) also constitutes an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense under another subsection of this section or another section of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">this code, the actor may be prosecuted under Subsection (a-1) or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (a-2), under the other subsection of this section, or under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the other section of this code.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 28.03. CRIMINAL MISCHIEF.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if, without the effective consent of the owner:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) he intentionally or knowingly damages or destroys the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">tangible property of the owner;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) he intentionally or knowingly tampers with the tangible</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property of the owner and causes pecuniary loss or substantial</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">inconvenience to the owner or a third person; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) he intentionally or knowingly makes markings, including</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">inscriptions, slogans, drawings, or paintings, on the tangible property</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the owner.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) Except as provided by Subsections (f) and (h), an offense under</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">this section is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a Class C misdemeanor if:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the amount of pecuniary loss is less than $100; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) except as provided in Subdivision (3)(A) or (3)(B),</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">it causes substantial inconvenience to others;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a Class B misdemeanor if the amount of pecuniary loss is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -2 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">$100 or more but less than $750;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a Class A misdemeanor if:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the amount of pecuniary loss is $750 or more but less</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">than $2,500; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the actor causes in whole or in part impairment or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">interruption of any public water supply, or causes to be diverted in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">whole, in part, or in any manner, including installation or removal of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">any device for any such purpose, any public water supply, regardless of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the amount of the pecuniary loss;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) a state jail felony if the amount of pecuniary loss is:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) $2,500 or more but less than $30,000;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) less than $2,500, if the property damaged or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">destroyed is a habitation and if the damage or destruction is caused by a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">firearm or explosive weapon;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) less than $2,500, if the property was a fence used</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">for the production or containment of:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) cattle, bison, horses, sheep, swine, goats,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">exotic livestock, or exotic poultry; or</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) game animals as that term is defined by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">63.001, Parks and Wildlife Code;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) less than $30,000 and the actor:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) causes</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">wholly</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">partly</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">impairment</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">interruption of property used for flood control purposes or a dam or of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">public communications, public transportation, public gas supply, or other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">public service; or</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) causes to be diverted wholly, partly, or in any</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">manner, including installation or removal of any device for any such</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">purpose, any public communications or public gas supply; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(E) less than $30,000, if the property is a motor vehicle</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that is damaged, destroyed, or tampered with during the removal or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">attempted removal of a catalytic converter from the motor vehicle;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) a felony of the third degree if:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the amount of the pecuniary loss is $30,000 or more</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">but less than $150,000;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the actor, by discharging a firearm or other weapon</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or by any other means, causes the death of one or more head of cattle or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">bison or one or more horses;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) the actor causes wholly or partly impairment or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">interruption of access to an automated teller machine, regardless of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">amount of the pecuniary loss; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) the amount of pecuniary loss is less than $150,000</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and the actor:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) causes</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">wholly</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">partly</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">impairment</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">interruption of property used for public power supply; or</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) causes to be diverted wholly, partly, or in any</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">manner, including installation or removal of any device for any such</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">purpose, any public power supply;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) a felony of the second degree if the amount of pecuniary</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">loss is $150,000 or more but less than $300,000; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) a felony of the first degree if the amount of pecuniary</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">loss is $300,000 or more.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -3 -</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) For the purposes of this section, it shall be presumed that a</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person who is receiving the economic benefit of public communications,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">public water, gas, or power supply, has knowingly tampered with the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">tangible property of the owner if the communication or supply has been:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) diverted from passing through a metering device; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) prevented from being correctly registered by a metering</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">device; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) activated by any device installed to obtain public</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">communications, public water, gas, or power supply without a metering</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">device.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) The terms "public communication, public transportation, public</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">gas or power supply, or other public service" and "public water supply"</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">shall mean, refer to, and include any such services subject to regulation</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by the Public Utility Commission of Texas, the Railroad Commission of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Texas, or the Texas Natural Resource Conservation Commission or any such</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">services enfranchised by the State of Texas or any political subdivision</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">thereof.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) When more than one item of tangible property, belonging to one</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or more owners, is damaged, destroyed, or tampered with in violation of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">this section pursuant to one scheme or continuing course of conduct, the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conduct may be considered as one offense, and the amounts of pecuniary</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">loss to property resulting from the damage to, destruction of, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">tampering with the property may be aggregated in determining the grade of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the offense.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) An offense under this section is a state jail felony if the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">damage or destruction is inflicted on a place of worship or human burial,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a public monument, or a community center that provides medical, social,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or educational programs and the amount of the pecuniary loss to real</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property or to tangible personal property is $750 or more but less than</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">$30,000.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(g) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Explosive weapon" means any explosive or incendiary</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">device that is designed, made, or adapted for the purpose of inflicting</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">serious bodily injury, death, or substantial property damage, or for the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">principal purpose of causing such a loud report as to cause undue public</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">alarm or terror, and includes:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) an explosive or incendiary bomb, grenade, rocket, and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">mine;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a device designed, made, or adapted for delivering or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">shooting an explosive weapon; and</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) a device designed, made, or adapted to start a fire</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">in a time-delayed manner.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Firearm" has the meaning assigned by Section 46.01.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Institution of higher education" has the meaning assigned</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by Section 61.003, Education Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) "Aluminum wiring" means insulated or noninsulated wire or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">cable that consists of at least 50 percent aluminum, including any tubing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or conduit attached to the wire or cable.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) "Bronze wiring" means insulated or noninsulated wire or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">cable that consists of at least 50 percent bronze, including any tubing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or conduit attached to the wire or cable.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -4 -</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) "Copper wiring" means insulated or noninsulated wire or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">cable that consists of at least 50 percent copper, including any tubing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or conduit attached to the wire or cable.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) "Transportation communications equipment" means:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) an official traffic-control device, railroad sign or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">signal, or traffic-control signal, as those terms are defined by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">541.304, Transportation Code; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a sign, signal, or device erected by a railroad,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">public body, or public officer to direct the movement of a railroad</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">train, as defined by Section 541.202, Transportation Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(8) "Transportation communications device" means any item</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">attached to transportation communications equipment, including aluminum</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">wiring, bronze wiring, and copper wiring.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(9) "Automated teller machine" has the meaning assigned by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 31.03.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(h) An offense under this section is a state jail felony if the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">amount of the pecuniary loss to real property or to tangible personal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property is $750 or more but less than $30,000 and the damage or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">destruction is inflicted on a public or private elementary school,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">secondary school, or institution of higher education.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) Notwithstanding Subsection (b), an offense under this section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is a felony of the first degree if the property is livestock and the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">damage is caused by introducing bovine spongiform encephalopathy,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">commonly known as mad cow disease, or a disease listed in rules adopted</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by the Texas Animal Health Commission under Section 161.041(a),</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Agriculture Code. In this subsection, "livestock" has the meaning</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">assigned by Section 161.001, Agriculture Code.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(j) Notwithstanding Subsection (b), an offense under this section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is a felony of the third degree if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the tangible property damaged, destroyed, or tampered with</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">transportation</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">communications</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">equipment</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">transportation</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">communications device; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the amount of the pecuniary loss to the tangible property</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is less than $150,000.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(k) Subsection (a)(1) or (2) does not apply if the tangible</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">personal property of the owner was a head of cattle or bison killed, or a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">horse killed, in the course of the actor's:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) actual discharge of official duties as a member of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">United States armed forces or the state military forces as defined by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 437.001, Government Code; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) regular agricultural labor duties and practices.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 28.04. RECKLESS DAMAGE OR DESTRUCTION.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an offense if, without the effective consent of the owner, he recklessly</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">damages or destroys property of the owner.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a Class C misdemeanor.</strong></p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 28.05.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">ACTOR'S INTEREST IN PROPERTY.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">It is no defense to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">prosecution under this chapter that the actor has an interest in the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property damaged or destroyed if another person also has an interest that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the actor is not entitled to infringe.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -5 -</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 28.06. AMOUNT OF PECUNIARY LOSS.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) The amount of pecuniary</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">loss under this chapter, if the property is destroyed, is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the fair market value of the property at the time and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">place of the destruction; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) if the fair market value of the property cannot be</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">ascertained, the cost of replacing the property within a reasonable time</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">after the destruction.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) The amount of pecuniary loss under this chapter, if the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property is damaged, is the cost of repairing or restoring the damaged</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property within a reasonable time after the damage occurred.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) The amount of pecuniary loss under this chapter for documents,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other than those having a readily ascertainable market value, is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the amount due and collectible at maturity less any part</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that has been satisfied, if the document constitutes evidence of a debt;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the greatest amount of economic loss that the owner might</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">reasonably suffer by virtue of the destruction or damage if the document</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is other than evidence of a debt.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) If the amount of pecuniary loss cannot be ascertained by the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">criteria set forth in Subsections (a) through (c), the amount of loss is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">deemed to be greater than $750 but less than $2,500.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) If the actor proves by a preponderance of the evidence that he</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">gave consideration for or had a legal interest in the property involved,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the value of the interest so proven shall be deducted from:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the amount of pecuniary loss if the property is destroyed;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the amount of pecuniary loss to the extent of an amount</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">equal to the ratio the value of the interest bears to the total value of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the property, if the property is damaged.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 28.07. INTERFERENCE WITH RAILROAD PROPERTY.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">In this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Railroad property" means:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) a train, locomotive, railroad car, caboose, work</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">equipment, rolling stock, safety device, switch, or connection that is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">owned, leased, operated, or possessed by a railroad; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a railroad track, rail, bridge, trestle, or right-ofway owned or used by a railroad.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Tamper" means to move, alter, or interfere with railroad</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person commits an offense if the person:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) throws an object or discharges a firearm or weapon at a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">train or rail-mounted work equipment; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) without the effective consent of the owner:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) enters or remains on railroad property, knowing that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">it is railroad property;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) tampers with railroad property;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) places an obstruction on a railroad track or rightof-way; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) causes in any manner the derailment of a train,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -6 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">railroad car, or other railroad property that moves on tracks.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under Subsection (b)(1) is a Class B misdemeanor</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">unless the person causes bodily injury to another, in which event the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense is a felony of the third degree.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) An offense under Subsection (b)(2)(A) is a Class C misdemeanor.</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) An offense under Subsection (b)(2)(B), (b)(2)(C), or (b)(2)(D)</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is a Class C misdemeanor unless the person causes pecuniary loss of $100</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or more, in which event the offense is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a Class B misdemeanor if the amount of pecuniary loss is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">$100 or more but less than $750;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a Class A misdemeanor if the amount of pecuniary loss is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">$750 or more but less than $2,500;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a state jail felony if the amount of pecuniary loss is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">$2,500 or more but less than $30,000;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) a felony of the third degree if the amount of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">pecuniary loss is $30,000 or more but less than $150,000;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) a felony of the second degree if the amount of pecuniary</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">loss is $150,000 or more but less than $300,000; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) a felony of the first degree if the amount of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">pecuniary loss is $300,000 or more.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) The conduct described in Subsection (b)(2)(A) is not an offense</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under this section if it is undertaken by an employee of the railroad or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by a representative of a labor organization which represents or is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">seeking to represent the employees of the railroad as long as the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">employee or representative has a right to engage in such conduct under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the Railway Labor Act (45 U.S.C. Section 151 et seq.).</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 28.08. GRAFFITI.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense if, without</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the effective consent of the owner, the person intentionally or knowingly</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">makes markings, including inscriptions, slogans, drawings, or paintings,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">on the tangible property of the owner with:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) paint;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) an indelible marker; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) an etching or engraving device.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) Except as provided by Subsection (d), an offense under this</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a Class C misdemeanor if the amount of pecuniary loss is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">less than $100;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a Class B misdemeanor if the amount of pecuniary loss is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">$100 or more but less than $750;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a Class A misdemeanor if the amount of pecuniary loss is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">$750 or more but less than $2,500;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) a state jail felony if the amount of pecuniary loss is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">$2,500 or more but less than $30,000;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) a felony of the third degree if the amount of pecuniary</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">loss is $30,000 or more but less than $150,000;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) a felony of the second degree if the amount of pecuniary</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">loss is $150,000 or more but less than $300,000; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) a felony of the first degree if the amount of pecuniary</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">loss is $300,000 or more.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) When more than one item of tangible property, belonging to one</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -7 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or more owners, is marked in violation of this section pursuant to one</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">scheme or continuing course of conduct, the conduct may be considered as</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">one offense, and the amounts of pecuniary loss to property resulting from</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the marking of the property may be aggregated in determining the grade of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the offense.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) An offense under this section is a state jail felony if:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the marking is made on a school, an institution of higher</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">education, a place of worship or human burial, a public monument, or a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">community center that provides medical, social, or educational programs;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the amount of the pecuniary loss to real property or to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">tangible personal property is $750 or more but less than $30,000.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Aerosol paint" means an aerosolized paint product.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Etching or engraving device" means a device that makes a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">delineation or impression on tangible property, regardless of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">manufacturer's intended use for that device.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Indelible marker" means a device that makes a mark with a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">paint or ink product that is specifically formulated to be more difficult</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to erase, wash out, or remove than ordinary paint or ink products.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) "Institution of higher education" has the meaning assigned</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by Section 481.134, Health and Safety Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) "School" means a private or public elementary or secondary</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">school.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 28.09. DAMAGING CRITICAL INFRASTRUCTURE FACILITY.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) In this</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Critical infrastructure facility" means an electrical</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">power generating facility, substation, switching station, electrical</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">control center, or electrical transmission or distribution facility.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Cyber attack" means an attempt to damage, disrupt, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">gain unauthorized access to a computer, computer network, or computer</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">system.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Drone" has the meaning assigned by Article 2.33, Code of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Criminal Procedure, as added by Chapter 1011 (H.B. 1758), Acts of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">87th Legislature, Regular Session, 2021.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) "Explosive weapon" has the meaning assigned by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">28.03.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) "Extended power outage" means a power outage:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) lasting for two hours or more; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) affecting 1,000 or more meters used to measure</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">electric energy consumption by retail customers.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) "Firearm" has the meaning assigned by Section 46.01.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person commits an offense if, without the effective consent</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the owner or operator of a critical infrastructure facility, the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) intentionally or knowingly damages, destroys, vandalizes,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or impairs the function of any critical infrastructure facility; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) as a result of the conduct described by Subdivision (1),</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">causes an extended power outage.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under this section is a felony of the second degree,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -8 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">except that the offense is a felony of the first degree if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the amount of pecuniary damage to the critical</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">infrastructure facility is $100,000 or more; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor uses a firearm, drone, cyber attack, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">explosive weapon in the commission of the offense.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) If conduct that constitutes an offense under this section also</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">constitutes an offense under any other law, the actor may be prosecuted</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under this section, the other law, or both.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 28.10. ENHANCED PENALTY FOR CERTAIN MISDEMEANORS OR STATE JAIL FELONIES.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">The punishment for an offense under this chapter that is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">punishable as a misdemeanor or a state jail felony is increased to the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">punishment for a felony of the third degree if it is shown on the trial</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the offense that the actor committed the offense in the course of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">committing an offense under Section 20.05(a)(2).</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -9 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">PENAL CODE</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">TITLE 7. OFFENSES AGAINST PROPERTY</p>
</div>
`
    },
    
    {
        category: 'Penal Code',
        title: "Chapter 29 - Robbery",
        content: `
<h1 style="color: #4fc3f7; font-size: 32px; margin-bottom: 15px;">Chapter 29</h1>
<h2 style="color: #b0b0b0; font-size: 22px; font-weight: normal; margin-bottom: 30px;">Robbery</h2>

<div style="background: linear-gradient(to right, rgba(79, 195, 247, 0.25), rgba(79, 195, 247, 0.05)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4fc3f7; border-radius: 5px;">
    <h3 style="color: #4fc3f7; margin: 0 0 10px 0; font-size: 18px;">📖 Quick Summary</h3>
    <p style="font-size: 17px; line-height: 1.7; margin: 0; color: #e0e0e0;">Robbery - theft with force</p>
</div>

<div style="background: linear-gradient(to right, rgba(255, 193, 7, 0.2), rgba(255, 193, 7, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #ffc107; border-radius: 5px;">
    <h3 style="color: #ffc107; margin: 0 0 15px 0; font-size: 18px;">⚡ Must Know</h3>
    <ul style="margin: 0; padding-left: 20px; color: #e0e0e0;">
        <li style="margin: 8px 0; font-size: 16px;">Robbery = theft + force/threat</li>
        <li style="margin: 8px 0; font-size: 16px;">Aggravated = weapon/injury/elderly</li>
    </ul>
</div>

<div style="background: linear-gradient(to right, rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4caf50; border-radius: 5px;">
    <h3 style="color: #4caf50; margin: 0 0 10px 0; font-size: 18px;">🔑 Key Terms</h3>
    <p style="margin: 0; font-size: 15px;"><strong style='color: #4caf50;'>Robbery</strong></p>
</div>

<hr style="border: none; border-top: 2px solid #444; margin: 35px 0;">

<h2 style="color: #4fc3f7; font-size: 24px; margin-bottom: 25px;">📋 Sections</h2>


<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 29.01. DEFINITIONS.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">In this chapter:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "In the course of committing theft" means conduct that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">occurs in an attempt to commit, during the commission, or in immediate</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">flight after the attempt or commission of theft.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Property" means:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) tangible or intangible personal property including</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">anything severed from land; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a document, including money, that represents or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">embodies anything of value.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 29.02. ROBBERY.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense if, in the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">course of committing theft as defined in Chapter 31 and with intent to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">obtain or maintain control of the property, he:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) intentionally, knowingly, or recklessly causes bodily</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">injury to another; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) intentionally or knowingly threatens or places another in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">fear of imminent bodily injury or death.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a felony of the second degree.</strong></p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 29.03. AGGRAVATED ROBBERY.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if he commits robbery as defined in Section 29.02, and he:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) causes serious bodily injury to another;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) uses or exhibits a deadly weapon; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) causes bodily injury to another person or threatens or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">places another person in fear of imminent bodily injury or death, if the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other person is:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) 65 years of age or older; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a disabled person.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a felony of the first degree.</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) In this section, "disabled person" means an individual with a</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">mental, physical, or developmental disability who is substantially unable</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to protect himself from harm.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 29.04. JUGGING.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense if, with</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the intent to commit theft of another person's money, the person:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) knowingly travels from a commercial business or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">financial institution, as defined by Section 201.101, Finance Code, on</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the same path or route as another person without substantially</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">deviating from that path or route; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) is in possession of two or more criminal instruments,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">as defined by Section 16.01.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a state jail felony, except</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that the offense is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a felony of the third degree if, during the commission</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the offense, the actor commits an offense under Section 30.04; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a felony of the first degree if, during the commission</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the offense, the actor commits an offense under Section 29.02.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page - 1 -</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) If conduct constituting an offense under this section also</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">constitutes an offense under another section of this code, the actor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">may be prosecuted under either section or under both sections.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -2 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">PENAL CODE</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">TITLE 7. OFFENSES AGAINST PROPERTY</p>
</div>
`
    },
    
    {
        category: 'Penal Code',
        title: "Chapter 30 - Burglary and Criminal Trespass",
        content: `
<h1 style="color: #4fc3f7; font-size: 32px; margin-bottom: 15px;">Chapter 30</h1>
<h2 style="color: #b0b0b0; font-size: 22px; font-weight: normal; margin-bottom: 30px;">Burglary and Criminal Trespass</h2>

<div style="background: linear-gradient(to right, rgba(79, 195, 247, 0.25), rgba(79, 195, 247, 0.05)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4fc3f7; border-radius: 5px;">
    <h3 style="color: #4fc3f7; margin: 0 0 10px 0; font-size: 18px;">📖 Quick Summary</h3>
    <p style="font-size: 17px; line-height: 1.7; margin: 0; color: #e0e0e0;">Burglary, trespass</p>
</div>

<div style="background: linear-gradient(to right, rgba(255, 193, 7, 0.2), rgba(255, 193, 7, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #ffc107; border-radius: 5px;">
    <h3 style="color: #ffc107; margin: 0 0 15px 0; font-size: 18px;">⚡ Must Know</h3>
    <ul style="margin: 0; padding-left: 20px; color: #e0e0e0;">
        <li style="margin: 8px 0; font-size: 16px;">Burglary = entry with intent</li>
    </ul>
</div>

<div style="background: linear-gradient(to right, rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4caf50; border-radius: 5px;">
    <h3 style="color: #4caf50; margin: 0 0 10px 0; font-size: 18px;">🔑 Key Terms</h3>
    <p style="margin: 0; font-size: 15px;"><strong style='color: #4caf50;'>Habitation</strong></p>
</div>

<hr style="border: none; border-top: 2px solid #444; margin: 35px 0;">

<h2 style="color: #4fc3f7; font-size: 24px; margin-bottom: 25px;">📋 Sections</h2>


<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 30.01. DEFINITIONS.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">In this chapter:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Habitation" means a structure or vehicle that is adapted</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">for the overnight accommodation of persons, and includes:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) each separately secured or occupied portion of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">structure or vehicle; and</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) each structure appurtenant to or connected with the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">structure or vehicle.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Building" means any enclosed structure intended for use</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or occupation as a habitation or for some purpose of trade, manufacture,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">ornament, or use.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Vehicle" includes any device in, on, or by which any</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person or property is or may be propelled, moved, or drawn in the normal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">course of commerce or transportation, except such devices as are</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">classified as "habitation."</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) "Controlled substance" has the meaning assigned by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">481.002, Health and Safety Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) "Wholesale distributor of prescription drugs" means a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">wholesale distributor, as defined by Section 431.401, Health and Safety</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Code.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 30.02. BURGLARY.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense if, without</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the effective consent of the owner, the person:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) enters a habitation, or a building (or any portion of a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">building) not then open to the public, with intent to commit a felony,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">theft, or an assault; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) remains concealed, with intent to commit a felony, theft,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or an assault, in a building or habitation; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) enters a building or habitation and commits or attempts to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">commit a felony, theft, or an assault.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) For purposes of this section, "enter" means to intrude:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) any part of the body; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) any physical object connected with the body.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) Except as provided in Subsection (c-1), (c-2), or (d), an</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense under this section is a:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) state jail felony if committed in a building other than a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">habitation; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) felony of the second degree if committed in a habitation.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(c-1) An offense under this section is a felony of the third degree</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the premises are a commercial building in which a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">controlled substance is generally stored, including a pharmacy, clinic,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">hospital, nursing facility, or warehouse; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the person entered or remained concealed in that building</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">with intent to commit a theft of a controlled substance.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(c-2) An offense under this section is a felony of the third degree</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the premises are a building other than a habitation; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) it is shown on the trial of the offense that the actor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page - 1 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">committed the offense in the course of committing an offense under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 20.05(a)(2).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) An offense under this section is a felony of the first degree</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the premises are a habitation; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) any party to the offense entered the habitation with</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">intent to commit a felony other than felony theft or committed or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">attempted to commit a felony other than felony theft.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 30.03. BURGLARY OF COIN-OPERATED OR COIN COLLECTION MACHINES.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense if, without the effective consent of</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the owner, he breaks or enters into any coin-operated machine, coin</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">collection machine, or other coin-operated or coin collection receptacle,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">contrivance, apparatus, or equipment used for the purpose of providing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">lawful amusement, sales of goods, services, or other valuable things, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">telecommunications with intent to obtain property or services.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) For purposes of this section, "entry" includes every kind of</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">entry except one made with the effective consent of the owner.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under this section is a Class A misdemeanor.</strong></p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 30.04. BURGLARY OF VEHICLES.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if, without the effective consent of the owner, he breaks into or enters</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a vehicle or any part of a vehicle with intent to commit any felony or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">theft.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) For purposes of this section, "enter" means to intrude:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) any part of the body; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) any physical object connected with the body.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) For purposes of this section, a container or trailer carried on</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a rail car is a part of the rail car.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) An offense under this section is a Class A misdemeanor, except</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the offense is a Class A misdemeanor with a minimum term</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of confinement of six months if it is shown on the trial of the offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that the defendant has been previously convicted of an offense under this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the offense is a state jail felony if:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) it is shown on the trial of the offense that the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">defendant has been previously convicted two or more times of an offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under this section; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the vehicle or part of the vehicle broken into or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">entered is a rail car; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the offense is a felony of the third degree if:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the vehicle broken into or entered is owned or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">operated by a wholesale distributor of prescription drugs and the actor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">breaks into or enters that vehicle with the intent to commit theft of a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">controlled substance; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) it is shown on the trial of the offense that the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor committed the offense in the course of committing an offense under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 20.05(a)(2).</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(d-1) For the purposes of Subsection (d), a defendant has been</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">previously convicted under this section if the defendant was adjudged</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -2 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">guilty of the offense or entered a plea of guilty or nolo contendere in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">return for a grant of deferred adjudication, regardless of whether the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">sentence for the offense was ever imposed or whether the sentence was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">probated and the defendant was subsequently discharged from community</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">supervision.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) It is a defense to prosecution under this section that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor entered a rail car or any part of a rail car and was at that time</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an employee or a representative of employees exercising a right under the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Railway Labor Act (45 U.S.C. Section 151 et seq.).</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 30.05. CRIMINAL TRESPASS.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense if</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the person enters or remains on or in property of another, including</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">residential land, agricultural land, a recreational vehicle park, a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">building, a general residential operation operating as a residential</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">treatment center, or an aircraft or other vehicle, without effective</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">consent and the person:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) had notice that the entry was forbidden; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) received notice to depart but failed to do so.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) For purposes of this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Entry" means the intrusion of the entire body.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Notice" means:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) oral or written communication by the owner or someone</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">with apparent authority to act for the owner;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) fencing or other enclosure obviously designed to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">exclude intruders or to contain livestock;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) a sign or signs posted on the property or at the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">entrance to the building, reasonably likely to come to the attention of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">intruders, indicating that entry is forbidden;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) the placement of identifying purple paint marks on</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">trees or posts on the property, provided that the marks are:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) vertical lines of not less than eight inches in</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">length and not less than one inch in width;</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) placed so that the bottom of the mark is not</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">less than three feet from the ground or more than five feet from the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">ground; and</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(iii) placed at locations that are readily visible</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to any person approaching the property and no more than:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) 100 feet apart on forest land; or</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) 1,000 feet apart on land other than forest</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">land; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(E) the visible presence on the property of a crop grown</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">for human consumption that is under cultivation, in the process of being</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">harvested, or marketable if harvested at the time of entry.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Shelter center" has the meaning assigned by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">51.002, Human Resources Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) "Forest land" means land on which the trees are</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">potentially valuable for timber products.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) "Agricultural land" has the meaning assigned by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">75.001, Civil Practice and Remedies Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) "Superfund site" means a facility that:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) is on the National Priorities List established under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -3 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 105 of the federal Comprehensive Environmental Response,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Compensation, and Liability Act of 1980 (42 U.S.C. Section 9605); or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) is listed on the state registry established under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 361.181, Health and Safety Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) "Critical infrastructure facility" means one of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">following, if completely enclosed by a fence or other physical barrier</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that is obviously designed to exclude intruders:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) a chemical manufacturing facility;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a refinery;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) an electrical power generating facility, substation,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">switching station, electrical control center, or electrical transmission</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or distribution facility;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) a water intake structure, water treatment facility,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">wastewater treatment plant, or pump station;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(E) a natural gas transmission compressor station;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(F) a liquid natural gas terminal or storage facility;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(G) a telecommunications central switching office;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(H) a port, railroad switching yard, trucking terminal,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or other freight transportation facility;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(I) a gas processing plant, including a plant used in the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">processing, treatment, or fractionation of natural gas; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(J) a transmission facility used by a federally licensed</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">radio or television station.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(8) "Protected freshwater area" has the meaning assigned by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 90.001, Parks and Wildlife Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(9) "Recognized state" means another state with which the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">attorney general of this state, with the approval of the governor of this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">state, negotiated an agreement after determining that the other state:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) has firearm proficiency requirements for peace</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">officers; and</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) fully recognizes the right of peace officers</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">commissioned in this state to carry weapons in the other state.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(10) "Recreational vehicle park" has the meaning assigned by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 13.087, Water Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(11) "Residential land" means real property improved by a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">dwelling and zoned for or otherwise authorized for single-family or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">multifamily use.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(12) "Institution of higher education" has the meaning</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">assigned by Section 61.003, Education Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(13) "General residential operation" has the meaning assigned</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by Section 42.002, Human Resources Code.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) A person may provide notice that firearms are prohibited on the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property by posting a sign at each entrance to the property that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) includes language that is identical to or substantially</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">similar to the following: "Pursuant to Section 30.05, Penal Code</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(criminal trespass), a person may not enter this property with a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">firearm";</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) includes the language described by Subdivision (1) in both</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">English and Spanish;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) appears in contrasting colors with block letters at least</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">one inch in height; and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -4 -</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) is displayed in a conspicuous manner clearly visible to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the public.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) Subject to Subsection (d-3), an offense under this section is:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a Class B misdemeanor, except as provided by Subdivisions</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(2), (3), and (4);</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a Class C misdemeanor, except as provided by Subdivisions</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) and (4), if the offense is committed:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) on agricultural land and within 100 feet of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">boundary of the land; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) on residential land and within 100 feet of a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">protected freshwater area;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a Class A misdemeanor, except as provided by Subdivision</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(4), if:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the offense is committed:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) in a habitation or a shelter center;</strong></p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) on a Superfund site; or</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(iii) on or in a critical infrastructure facility;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the offense is committed on or in property of an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">institution of higher education and it is shown on the trial of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense that the person has previously been convicted of:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) an offense under this section relating to</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">entering or remaining on or in property of an institution of higher</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">education; or</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">51.204(b)(1),</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Education Code, relating to trespassing on the grounds of an institution</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of higher education;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) the person carries a deadly weapon during the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">commission of the offense; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) the offense is committed on the property of or within</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a general residential operation operating as a residential treatment</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">center; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) a felony of the third degree if it is shown on the trial</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the offense that the defendant committed the offense in the course of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">committing an offense under Section 20.05(a)(2).</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(d-1) For the purposes of Subsection (d)(3)(B), a person has</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">previously been convicted of an offense described by that paragraph if</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the person was adjudged guilty of the offense or entered a plea of guilty</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or nolo contendere in return for a grant of deferred adjudication</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">community supervision, regardless of whether the sentence for the offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">was ever imposed or whether the sentence was probated and the person was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">subsequently discharged from deferred adjudication community supervision.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(d-2) At the punishment stage of a trial in which the attorney</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">representing the state seeks the increase in punishment provided by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (d)(3)(B), the defendant may raise the issue as to whether, at</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the time of the instant offense or the previous offense, the defendant</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">was engaging in speech or expressive conduct protected by the First</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Amendment to the United States Constitution or Section 8, Article I,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Texas Constitution. If the defendant proves the issue in the affirmative</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by a preponderance of the evidence, the increase in punishment provided</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by Subsection (d)(3)(B) does not apply.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(d-3) An offense under this section is a Class C misdemeanor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -5 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">punishable by a fine not to exceed $200 if the person enters the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property, land, or building with a firearm or other weapon and the sole</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">basis on which entry on the property or land or in the building was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">forbidden is that entry with a firearm or other weapon was forbidden,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">except that the offense is a Class A misdemeanor if it is shown on the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">trial of the offense that, after entering the property, land, or building</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">with the firearm or other weapon, the actor:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) personally received from the owner of the property or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">another person with apparent authority to act for the owner notice that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">entry with a firearm or other weapon was forbidden, as given through:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) notice under Subsection (b)(2)(A), including oral or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">written communication; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) if the actor is unable to reasonably understand the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">notice described by Paragraph (A), other personal notice that is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">reasonable under the circumstances; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) subsequently failed to depart.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) It is a defense to prosecution under this section that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor at the time of the offense was:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a firefighter or emergency medical services personnel, as</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">defined by Section 773.003, Health and Safety Code, acting in the lawful</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">discharge of an official duty under exigent circumstances;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a person who was:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) an employee or agent of:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) an electric utility, as defined by Section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">31.002, Utilities Code;</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) a telecommunications provider, as defined by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 51.002, Utilities Code;</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(iii) a video service provider or cable service</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">provider, as defined by Section 66.002, Utilities Code;</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(iv) a gas utility, as defined by Section 101.003,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Utilities Code, which for the purposes of this subsection includes a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">municipally owned utility as defined by that section;</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(v) a gas utility, as defined by Section 121.001,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Utilities Code;</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(vi) a pipeline used for the transportation or sale</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of oil, gas, or related products; or</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(vii) an electric cooperative or municipally owned</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">utility, as defined by Section 11.003, Utilities Code; and</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) performing a duty within the scope of that employment</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or agency; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a person who was:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) employed by or acting as agent for an entity that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">had, or that the person reasonably believed had, effective consent or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">authorization provided by law to enter the property; and</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) performing a duty within the scope of that employment</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or agency.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) It is a defense to prosecution under this section that:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the basis on which entry on the property or land or in the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">building was forbidden is that entry with a handgun was forbidden; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the person was carrying:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) a license issued under Subchapter H, Chapter 411,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -6 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Government Code, to carry a handgun; and</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a handgun:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) in a concealed manner; or</strong></p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) in a holster.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(f-1) It is a defense to prosecution under this section that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the basis on which entry on the property was forbidden is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that entry with a firearm or firearm ammunition was forbidden;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor is:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) an owner of an apartment in a condominium regime</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">governed by Chapter 81, Property Code;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) an owner of a condominium unit governed by Chapter</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">82, Property Code;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) a tenant or guest of an owner described by Paragraph</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) or (B); or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) a guest of a tenant of an owner described by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Paragraph (A) or (B);</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the actor:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) carries or stores a firearm or firearm ammunition in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the condominium apartment or unit owner's apartment or unit;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) carries a firearm or firearm ammunition directly en</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">route to or from the condominium apartment or unit owner's apartment or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">unit;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) carries a firearm or firearm ammunition directly en</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">route to or from the actor's vehicle located in a parking area provided</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">for residents or guests of the condominium property; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) carries or stores a firearm or firearm ammunition in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the actor's vehicle located in a parking area provided for residents or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">guests of the condominium property; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) the actor is not otherwise prohibited by law from</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">possessing a firearm or firearm ammunition.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(f-2) It is a defense to prosecution under this section that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the basis on which entry on a leased premises governed by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Chapter 92, Property Code, was forbidden is that entry with a firearm or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">firearm ammunition was forbidden;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor is a tenant of the leased premises or the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">tenant's guest;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the actor:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) carries or stores a firearm or firearm ammunition in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the tenant's rental unit;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) carries a firearm or firearm ammunition directly en</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">route to or from the tenant's rental unit;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) carries a firearm or firearm ammunition directly en</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">route to or from the actor's vehicle located in a parking area provided</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">for tenants or guests by the landlord of the leased premises; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) carries or stores a firearm or firearm ammunition in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the actor's vehicle located in a parking area provided for tenants or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">guests by the landlord of the leased premises; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) the actor is not otherwise prohibited by law from</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">possessing a firearm or firearm ammunition.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(f-3) It is a defense to prosecution under this section that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the basis on which entry on a leased premises governed by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -7 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Chapter 94, Property Code, was forbidden is that entry with a firearm or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">firearm ammunition was forbidden;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor is a tenant of a manufactured home lot or the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">tenant's guest;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the actor:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) carries or stores a firearm or firearm ammunition in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the tenant's manufactured home;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) carries a firearm or firearm ammunition directly en</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">route to or from the tenant's manufactured home;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) carries a firearm or firearm ammunition directly en</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">route to or from the actor's vehicle located in a parking area provided</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">for tenants or tenants' guests by the landlord of the leased premises; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) carries or stores a firearm or firearm ammunition in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the actor's vehicle located in a parking area provided for tenants or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">tenants' guests by the landlord of the leased premises; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) the actor is not otherwise prohibited by law from</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">possessing a firearm or firearm ammunition.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(f-4) It is a defense to prosecution under this section that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the conduct occurred on hotel property, and the basis on</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">which entry on that property was forbidden is that entry with a firearm</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or firearm ammunition was forbidden;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor is a guest of a hotel, as defined by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">2155.101, Occupations Code; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the actor:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) carries or stores a firearm or firearm ammunition in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the actor's hotel room;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) carries a firearm or firearm ammunition directly en</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">route to or from the hotel or the actor's hotel room;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) carries a firearm or firearm ammunition directly en</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">route to or from the actor's vehicle located on the hotel property,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">including a vehicle in a parking area provided for hotel guests; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) carries or stores a firearm or firearm ammunition in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the actor's vehicle located on the hotel property, including a vehicle in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a parking area provided for hotel guests.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(g) It is a defense to prosecution under this section that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor entered a railroad switching yard or any part of a railroad</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">switching yard and was at that time an employee or a representative of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">employees exercising a right under the Railway Labor Act (45 U.S.C.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 151 et seq.).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(h) At the punishment stage of a trial in which the attorney</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">representing the state seeks the increase in punishment provided by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (d)(3)(A)(iii), the defendant may raise the issue as to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">whether the defendant entered or remained on or in a critical</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">infrastructure facility as part of a peaceful or lawful assembly,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">including an attempt to exercise rights guaranteed by state or federal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">labor laws. If the defendant proves the issue in the affirmative by a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">preponderance of the evidence, the increase in punishment provided by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (d)(3)(A)(iii) does not apply.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Text of subsection effective until January 01, 2025</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) This section does not apply if:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the basis on which entry on the property or land or in the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -8 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">building was forbidden is that entry with a handgun or other weapon was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">forbidden; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor at the time of the offense was a peace officer,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">including a commissioned peace officer of a recognized state, or a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">special investigator under Article 2.122, Code of Criminal Procedure,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">regardless of whether the peace officer or special investigator was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">engaged in the actual discharge of an official duty while carrying the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">weapon.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Text of subsection effective on January 01, 2025</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) This section does not apply if:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the basis on which entry on the property or land or in the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">building was forbidden is that entry with a handgun or other weapon was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">forbidden; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor at the time of the offense was a peace officer,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">including a commissioned peace officer of a recognized state, or a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">special investigator under Article 2A.002, Code of Criminal Procedure,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">regardless of whether the peace officer or special investigator was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">engaged in the actual discharge of an official duty while carrying the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">weapon.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 30.06. TRESPASS BY LICENSE HOLDER WITH A CONCEALED HANDGUN.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">A license holder commits an offense if the license holder:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) carries a concealed handgun under the authority of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subchapter H, Chapter 411, Government Code, on property of another</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">without effective consent; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) received notice that entry on the property by a license</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">holder with a concealed handgun was forbidden.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) For purposes of this section, a person receives notice if the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">owner of the property or someone with apparent authority to act for the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">owner provides notice to the person by oral or written communication.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Entry" has the meaning assigned by Section 30.05(b).</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "License holder" has the meaning assigned by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">46.03.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Written communication" means:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) a card or other document on which is written language</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">identical to the following: "Pursuant to Section 30.06, Penal Code</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(trespass by license holder with a concealed handgun), a person licensed</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under Subchapter H, Chapter 411, Government Code (handgun licensing law),</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">may not enter this property with a concealed handgun"; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a sign posted on the property that:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) includes the language described by Paragraph (A)</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">in both English and Spanish;</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) appears in contrasting colors with block</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">letters at least one inch in height; and</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(iii) is displayed in a conspicuous manner clearly</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">visible to the public.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) An offense under this section is a Class C misdemeanor</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">punishable by a fine not to exceed $200, except that the offense is a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Class A misdemeanor if it is shown on the trial of the offense that,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">after entering the property, the license holder was personally given the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -9 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">notice by oral communication described by Subsection (b) and subsequently</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">failed to depart.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) It is an exception to the application of this section that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property on which the license holder carries a handgun is owned or leased</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by a governmental entity and is not a premises or other place on which</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the license holder is prohibited from carrying the handgun under Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">46.03.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(e-1) It is a defense to prosecution under this section that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the license holder is:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) an owner of an apartment in a condominium regime</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">governed by Chapter 81, Property Code;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) an owner of a condominium unit governed by Chapter</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">82, Property Code;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) a tenant or guest of an owner described by Paragraph</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) or (B); or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) a guest of a tenant of an owner described by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Paragraph (A) or (B); and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the license holder:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) carries or stores a handgun in the condominium</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">apartment or unit owner's apartment or unit;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) carries a handgun directly en route to or from the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">condominium apartment or unit owner's apartment or unit;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) carries a handgun directly en route to or from the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">license holder's vehicle located in a parking area provided for residents</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or guests of the condominium property; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) carries or stores a handgun in the license holder's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">vehicle located in a parking area provided for residents or guests of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">condominium property.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(e-2) It is a defense to prosecution under this section that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the license holder is a tenant of a leased premises</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">governed by Chapter 92, Property Code, or the tenant's guest; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the license holder:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) carries or stores a handgun in the tenant's rental</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">unit;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) carries a handgun directly en route to or from the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">tenant's rental unit;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) carries a handgun directly en route to or from the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">license holder's vehicle located in a parking area provided for tenants</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or guests by the landlord of the leased premises; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) carries or stores a handgun in the license holder's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">vehicle located in a parking area provided for tenants or guests by the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">landlord of the leased premises.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(e-3) It is a defense to prosecution under this section that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the license holder is a tenant of a manufactured home lot</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">governed by Chapter 94, Property Code, or the tenant's guest; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the license holder:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) carries or stores a handgun in the tenant's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">manufactured home;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) carries a handgun directly en route to or from the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">tenant's manufactured home;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) carries a handgun directly en route to or from the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -10 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">license holder's vehicle located in a parking area provided for tenants</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or tenants' guests by the landlord of the leased premises; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) carries or stores a handgun in the license holder's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">vehicle located in a parking area provided for tenants or tenants' guests</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by the landlord of the leased premises.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(e-4) It is a defense to prosecution under this section that the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">license holder is a guest of a hotel, as defined by Section 2155.101,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Occupations Code, and the license holder:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) carries or stores a handgun in the license holder's hotel</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">room;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) carries a handgun directly en route to or from the hotel</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or the license holder's hotel room;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) carries a handgun directly en route to or from the license</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">holder's vehicle located on the hotel property, including a vehicle in a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">parking area provided for hotel guests; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) carries or stores a handgun in the license holder's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">vehicle located on the hotel property, including a vehicle in a parking</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">area provided for hotel guests.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) It is a defense to prosecution under this section that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">license holder is volunteer emergency services personnel, as defined by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 46.01.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(f-1) It is a defense to prosecution under this section that the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">license holder is a first responder, as defined by Section 46.01, who:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) holds an unexpired certificate of completion under Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">411.1883, Government Code, at the time of engaging in the applicable</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conduct;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) was engaged in the actual discharge of the first</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">responder's duties while carrying the handgun; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) was employed or supervised by a municipality or county to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">which Chapter 179, Local Government Code, applies.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(g) It is a defense to prosecution under this section that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">license holder was personally given notice by oral communication</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">described by Subsection (b) and promptly departed from the property.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 30.07. TRESPASS BY LICENSE HOLDER WITH AN OPENLY CARRIED HANDGUN.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A license holder commits an offense if the license holder:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) openly carries a handgun under the authority of Subchapter</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">H, Chapter 411, Government Code, on property of another without effective</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">consent; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) received notice that entry on the property by a license</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">holder openly carrying a handgun was forbidden.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) For purposes of this section, a person receives notice if the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">owner of the property or someone with apparent authority to act for the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">owner provides notice to the person by oral or written communication.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Entry" has the meaning assigned by Section 30.05(b).</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "License holder" has the meaning assigned by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">46.03.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Written communication" means:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) a card or other document on which is written language</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">identical to the following: "Pursuant to Section 30.07, Penal Code</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -11 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(trespass by license holder with an openly carried handgun), a person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">licensed under Subchapter H, Chapter 411, Government Code (handgun</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">licensing law), may not enter this property with a handgun that is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">carried openly"; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a sign posted on the property that:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) includes the language described by Paragraph (A)</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">in both English and Spanish;</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) appears in contrasting colors with block</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">letters at least one inch in height; and</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(iii) is displayed in a conspicuous manner clearly</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">visible to the public at each entrance to the property.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) An offense under this section is a Class C misdemeanor</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">punishable by a fine not to exceed $200, except that the offense is a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Class A misdemeanor if it is shown on the trial of the offense that,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">after entering the property, the license holder was personally given the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">notice by oral communication described by Subsection (b) and subsequently</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">failed to depart.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) It is an exception to the application of this section that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property on which the license holder openly carries the handgun is owned</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or leased by a governmental entity and is not a premises or other place</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">on which the license holder is prohibited from carrying the handgun under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 46.03.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(e-1) It is a defense to prosecution under this section that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the license holder is:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) an owner of an apartment in a condominium regime</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">governed by Chapter 81, Property Code;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) an owner of a condominium unit governed by Chapter</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">82, Property Code;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) a tenant or guest of an owner described by Paragraph</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) or (B); or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) a guest of a tenant of an owner described by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Paragraph (A) or (B); and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the license holder:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) carries or stores a handgun in the condominium</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">apartment or unit owner's apartment or unit;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) carries a handgun directly en route to or from the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">condominium apartment or unit owner's apartment or unit;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) carries a handgun directly en route to or from the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">license holder's vehicle located in a parking area provided for residents</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or guests of the condominium property; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) carries or stores a handgun in the license holder's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">vehicle located in a parking area provided for residents or guests of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">condominium property.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(e-2) It is a defense to prosecution under this section that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the license holder is a tenant of a leased premises</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">governed by Chapter 92, Property Code, or the tenant's guest; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the license holder:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) carries or stores a handgun in the tenant's rental</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">unit;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) carries a handgun directly en route to or from the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">tenant's rental unit;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -12 -</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) carries a handgun directly en route to or from the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">license holder's vehicle located in a parking area provided for tenants</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or guests by the landlord of the leased premises; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) carries or stores a handgun in the license holder's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">vehicle located in a parking area provided for tenants or guests by the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">landlord of the leased premises.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(e-3) It is a defense to prosecution under this section that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the license holder is a tenant of a manufactured home lot</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">governed by Chapter 94, Property Code, or the tenant's guest; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the license holder:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) carries or stores a handgun in the tenant's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">manufactured home;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) carries a handgun directly en route to or from the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">tenant's manufactured home;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) carries a handgun directly en route to or from the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">license holder's vehicle located in a parking area provided for tenants</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or tenants' guests by the landlord of the leased premises; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) carries or stores a handgun in the license holder's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">vehicle located in a parking area provided for tenants or tenants' guests</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by the landlord of the leased premises.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(e-4) It is a defense to prosecution under this section that the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">license holder is a guest of a hotel, as defined by Section 2155.101,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Occupations Code, and the license holder:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) carries or stores a handgun in the license holder's hotel</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">room;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) carries a handgun directly en route to or from the hotel</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or the license holder's hotel room;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) carries a handgun directly en route to or from the license</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">holder's vehicle located on the hotel property, including a vehicle in a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">parking area provided for hotel guests; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) carries or stores a handgun in the license holder's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">vehicle located on the hotel property, including a vehicle in a parking</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">area provided for hotel guests.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) It is not a defense to prosecution under this section that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">handgun was carried in a holster.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(g) It is a defense to prosecution under this section that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">license holder is volunteer emergency services personnel, as defined by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 46.01.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(g-1) It is a defense to prosecution under this section that the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">license holder is a first responder, as defined by Section 46.01, who:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) holds an unexpired certificate of completion under Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">411.1883, Government Code, at the time of engaging in the applicable</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conduct;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) was engaged in the actual discharge of the first</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">responder's duties while carrying the handgun; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) was employed or supervised by a municipality or county to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">which Chapter 179, Local Government Code, applies.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(h) It is a defense to prosecution under this section that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">license holder was personally given notice by oral communication</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">described by Subsection (b) and promptly departed from the property.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -13 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">PENAL CODE</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">TITLE 7. OFFENSES AGAINST PROPERTY</p>
</div>
`
    },
    
    {
        category: 'Penal Code',
        title: "Chapter 31 - Theft",
        content: `
<h1 style="color: #4fc3f7; font-size: 32px; margin-bottom: 15px;">Chapter 31</h1>
<h2 style="color: #b0b0b0; font-size: 22px; font-weight: normal; margin-bottom: 30px;">Theft</h2>

<div style="background: linear-gradient(to right, rgba(79, 195, 247, 0.25), rgba(79, 195, 247, 0.05)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4fc3f7; border-radius: 5px;">
    <h3 style="color: #4fc3f7; margin: 0 0 10px 0; font-size: 18px;">📖 Quick Summary</h3>
    <p style="font-size: 17px; line-height: 1.7; margin: 0; color: #e0e0e0;">Theft - value ranges</p>
</div>

<div style="background: linear-gradient(to right, rgba(255, 193, 7, 0.2), rgba(255, 193, 7, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #ffc107; border-radius: 5px;">
    <h3 style="color: #ffc107; margin: 0 0 15px 0; font-size: 18px;">⚡ Must Know</h3>
    <ul style="margin: 0; padding-left: 20px; color: #e0e0e0;">
        <li style="margin: 8px 0; font-size: 16px;">Theft = appropriation without consent</li>
    </ul>
</div>

<div style="background: linear-gradient(to right, rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4caf50; border-radius: 5px;">
    <h3 style="color: #4caf50; margin: 0 0 10px 0; font-size: 18px;">🔑 Key Terms</h3>
    <p style="margin: 0; font-size: 15px;"><strong style='color: #4caf50;'>Appropriation</strong></p>
</div>

<hr style="border: none; border-top: 2px solid #444; margin: 35px 0;">

<h2 style="color: #4fc3f7; font-size: 24px; margin-bottom: 25px;">📋 Sections</h2>


<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 31.01. DEFINITIONS.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">In this chapter:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Deception" means:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) creating or confirming by words or conduct a false</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">impression of law or fact that is likely to affect the judgment of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">another in the transaction, and that the actor does not believe to be</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">true;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) failing to correct a false impression of law or fact</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that is likely to affect the judgment of another in the transaction, that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the actor previously created or confirmed by words or conduct, and that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the actor does not now believe to be true;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) preventing another from acquiring information likely</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to affect his judgment in the transaction;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) selling or otherwise transferring or encumbering</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property without disclosing a lien, security interest, adverse claim, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other legal impediment to the enjoyment of the property, whether the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">lien, security interest, claim, or impediment is or is not valid, or is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or is not a matter of official record; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(E) promising performance that is likely to affect the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">judgment of another in the transaction and that the actor does not intend</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to perform or knows will not be performed, except that failure to perform</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the promise in issue without other evidence of intent or knowledge is not</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">sufficient proof that the actor did not intend to perform or knew the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">promise would not be performed.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Deprive" means:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) to withhold property from the owner permanently or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">for so extended a period of time that a major portion of the value or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">enjoyment of the property is lost to the owner;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) to restore property only upon payment of reward or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other compensation; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) to dispose of property in a manner that makes</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">recovery of the property by the owner unlikely.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Effective consent" includes consent by a person legally</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">authorized to act for the owner. Consent is not effective if:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) induced by deception or coercion;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) given by a person the actor knows is not legally</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">authorized to act for the owner;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) given by a person who by reason of youth, mental</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">disease or defect, or intoxication is known by the actor to be unable to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">make reasonable property dispositions;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) given solely to detect the commission of an offense;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(E) given by a person who by reason of advanced age is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">known by the actor to have a diminished capacity to make informed and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">rational decisions about the reasonable disposition of property.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) "Appropriate" means:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) to bring about a transfer or purported transfer of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">title to or other nonpossessory interest in property, whether to the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor or another; or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page - 1 -</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) to acquire or otherwise exercise control over</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property other than real property.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) "Property" means:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) real property;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) tangible or intangible personal property including</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">anything severed from land; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) a document, including money, that represents or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">embodies anything of value.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) "Service" includes:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) labor and professional service;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) telecommunication, public utility, or transportation</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">service;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) lodging, restaurant service, and entertainment; and</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) the supply of a motor vehicle or other property for</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">use.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) "Steal" means to acquire property or service by theft.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(8) "Certificate of title" has the meaning assigned by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">501.002, Transportation Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(9) "Used or secondhand motor vehicle" means a used motor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">vehicle, as that term is defined by Section 501.002, Transportation Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(10) "Elderly individual" has the meaning assigned by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">22.04(c).</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(11) "Retail merchandise" means one or more items of tangible</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">personal property displayed, held, stored, or offered for sale in a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">retail establishment.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(12) "Retail theft detector" means an electrical, mechanical,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">electronic, or magnetic device used to prevent or detect shoplifting and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">includes any article or component part essential to the proper operation</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the device.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(13) "Shielding or deactivation instrument" means any item or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">tool designed, made, or adapted for the purpose of preventing the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">detection of stolen merchandise by a retail theft detector. The term</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">includes a metal-lined or foil-lined shopping bag and any item used to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">remove a security tag affixed to retail merchandise.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(14) "Fire exit alarm" has the meaning assigned by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">793.001, Health and Safety Code.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 31.02. CONSOLIDATION OF THEFT OFFENSES.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Theft as defined in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 31.03 constitutes a single offense superseding the separate</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offenses previously known as theft, theft by false pretext, conversion by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a bailee, theft from the person, shoplifting, acquisition of property by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">threat, swindling, swindling by worthless check, embezzlement, extortion,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">receiving or concealing embezzled property, and receiving or concealing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">stolen property.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 31.03. THEFT.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">A person commits an offense if he</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">unlawfully appropriates property with intent to deprive the owner of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) Appropriation of property is unlawful if:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) it is without the owner's effective consent;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the property is stolen and the actor appropriates the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -2 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property knowing it was stolen by another; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) property in the custody of any law enforcement agency was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">explicitly represented by any law enforcement agent to the actor as being</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">stolen and the actor appropriates the property believing it was stolen by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">another.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) For purposes of Subsection (b):</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) evidence that the actor has previously participated in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">recent transactions other than, but similar to, the transaction for which</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the prosecution is based is admissible for the purpose of showing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">knowledge or intent and the issues of knowledge or intent are raised by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the actor's plea of not guilty;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the testimony of an accomplice shall be corroborated by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">proof that tends to connect the actor to the crime, but the actor's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">knowledge or intent may be established by the uncorroborated testimony of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the accomplice;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) an actor engaged in the business of buying and selling</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">used or secondhand personal property, or lending money on the security of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">personal property deposited with the actor, is presumed to know upon</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">receipt by the actor of stolen property (other than a motor vehicle</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">subject to Chapter 501, Transportation Code) that the property has been</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">previously stolen from another if the actor pays for or loans against the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property $25 or more (or consideration of equivalent value) and the actor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">knowingly or recklessly:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) fails to record the name, address, and physical</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">description or identification number of the seller or pledgor;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) fails to record a complete description of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property, including the serial number, if reasonably available, or other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">identifying characteristics; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) fails to obtain a signed warranty from the seller or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">pledgor that the seller or pledgor has the right to possess the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property. It is the express intent of this provision that the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">presumption arises unless the actor complies with each of the numbered</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">requirements;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) for the purposes of Subdivision (3)(A), "identification</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">number" means driver's license number, military identification number,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">identification certificate, or other official number capable of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">identifying an individual;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) stolen property does not lose its character as stolen when</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">recovered by any law enforcement agency;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) an actor engaged in the business of obtaining abandoned or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">wrecked motor vehicles or parts of an abandoned or wrecked motor vehicle</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">for resale, disposal, scrap, repair, rebuilding, demolition, or other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">form of salvage is presumed to know on receipt by the actor of stolen</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property that the property has been previously stolen from another if the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor knowingly or recklessly:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) fails to maintain an accurate and legible inventory</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of each motor vehicle component part purchased by or delivered to the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor, including the date of purchase or delivery, the name, age,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">address, sex, and driver's license number of the seller or person making</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the delivery, the license plate number of the motor vehicle in which the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">part was delivered, a complete description of the part, and the vehicle</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -3 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">identification number of the motor vehicle from which the part was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">removed, or in lieu of maintaining an inventory, fails to record the name</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and certificate of inventory number of the person who dismantled the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">motor vehicle from which the part was obtained;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) fails on receipt of a motor vehicle to obtain a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">certificate of authority, sales receipt, or transfer document as required</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by Chapter 683, Transportation Code, or a certificate of title showing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that the motor vehicle is not subject to a lien or that all recorded</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">liens on the motor vehicle have been released; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) fails on receipt of a motor vehicle to immediately</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">remove an unexpired license plate from the motor vehicle, to keep the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">plate in a secure and locked place, or to maintain an inventory, on forms</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">provided by the Texas Department of Motor Vehicles, of license plates</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">kept under this paragraph, including for each plate or set of plates the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">license plate number and the make, motor number, and vehicle</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">identification number of the motor vehicle from which the plate was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">removed;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) an actor who purchases or receives a used or secondhand</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">motor vehicle is presumed to know on receipt by the actor of the motor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">vehicle that the motor vehicle has been previously stolen from another if</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the actor knowingly or recklessly:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) fails to report to the Texas Department of Motor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Vehicles the failure of the person who sold or delivered the motor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">vehicle to the actor to deliver to the actor a properly executed</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">certificate of title to the motor vehicle at the time the motor vehicle</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">was delivered; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) fails to file with the county tax assessor-collector</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the county in which the actor received the motor vehicle, not later</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">than the 20th day after the date the actor received the motor vehicle,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the registration license receipt and certificate of title or evidence of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">title delivered to the actor in accordance with Subchapter D, Chapter</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">520, Transportation Code, at the time the motor vehicle was delivered;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(8) an actor who purchases or receives from any source other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">than a licensed retailer or distributor of pesticides a restricted-use</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">pesticide or a state-limited-use pesticide or a compound, mixture, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">preparation containing a restricted-use or state-limited-use pesticide is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">presumed to know on receipt by the actor of the pesticide or compound,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">mixture, or preparation that the pesticide or compound, mixture, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">preparation has been previously stolen from another if the actor:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) fails to record the name, address, and physical</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">description of the seller or pledgor;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) fails to record a complete description of the amount</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and type of pesticide or compound, mixture, or preparation purchased or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">received; and</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) fails to obtain a signed warranty from the seller or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">pledgor that the seller or pledgor has the right to possess the property;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(9) an actor who is subject to Section 409, Packers and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Stockyards Act (7 U.S.C. Section 228b), that obtains livestock from a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">commission merchant by representing that the actor will make prompt</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">payment is presumed to have induced the commission merchant's consent by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">deception if the actor fails to make full payment in accordance with</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -4 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 409, Packers and Stockyards Act (7 U.S.C. Section 228b); and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(10) an actor in possession of property consisting of one or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">more catalytic converters that have been removed from a motor vehicle is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">presumed to have unlawfully appropriated the property unless the actor:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) is the owner, as defined by Section 601.002,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Transportation Code, of each vehicle from which the catalytic converters</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">were removed; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) possesses the catalytic converters in the ordinary</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">course of the actor's business, including in the ordinary course of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">business of an entity described by Section 1956.123(1), Occupations Code.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) It is not a defense to prosecution under this section that:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the offense occurred as a result of a deception or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">strategy on the part of a law enforcement agency, including the use of an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">undercover operative or peace officer;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor was provided by a law enforcement agency with a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">facility in which to commit the offense or an opportunity to engage in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conduct constituting the offense; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the actor was solicited to commit the offense by a peace</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">officer, and the solicitation was of a type that would encourage a person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">predisposed to commit the offense to actually commit the offense, but</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">would not encourage a person not predisposed to commit the offense to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actually commit the offense.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) Except as provided by Subsections (f) and (f-1), an offense</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under this section is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a Class C misdemeanor if the value of the property stolen</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is less than $100;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a Class B misdemeanor if:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the value of the property stolen is $100 or more but</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">less than $750;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the value of the property stolen is less than $100</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and the defendant has previously been convicted of any grade of theft; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) the property stolen is a driver's license, commercial</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">driver's license, or personal identification certificate issued by this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">state or another state;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a Class A misdemeanor if the value of the property stolen</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is $750 or more but less than $2,500;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) a state jail felony if:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the value of the property stolen is $2,500 or more</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">but less than $30,000, or the property is less than 10 head of sheep,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">swine, or goats or any part thereof under the value of $30,000;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) regardless of value, the property is stolen from the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person of another or from a human corpse or grave, including property</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that is a military grave marker;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) the property stolen is a firearm;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) the value of the property stolen is less than $2,500</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and the defendant has been previously convicted two or more times of any</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">grade of theft;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(E) the property stolen is an official ballot or official</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">carrier envelope for an election;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(F) the value of the property stolen is less than $20,000</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and the property stolen is:</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -5 -</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) aluminum;</strong></p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) bronze;</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(iii) copper; or</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(iv) brass; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(G) the cost of replacing the property stolen is less</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">than $30,000 and the property stolen is a catalytic converter;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) a felony of the third degree if the value of the property</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">stolen is $30,000 or more but less than $150,000, or the property is:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) cattle, horses, or exotic livestock or exotic fowl as</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">defined by Section 142.001, Agriculture Code, stolen during a single</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">transaction and having an aggregate value of less than $150,000;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) 10 or more head of sheep, swine, or goats stolen</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">during a single transaction and having an aggregate value of less than</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">$150,000; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) a controlled substance, having a value of less than</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">$150,000, if stolen from:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) a commercial building in which a controlled</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">substance is generally stored, including a pharmacy, clinic, hospital,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">nursing facility, or warehouse; or</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) a vehicle owned or operated by a wholesale</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">distributor of prescription drugs;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) a felony of the second degree if:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the value of the property stolen is $150,000 or more</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">but less than $300,000; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the value of the property stolen is less than</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">$300,000 and the property stolen is an automated teller machine or the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">contents or components of an automated teller machine; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) a felony of the first degree if the value of the property</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">stolen is $300,000 or more.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) An offense described for purposes of punishment by Subsections</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(e)(1)-(6) is increased to the next higher category of offense if it is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">shown on the trial of the offense that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the actor was a public servant at the time of the offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and the property appropriated came into the actor's custody, possession,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or control by virtue of his status as a public servant;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor was in a contractual relationship with</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">government at the time of the offense and the property appropriated came</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">into the actor's custody, possession, or control by virtue of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">contractual relationship;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the owner of the property appropriated was at the time of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the offense:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) an elderly individual; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a nonprofit organization;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) the actor was a Medicare provider in a contractual</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">relationship with the federal government at the time of the offense and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the property appropriated came into the actor's custody, possession, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">control by virtue of the contractual relationship; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) during the commission of the offense, the actor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">intentionally, knowingly, or recklessly:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) caused a fire exit alarm to sound or otherwise become</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">activated;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -6 -</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) deactivated or otherwise prevented a fire exit alarm</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or retail theft detector from sounding; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) used a shielding or deactivation instrument to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">prevent or attempt to prevent detection of the offense by a retail theft</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">detector.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(f-1) An offense described for purposes of punishment by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsections (e)(4)-(6) is increased to the next higher category of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense if it is shown on the trial of the offense that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the property stolen is a catalytic converter; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor possessed a firearm during the commission of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(g) For the purposes of Subsection (a), a person is the owner of</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">exotic livestock or exotic fowl as defined by Section 142.001,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Agriculture Code, only if the person qualifies to claim the animal under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 142.0021, Agriculture Code, if the animal is an estray.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(h) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Restricted-use pesticide" means a pesticide classified as</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a restricted-use pesticide by the administrator of the Environmental</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Protection Agency under 7 U.S.C. Section 136a, as that law existed on</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">January 1, 1995, and containing an active ingredient listed in the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">federal regulations adopted under that law (40 C.F.R. Section 152.175)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and in effect on that date.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "State-limited-use pesticide" means a pesticide classified</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">as a state-limited-use pesticide by the Department of Agriculture under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 76.003, Agriculture Code, as that section existed on January 1,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">1995, and containing an active ingredient listed in the rules adopted</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under that section (4 TAC Section 7.24) as that section existed on that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">date.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Nonprofit organization" means an organization that is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">exempt from federal income taxation under Section 501(a), Internal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Revenue Code of 1986, by being described as an exempt organization by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 501(c)(3) of that code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) "Automated teller machine" means an unstaffed electronic</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">information processing device that, at the request of a user, performs a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">financial transaction through the direct transmission of electronic</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">impulses to a financial institution or through the recording of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">electronic impulses or other indicia of a transaction for delayed</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">transmission to a financial institution. The term includes an automated</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">banking machine.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) "Controlled substance" has the meaning assigned by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">481.002, Health and Safety Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) "Wholesale distributor of prescription drugs" means a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">wholesale distributor, as defined by Section 431.401, Health and Safety</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) "Catalytic converter" means a catalytic converter and any</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">material removed from the catalytic converter.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(8) "Firearm" has the meaning assigned by Section 46.01.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) For purposes of Subsection (c)(9), "livestock" and "commission</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">merchant" have the meanings assigned by Section 147.001, Agriculture</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Code.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(j) With the consent of the appropriate local county or district</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -7 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">attorney, the attorney general has concurrent jurisdiction with that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">consenting local prosecutor to prosecute an offense under this section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that involves the state Medicaid program.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 31.04. THEFT OF SERVICE.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits theft of</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">service if, with intent to avoid payment for service that the actor knows</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is provided only for compensation:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the actor intentionally or knowingly secures performance</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the service by deception, threat, or false token;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) having control over the disposition of services of another</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to which the actor is not entitled, the actor intentionally or knowingly</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">diverts the other's services to the actor's own benefit or to the benefit</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of another not entitled to the services;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) having control of personal property under a written rental</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">agreement, the actor holds the property beyond the expiration of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">rental period without the effective consent of the owner of the property,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">thereby depriving the owner of the property of its use in further</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">rentals; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) the actor intentionally or knowingly secures the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">performance of the service by agreeing to provide compensation and, after</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the service is rendered, fails to make full payment after receiving</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">notice demanding payment.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) For purposes of this section, intent to avoid payment is</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">presumed if any of the following occurs:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the actor absconded without paying for the service or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">expressly refused to pay for the service in circumstances where payment</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is ordinarily made immediately upon rendering of the service, as in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">hotels, campgrounds, recreational vehicle parks, restaurants, and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">comparable establishments;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the actor failed to make payment under a service agreement</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">within 10 days after receiving notice demanding payment;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the actor returns property held under a rental agreement</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">after the expiration of the rental agreement and fails to pay the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">applicable rental charge for the property within 10 days after the date</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">on which the actor received notice demanding payment;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) the actor failed to return the property held under a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">rental agreement:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) within five days after receiving notice demanding</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">return, if the property is valued at less than $2,500;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) within three days after receiving notice demanding</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">return, if the property is valued at $2,500 or more but less than</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">$10,000; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) within two days after receiving notice demanding</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">return, if the property is valued at $10,000 or more; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) the actor:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) failed to return the property held under an agreement</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">described by Subsections (d-2)(1)-(3) within five business days after</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">receiving notice demanding return; and</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) has made fewer than three complete payments under the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">agreement.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) For purposes of Subsections (a)(4), (b)(2), (b)(4), and (b)(5),</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -8 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">notice must be:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) in writing;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) sent by:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) registered or certified mail with return receipt</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">requested; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) commercial delivery service; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) sent to the actor using the actor's mailing address shown</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">on:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the rental agreement or service agreement;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) records of the person whose service was secured; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) if the actor secured performance of service by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">issuing or passing a check or similar sight order for the payment of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">money, using the actor's address shown on:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) the check or order; or</strong></p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) the records of the bank or other drawee on</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">which the check or order is drawn.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) Except as otherwise provided by this subsection, if written</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">notice is given in accordance with Subsection (c), it is presumed that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the notice was received not later than two days after the notice was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">sent. For purposes of Subsections (b)(4)(A) and (B) and (b)(5), if</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">written notice is given in accordance with Subsection (c), it is presumed</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that the notice was received not later than five days after the notice</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">was sent.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(d-1) For purposes of Subsection (a)(2), the diversion of services</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to the benefit of a person who is not entitled to those services includes</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the disposition of personal property by an actor having control of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property under an agreement described by Subsections (d-2)(1)-(3), if the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor disposes of the property in violation of the terms of the agreement</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and to the benefit of any person who is not entitled to the property.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(d-2) For purposes of Subsection (a)(3), the term "written rental</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">agreement" does not include an agreement that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) permits an individual to use personal property for</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">personal, family, or household purposes for an initial rental period;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) is automatically renewable with each payment after the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">initial rental period; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) permits the individual to become the owner of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(d-3) For purposes of Subsection (a)(4):</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) if the compensation is or was to be paid on a periodic</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">basis, the intent to avoid payment for a service may be formed at any</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">time during or before a pay period;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the partial payment of wages alone is not sufficient</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">evidence to negate the actor's intent to avoid payment for a service; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the term "service" does not include leasing personal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property under an agreement described by Subsections (d-2)(1)-(3).</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(d-4) A presumption established under Subsection (b) involving a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">defendant's failure to return property held under an agreement described</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by Subsections (d-2)(1)-(3) may be refuted if the defendant shows that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the defendant:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) intended to return the property; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) was unable to return the property.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -9 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(d-5) For purposes of Subsection (b)(5), "business day" means a day</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other than Sunday or a state or federal holiday.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) An offense under this section is:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a Class C misdemeanor if the value of the service stolen</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is less than $100;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a Class B misdemeanor if the value of the service stolen</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is $100 or more but less than $750;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a Class A misdemeanor if the value of the service stolen</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is $750 or more but less than $2,500;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) a state jail felony if the value of the service stolen is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">$2,500 or more but less than $30,000;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) a felony of the third degree if the value of the service</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">stolen is $30,000 or more but less than $150,000;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) a felony of the second degree if the value of the service</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">stolen is $150,000 or more but less than $300,000; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) a felony of the first degree if the value of the service</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">stolen is $300,000 or more.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) Notwithstanding any other provision of this code, any police or</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other report of stolen vehicles by a political subdivision of this state</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">shall include on the report any rental vehicles whose renters have been</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">shown to such reporting agency to be in violation of Subsection (b)(2)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and shall indicate that the renting agency has complied with the notice</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">requirements demanding return as provided in this section.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(g) It is a defense to prosecution under this section that:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the defendant secured the performance of the service by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">giving a post-dated check or similar sight order to the person performing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the service; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the person performing the service or any other person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">presented the check or sight order for payment before the date on the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">check or sight order.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 31.06. PRESUMPTION FOR THEFT BY CHECK OR SIMILAR SIGHT ORDER.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) If the actor obtained property or secured performance of service by</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">issuing or passing a check or similar sight order for the payment of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">money, when the issuer did not have sufficient funds in or on deposit</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">with the bank or other drawee for the payment in full of the check or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">order as well as all other checks or orders then outstanding, it is prima</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">facie evidence of the issuer's intent to deprive the owner of property</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under Section 31.03 (Theft) including a drawee or third-party holder in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">due course who negotiated the check or order or to avoid payment for</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">service under Section 31.04 (Theft of Service) (except in the case of a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">postdated check or order) if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the issuer had no account with the bank or other drawee at</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the time the issuer issued the check or sight order; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) payment was refused by the bank or other drawee for lack</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of funds or insufficient funds, on presentation within 30 days after</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">issue, and the issuer failed to pay the holder in full within 10 days</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">after receiving notice of that refusal.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) For purposes of Subsection (a)(2) or (f)(3), notice may be</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actual notice or notice in writing that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) is sent by:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) first class mail, evidenced by an affidavit of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">service; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) registered or certified mail with return receipt</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">requested;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) is addressed to the issuer at the issuer's address shown</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">on:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the check or order;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the records of the bank or other drawee; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) the records of the person to whom the check or order</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">has been issued or passed; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) contains the following statement:</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">"This is a demand for payment in full for a check or order not paid</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">because of a lack of funds or insufficient funds. If you fail to make</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">payment in full within 10 days after the date of receipt of this notice,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the failure to pay creates a presumption for committing an offense, and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">this matter may be referred for criminal prosecution."</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) If written notice is given in accordance with Subsection (b),</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">it is presumed that the notice was received no later than five days after</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">it was sent.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) Nothing in this section prevents the prosecution from</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">establishing the requisite intent by direct evidence.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) Partial restitution does not preclude the presumption of the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">requisite intent under this section.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) If the actor obtained property by issuing or passing a check or</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">similar sight order for the payment of money, the actor's intent to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">deprive the owner of the property under Section 31.03 (Theft) is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">presumed, except in the case of a postdated check or order, if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the actor ordered the bank or other drawee to stop payment</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -11 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">on the check or order;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the bank or drawee refused payment to the holder on</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">presentation of the check or order within 30 days after issue;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the owner gave the actor notice of the refusal of payment</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and made a demand to the actor for payment or return of the property;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) the actor failed to:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) pay the holder within 10 days after receiving the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">demand for payment; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) return the property to the owner within 10 days after</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">receiving the demand for return of the property.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 31.07. UNAUTHORIZED USE OF A VEHICLE.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an offense if he intentionally or knowingly operates another's boat,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">airplane, or motor-propelled vehicle without the effective consent of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">owner.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a state jail felony.</strong></p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 31.08. VALUE.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subject to the additional criteria of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsections (b) and (c), value under this chapter is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the fair market value of the property or service at the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">time and place of the offense; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) if the fair market value of the property cannot be</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">ascertained, the cost of replacing the property within a reasonable time</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">after the theft.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) The value of documents, other than those having a readily</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">ascertainable market value, is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the amount due and collectible at maturity less that part</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">which has been satisfied, if the document constitutes evidence of a debt;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the greatest amount of economic loss that the owner might</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">reasonably suffer by virtue of loss of the document, if the document is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other than evidence of a debt.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) If property or service has value that cannot be reasonably</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">ascertained by the criteria set forth in Subsections (a) and (b), the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property or service is deemed to have a value of $750 or more but less</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">than $2,500.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) If the actor proves by a preponderance of the evidence that he</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">gave consideration for or had a legal interest in the property or service</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">stolen, the amount of the consideration or the value of the interest so</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">proven shall be deducted from the value of the property or service</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">ascertained under Subsection (a), (b), or (c) to determine value for</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">purposes of this chapter.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 31.09. AGGREGATION OF AMOUNTS INVOLVED IN THEFT.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">When amounts</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">are obtained in violation of this chapter pursuant to one scheme or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">continuing course of conduct, whether from the same or several sources,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the conduct may be considered as one offense and the amounts aggregated</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">in determining the grade of the offense.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 31.10.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">ACTOR'S INTEREST IN PROPERTY.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -12 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">It is no defense to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">prosecution under this chapter that the actor has an interest in the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property or service stolen if another person has the right of exclusive</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">possession of the property.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 31.11. TAMPERING WITH IDENTIFICATION NUMBERS.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">commits an offense if the person:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) knowingly or intentionally removes, alters, or obliterates</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the serial number or other permanent identification marking on tangible</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">personal property; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) possesses, sells, or offers for sale tangible personal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property and:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the actor knows that the serial number or other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">permanent identification marking has been removed, altered, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">obliterated; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a reasonable person in the position of the actor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">would have known that the serial number or other permanent identification</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">marking has been removed, altered, or obliterated.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) It is an affirmative defense to prosecution under this section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that the person was:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the owner or acting with the effective consent of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">owner of the property involved;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a peace officer acting in the actual discharge of official</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">duties; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) acting with respect to a number assigned to a vehicle by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the Texas Department of Transportation or the Texas Department of Motor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Vehicles, as applicable, and the person was:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) in the actual discharge of official duties as an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">employee or agent of the department; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) in full compliance with the rules of the department</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">as an applicant for an assigned number approved by the department.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) Property involved in a violation of this section may be treated</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">as stolen for purposes of custody and disposition of the property.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) An offense under this section is a Class A misdemeanor.</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) In this section, "vehicle" has the meaning given by Section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">541.201, Transportation Code.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 31.16. ORGANIZED RETAIL THEFT.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) Repealed by Acts 2011,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">82nd Leg., R.S., Ch. 323, Sec. 4, eff. September 1, 2011.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person commits an offense if the person intentionally</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conducts, promotes, or facilitates an activity in which the person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">receives, possesses, conceals, stores, barters, sells, or disposes of:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) stolen retail merchandise; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) merchandise explicitly represented to the person as being</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">stolen retail merchandise.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under this section is:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a Class C misdemeanor if the total value of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">merchandise involved in the activity is less than $100;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a Class B misdemeanor if the total value of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">merchandise involved in the activity is $100 or more but less than $750;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a Class A misdemeanor if the total value of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">merchandise involved in the activity is $750 or more but less than</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">$2,500;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -15 -</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) a state jail felony if the total value of the merchandise</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">involved in the activity is $2,500 or more but less than $30,000;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) a felony of the third degree if the total value of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">merchandise involved in the activity is $30,000 or more but less than</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">$150,000;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) a felony of the second degree if the total value of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">merchandise involved in the activity is $150,000 or more but less than</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">$300,000; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) a felony of the first degree if the total value of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">merchandise involved in the activity is $300,000 or more.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) An offense described for purposes of punishment by Subsections</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(c)(1)-(6) is increased to the next higher category of offense if it is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">shown on the trial of the offense that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the person organized, supervised, financed, or managed one</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or more other persons engaged in an activity described by Subsection (b);</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) during the commission of the offense, a person engaged in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an activity described by Subsection (b) intentionally, knowingly, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">recklessly:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) caused a fire exit alarm to sound or otherwise become</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">activated;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) deactivated or otherwise prevented a fire exit alarm</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or retail theft detector from sounding; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) used a shielding or deactivation instrument to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">prevent or attempt to prevent detection of the offense by a retail theft</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">detector.</p>
</div>
`
    },
    
    {
        category: 'Penal Code',
        title: "Chapter 38 - Obstructing Governmental Operation",
        content: `
<h1 style="color: #4fc3f7; font-size: 32px; margin-bottom: 15px;">Chapter 38</h1>
<h2 style="color: #b0b0b0; font-size: 22px; font-weight: normal; margin-bottom: 30px;">Obstructing Governmental Operation</h2>

<div style="background: linear-gradient(to right, rgba(79, 195, 247, 0.25), rgba(79, 195, 247, 0.05)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4fc3f7; border-radius: 5px;">
    <h3 style="color: #4fc3f7; margin: 0 0 10px 0; font-size: 18px;">📖 Quick Summary</h3>
    <p style="font-size: 17px; line-height: 1.7; margin: 0; color: #e0e0e0;">Obstructing government</p>
</div>

<div style="background: linear-gradient(to right, rgba(255, 193, 7, 0.2), rgba(255, 193, 7, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #ffc107; border-radius: 5px;">
    <h3 style="color: #ffc107; margin: 0 0 15px 0; font-size: 18px;">⚡ Must Know</h3>
    <ul style="margin: 0; padding-left: 20px; color: #e0e0e0;">
        <li style="margin: 8px 0; font-size: 16px;">Resisting arrest</li>
        <li style="margin: 8px 0; font-size: 16px;">Evading</li>
    </ul>
</div>

<div style="background: linear-gradient(to right, rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4caf50; border-radius: 5px;">
    <h3 style="color: #4caf50; margin: 0 0 10px 0; font-size: 18px;">🔑 Key Terms</h3>
    <p style="margin: 0; font-size: 15px;"><strong style='color: #4caf50;'>Resist</strong>, <strong style='color: #4caf50;'>Evade</strong></p>
</div>

<hr style="border: none; border-top: 2px solid #444; margin: 35px 0;">

<h2 style="color: #4fc3f7; font-size: 24px; margin-bottom: 25px;">📋 Sections</h2>


<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 38.01. DEFINITIONS.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">In this chapter:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Custody" means:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) under arrest by a peace officer or under restraint by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a public servant pursuant to an order of a court of this state or another</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">state of the United States; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) under restraint by an agent or employee of a facility</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that is operated by or under contract with the United States and that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">confines persons arrested for, charged with, or convicted of criminal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offenses.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Escape" means unauthorized departure from custody or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">failure to return to custody following temporary leave for a specific</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">purpose or limited period or leave that is part of an intermittent</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">sentence, but does not include a violation of conditions of community</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">supervision or parole other than conditions that impose a period of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">confinement in a secure correctional facility.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Economic benefit" means anything reasonably regarded as</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an economic gain or advantage, including accepting or offering to accept</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">employment for a fee, accepting or offering to accept a fee, entering</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">into a fee contract, or accepting or agreeing to accept money or anything</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of value.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) "Finance" means to provide funds or capital or to furnish</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">with necessary funds.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) "Fugitive from justice" means a person for whom a valid</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">arrest warrant has been issued.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) "Governmental function" includes any activity that a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">public servant is lawfully authorized to undertake on behalf of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">government.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) "Invest funds" means to commit money to earn a financial</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">return.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(8) "Member of the family" means anyone related within the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">third degree of consanguinity or affinity, as determined under Chapter</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">573, Government Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(9) "Qualified nonprofit organization" means a nonprofit</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">organization that meets the following conditions:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the primary purposes of the organization do not</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">include the rendition of legal services or education regarding legal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">services;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the recommending, furnishing, paying for, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">educating persons regarding legal services is incidental and reasonably</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">related to the primary purposes of the organization;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) the organization does not derive a financial benefit</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">from the rendition of legal services by a lawyer; and</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) the person for whom the legal services are rendered,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and not the organization, is recognized as the client of a lawyer.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(10) "Public media" means a telephone directory or legal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">directory, newspaper or other periodical, billboard or other sign, radio</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or television broadcast, recorded message the public may access by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">dialing a telephone number, or a written communication not prohibited by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page - 1 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 38.12(d).</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(11) "Solicit employment" means to communicate in person or by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">telephone with a prospective client or a member of the prospective</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">client's family concerning professional employment within the scope of a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">professional's license, registration, or certification arising out of a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">particular occurrence or event, or series of occurrences or events, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">concerning an existing problem of the prospective client within the scope</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the professional's license, registration, or certification, for the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">purpose of providing professional services to the prospective client,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">when neither the person receiving the communication nor anyone acting on</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that person's behalf has requested the communication. The term does not</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">include a communication initiated by a family member of the person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">receiving a communication, a communication by a professional who has a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">prior or existing professional-client relationship with the person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">receiving the communication, or communication by an attorney for a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">qualified nonprofit organization with the organization's members for the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">purpose of educating the organization's members to understand the law, to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">recognize legal problems, to make intelligent selection of legal counsel,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or to use available legal services.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">The term does not include an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">advertisement by a professional through public media.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(12) "Professional"</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">means</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">attorney,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">chiropractor,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">physician, surgeon, private investigator, or any other person licensed,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">certified, or registered by a state agency that regulates a health care</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">profession.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 38.02. FAILURE TO IDENTIFY.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if he intentionally refuses to give his name, residence address, or date</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of birth to a peace officer who has lawfully arrested the person and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">requested the information.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person commits an offense if he intentionally gives a false</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or fictitious name, residence address, or date of birth to a peace</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">officer who has:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) lawfully arrested the person;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) lawfully detained the person; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) requested the information from a person that the peace</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">officer has good cause to believe is a witness to a criminal offense.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(b-1) A person commits an offense if the person:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) is an operator of a motor vehicle, as defined by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">32.34, who is lawfully detained by a peace officer for an alleged</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">violation of a law;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) fails to provide or display the person's driver's license</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">on the officer's request for the license; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) intentionally refuses to give the person's name, driver's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">license number, residence address, or date of birth to the peace officer</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">on the officer's request for that information.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(b-2) For purposes of Subsection (b-1)(3), giving a peace officer a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">residence address that is different from the address associated with the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person's driver's license does not constitute a refusal to give the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person's residence address in violation of that provision if the address</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">given to the officer is the person's actual residence address.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) Except as provided by Subsections (d) and (d-1), an offense</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -2 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under this section is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a Class C misdemeanor if the offense is committed under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (a) or (b-1); or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a Class B misdemeanor if the offense is committed under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (b).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) If it is shown on the trial of an offense under this section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that the defendant was a fugitive from justice at the time of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense, the offense is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a Class B misdemeanor if the offense is committed under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (a); or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a Class A misdemeanor if the offense is committed under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (b).</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(d-1) An offense under Subsection (b-1) is a Class B misdemeanor if</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">it is shown on the trial of the offense that the actor gave a false or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">fictitious name to the peace officer during the commission of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) If conduct that constitutes an offense under this section also</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">constitutes an offense under Section 106.07, Alcoholic Beverage Code, the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor may be prosecuted only under Section 106.07.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) Subject to Subsection (e), if conduct that constitutes an</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense under Subsection (b-1) also constitutes an offense under any</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other law, the actor may be prosecuted under that subsection, the other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">law, or both.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 38.03. RESISTING ARREST, SEARCH, OR TRANSPORTATION.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person commits an offense if he intentionally prevents or obstructs a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person he knows is a peace officer or a person acting in a peace</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">officer's presence and at his direction from effecting an arrest, search,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or transportation of the actor or another by using force against the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">peace officer or another.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) It is no defense to prosecution under this section that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">arrest or search was unlawful.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) Except as provided in Subsection (d), an offense under this</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section is a Class A misdemeanor.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) An offense under this section is a felony of the third degree</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if the actor uses a deadly weapon to resist the arrest or search.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 38.04. EVADING ARREST OR DETENTION.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense if he intentionally flees from a person he knows is a peace</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">officer or federal special investigator attempting lawfully to arrest or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">detain him.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Text of subsection as amended by Acts 2011, 82nd Leg., R.S., Ch. 839</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(H.B. 3423), Sec. 4, and Ch. 391, Sec. 1</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a Class A misdemeanor, except</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that the offense is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a state jail felony if:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the actor has been previously convicted under this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the actor uses a vehicle or watercraft while the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -3 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor is in flight and the actor has not been previously convicted under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">this section;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a felony of the third degree if:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the actor uses a vehicle or watercraft while the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor is in flight and the actor has been previously convicted under this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) another suffers serious bodily injury as a direct</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">result of an attempt by the officer or investigator from whom the actor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is fleeing to apprehend the actor while the actor is in flight; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a felony of the second degree if another suffers death as</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a direct result of an attempt by the officer or investigator from whom</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the actor is fleeing to apprehend the actor while the actor is in flight.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Text of subsection as amended by Acts 2011, 82nd Leg., R.S., Ch. 920</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(S.B. 1416), Sec. 3</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a Class A misdemeanor, except</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that the offense is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a state jail felony if the actor has been previously</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">convicted under this section;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a felony of the third degree if:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) the actor uses a vehicle while the actor is in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">flight;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) another suffers serious bodily injury as a direct</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">result of an attempt by the officer from whom the actor is fleeing to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">apprehend the actor while the actor is in flight; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) the actor uses a tire deflation device against the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">officer while the actor is in flight; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a felony of the second degree if:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) another suffers death as a direct result of an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">attempt by the officer from whom the actor is fleeing to apprehend the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor while the actor is in flight; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) another suffers serious bodily injury as a direct</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">result of the actor's use of a tire deflation device while the actor is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">in flight.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(b-1) Notwithstanding Subsection (b), an offense under this section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is a felony of the third degree if it is shown on the trial of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense that the actor committed the offense in the course of committing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an offense under Section 20.05(a)(2).</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Vehicle" has the meaning assigned by Section 541.201,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Transportation Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Tire deflation device" has the meaning assigned by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 46.01.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Watercraft" has the meaning assigned by Section 49.01.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) A person who is subject to prosecution under both this section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and another law may be prosecuted under either or both this section and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the other law.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 38.05. HINDERING APPREHENSION OR PROSECUTION.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">commits an offense if, with intent to hinder the arrest, prosecution,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -4 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conviction, or punishment of another for an offense or, with intent to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">hinder the arrest, detention, adjudication, or disposition of a child for</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">engaging in delinquent conduct that violates a penal law of the state, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">with intent to hinder the arrest of another under the authority of a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">warrant or capias, he:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) harbors or conceals the other;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) provides or aids in providing the other with any means of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">avoiding arrest or effecting escape; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) warns the other of impending discovery or apprehension.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) It is a defense to prosecution under Subsection (a)(3) that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">warning was given in connection with an effort to bring another into</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">compliance with the law.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) Except as provided by Subsection (d), an offense under this</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section is a Class A misdemeanor.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) An offense under this section is a felony of the third degree</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if the person who is harbored, concealed, provided with a means of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">avoiding arrest or effecting escape, or warned of discovery or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">apprehension is under arrest for, charged with, or convicted of a felony,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">including an offense under Section 62.102, Code of Criminal Procedure, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is in custody or detention for, is alleged in a petition to have engaged</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">in, or has been adjudicated as having engaged in delinquent conduct that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">violates a penal law of the grade of felony, including an offense under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 62.102, Code of Criminal Procedure, and the person charged under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">this section knew that the person they harbored, concealed, provided with</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a means of avoiding arrest or effecting escape, or warned of discovery or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">apprehension is under arrest for, charged with, or convicted of a felony,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or is in custody or detention for, is alleged in a petition to have</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">engaged in, or has been adjudicated as having engaged in delinquent</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conduct that violates a penal law of the grade of felony.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 38.06. ESCAPE.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense if the person</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">escapes from custody when the person is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) under arrest for, lawfully detained for, charged with, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">convicted of an offense;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) in custody pursuant to a lawful order of a court;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) detained in a secure detention facility, as that term is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">defined by Section 51.02, Family Code; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) in the custody of a juvenile probation officer for</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">violating an order imposed by the juvenile court under Section 52.01,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Family Code.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) Except as provided in Subsections (c), (d), and (e), an offense</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under this section is a Class A misdemeanor.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under this section is a felony of the third degree</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if the actor:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) is under arrest for, charged with, or convicted of a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">felony;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) is confined or lawfully detained in a secure correctional</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">facility or law enforcement facility; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) is committed to or lawfully detained in a secure</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">correctional facility, as defined by Section 51.02, Family Code, other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">than a halfway house, operated by or under contract with the Texas</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -5 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Juvenile Justice Department.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) An offense under this section is a felony of the second degree</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if the actor to effect his escape causes bodily injury.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) An offense under this section is a felony of the first degree</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if to effect his escape the actor:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) causes serious bodily injury; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) uses or threatens to use a deadly weapon.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 38.13. HINDERING PROCEEDINGS BY DISORDERLY CONDUCT.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person commits an offense if he intentionally hinders an official</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">proceeding by noise or violent or tumultuous behavior or disturbance.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person commits an offense if he recklessly hinders an</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">official proceeding by noise or violent or tumultuous behavior or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">disturbance and continues after explicit official request to desist.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under this section is a Class A misdemeanor.</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -14 -</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 38.14.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">TAKING OR ATTEMPTING TO TAKE WEAPON FROM PEACE OFFICER,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">FEDERAL SPECIAL INVESTIGATOR, EMPLOYEE OR OFFICIAL OF CORRECTIONAL</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">FACILITY, PAROLE OFFICER, COMMUNITY SUPERVISION AND CORRECTIONS</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">DEPARTMENT OFFICER, OR COMMISSIONED SECURITY OFFICER.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">In this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Firearm" has the meanings assigned by Section 46.01.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Stun gun" means a device designed to propel darts or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other projectiles attached to wires that, on contact, will deliver an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">electrical pulse capable of incapacitating a person.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Commissioned security officer" has the meaning assigned</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by Section 1702.002(5), Occupations Code.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person commits an offense if the person intentionally or</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">knowingly and with force takes or attempts to take from a peace officer,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">federal special investigator, employee or official of a correctional</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">facility, parole officer, community supervision and corrections</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">department officer, or commissioned security officer the officer's,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">investigator's, employee's, or official's firearm, nightstick, stun gun,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or personal protection chemical dispensing device.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) The actor is presumed to have known that the peace officer,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">federal special investigator, employee or official of a correctional</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">facility, parole officer, community supervision and corrections</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">department officer, or commissioned security officer was a peace officer,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">federal special investigator, employee or official of a correctional</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">facility, parole officer, community supervision and corrections</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">department officer, or commissioned security officer if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the officer, investigator, employee, or official was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">wearing a distinctive uniform or badge indicating his employment; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">officer,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">investigator,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">employee,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">official</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">identified himself as a peace officer, federal special investigator,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">employee or official of a correctional facility, parole officer,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">community supervision and corrections department officer, or commissioned</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">security officer.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) It is a defense to prosecution under this section that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">defendant took or attempted to take the weapon from a peace officer,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">federal special investigator, employee or official of a correctional</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">facility, parole officer, community supervision and corrections</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">department officer, or commissioned security officer who was using force</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">against the defendant or another in excess of the amount of force</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">permitted by law.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) An offense under this section is:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a felony of the third degree, if the defendant took a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">weapon described by Subsection (b) from an officer, investigator,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">employee, or official described by that subsection; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a state jail felony, if the defendant attempted to take a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">weapon described by Subsection (b) from an officer, investigator,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">employee, or official described by that subsection.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 38.15. INTERFERENCE WITH PUBLIC DUTIES.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an offense if the person with criminal negligence interrupts, disrupts,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">impedes, or otherwise interferes with:</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -15 -</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a peace officer while the peace officer is performing a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">duty or exercising authority imposed or granted by law;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a person who is employed to provide emergency medical</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">services including the transportation of ill or injured persons while the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person is performing that duty;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a fire fighter, while the fire fighter is fighting a fire</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or investigating the cause of a fire;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) an animal under the supervision of a peace officer,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">corrections officer, or jailer, if the person knows the animal is being</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">used for law enforcement, corrections, prison or jail security, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">investigative purposes;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) the transmission of a communication over a citizen's band</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">radio channel, the purpose of which communication is to inform or inquire</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">about an emergency;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) an officer with responsibility for animal control in a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">county or municipality, while the officer is performing a duty or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">exercising authority imposed or granted under Chapter 821 or 822, Health</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and Safety Code; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) a person who:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) has responsibility for assessing, enacting, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">enforcing public health, environmental, radiation, or safety measures for</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the state or a county or municipality;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) is investigating a particular site as part of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person's responsibilities under Paragraph (A);</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) is acting in accordance with policies and procedures</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">related to the safety and security of the site described by Paragraph</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(B); and</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) is performing a duty or exercising authority imposed</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or granted under the Agriculture Code, Health and Safety Code,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Occupations Code, or Water Code.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a Class B misdemeanor.</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) It is a defense to prosecution under Subsection (a)(1) that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conduct engaged in by the defendant was intended to warn a person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">operating a motor vehicle of the presence of a peace officer who was</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">enforcing Subtitle C, Title 7, Transportation Code.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) It is a defense to prosecution under this section that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">interruption, disruption, impediment, or interference alleged consisted</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of speech only.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(d-1) Except as provided by Subsection (d-2), in a prosecution for</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an offense under Subsection (a)(1), there is a rebuttable presumption</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that the actor interferes with a peace officer if it is shown on the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">trial of the offense that the actor intentionally disseminated the home</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">address, home telephone number, emergency contact information, or social</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">security number of the officer or a family member of the officer or any</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other information that is specifically described by Section 552.117(a),</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Government Code.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(d-2) The presumption in Subsection (d-1) does not apply to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">information disseminated by:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a radio or television station that holds a license issued</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">by the Federal Communications Commission; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a newspaper that is:</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -16 -</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) a free newspaper of general circulation or qualified</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to publish legal notices;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) published at least once a week; and</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) available and of interest to the general public.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) In this section, "emergency" means a condition or circumstance</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">in which an individual is or is reasonably believed by the person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">transmitting the communication to be in imminent danger of serious bodily</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">injury or in which property is or is reasonably believed by the person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">transmitting the communication to be in imminent danger of damage or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">destruction.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 38.151. INTERFERENCE WITH POLICE SERVICE ANIMALS.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">In</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">this section:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Area of control" includes a vehicle, trailer, kennel,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">pen, or yard.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Handler or rider" means a peace officer, corrections</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">officer, or jailer who is specially trained to use a police service</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">animal for law enforcement, corrections, prison or jail security, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">investigative purposes.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Police service animal" means a dog, horse, or other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">domesticated animal that is specially trained for use by a handler or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">rider.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person commits an offense if the person recklessly:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) taunts, torments, or strikes a police service animal;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) throws an object or substance at a police service animal;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) interferes with or obstructs a police service animal or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">interferes with or obstructs the handler or rider of a police service</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">animal in a manner that:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) inhibits or restricts the handler's or rider's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">control of the animal; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) deprives the handler or rider of control of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">animal;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) releases a police service animal from its area of control;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) enters the area of control of a police service animal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">without the effective consent of the handler or rider, including placing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">food or any other object or substance into that area;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) injures or kills a police service animal; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) engages in conduct likely to injure or kill a police</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">service animal, including administering or setting a poison, trap, or any</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other object or substance.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under this section is:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a Class C misdemeanor if the person commits an offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under Subsection (b)(1);</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a Class B misdemeanor if the person commits an offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under Subsection (b)(2);</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a Class A misdemeanor if the person commits an offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under Subsection (b)(3), (4), or (5);</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) except as provided by Subdivision (5), a state jail felony</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if the person commits an offense under Subsection (b)(6) or (7) by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">injuring a police service animal or by engaging in conduct likely to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">injure the animal; or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -17 -</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) a felony of the second degree if the person commits an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense under Subsection (b)(6) or (7) by:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) killing a police service animal or engaging in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conduct likely to kill the animal;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) injuring a police service animal in a manner that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">materially and permanently affects the ability of the animal to perform</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">as a police service animal; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) engaging in conduct likely to injure a police service</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">animal in a manner that would materially and permanently affect the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">ability of the animal to perform as a police service animal.</p>
</div>
`
    },
    
    {
        category: 'Penal Code',
        title: "Chapter 39 - Abuse of Office",
        content: `
<h1 style="color: #4fc3f7; font-size: 32px; margin-bottom: 15px;">Chapter 39</h1>
<h2 style="color: #b0b0b0; font-size: 22px; font-weight: normal; margin-bottom: 30px;">Abuse of Office</h2>

<div style="background: linear-gradient(to right, rgba(79, 195, 247, 0.25), rgba(79, 195, 247, 0.05)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4fc3f7; border-radius: 5px;">
    <h3 style="color: #4fc3f7; margin: 0 0 10px 0; font-size: 18px;">📖 Quick Summary</h3>
    <p style="font-size: 17px; line-height: 1.7; margin: 0; color: #e0e0e0;">Abuse of office</p>
</div>

<div style="background: linear-gradient(to right, rgba(255, 193, 7, 0.2), rgba(255, 193, 7, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #ffc107; border-radius: 5px;">
    <h3 style="color: #ffc107; margin: 0 0 15px 0; font-size: 18px;">⚡ Must Know</h3>
    <ul style="margin: 0; padding-left: 20px; color: #e0e0e0;">
        <li style="margin: 8px 0; font-size: 16px;">Official oppression</li>
    </ul>
</div>

<div style="background: linear-gradient(to right, rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4caf50; border-radius: 5px;">
    <h3 style="color: #4caf50; margin: 0 0 10px 0; font-size: 18px;">🔑 Key Terms</h3>
    <p style="margin: 0; font-size: 15px;"><strong style='color: #4caf50;'>Public servant</strong></p>
</div>

<hr style="border: none; border-top: 2px solid #444; margin: 35px 0;">

<h2 style="color: #4fc3f7; font-size: 24px; margin-bottom: 25px;">📋 Sections</h2>


<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 39.01. DEFINITIONS.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">In this chapter:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Law relating to a public servant's office or employment"</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">means a law that specifically applies to a person acting in the capacity</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of a public servant and that directly or indirectly:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) imposes a duty on the public servant; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) governs the conduct of the public servant.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Misuse" means to deal with property contrary to:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) an agreement under which the public servant holds the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">property;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a contract of employment or oath of office of a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">public servant;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">law,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">including</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">provisions</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">General</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Appropriations Act specifically relating to government property, that</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">prescribes the manner of custody or disposition of the property; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) a limited purpose for which the property is delivered</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or received.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 39.02. ABUSE OF OFFICIAL CAPACITY.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">A public servant</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">commits an offense if, with intent to obtain a benefit or with intent to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">harm or defraud another, he intentionally or knowingly:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) violates a law relating to the public servant's office or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">employment; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) misuses government property, services, personnel, or any</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other thing of value belonging to the government that has come into the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">public servant's custody or possession by virtue of the public servant's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">office or employment.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under Subsection (a)(1) is a Class A misdemeanor.</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under Subsection (a)(2) is:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a Class C misdemeanor if the value of the use of the thing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">misused is less than $100;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a Class B misdemeanor if the value of the use of the thing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">misused is $100 or more but less than $750;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a Class A misdemeanor if the value of the use of the thing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">misused is $750 or more but less than $2,500;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) a state jail felony if the value of the use of the thing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">misused is $2,500 or more but less than $30,000;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) a felony of the third degree if the value of the use of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the thing misused is $30,000 or more but less than $150,000;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) a felony of the second degree if the value of the use of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the thing misused is $150,000 or more but less than $300,000; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) a felony of the first degree if the value of the use of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page - 1 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the thing misused is $300,000 or more.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) A discount or award given for travel, such as frequent flyer</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">miles, rental car or hotel discounts, or food coupons, are not things of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">value belonging to the government for purposes of this section due to the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">administrative difficulty and cost involved in recapturing the discount</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or award for a governmental entity.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) If separate transactions that violate Subsection (a)(2) are</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conducted pursuant to one scheme or continuing course of conduct, the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conduct may be considered as one offense and the value of the use of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">things misused in the transactions may be aggregated in determining the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">classification of the offense.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) The value of the use of a thing of value misused under</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (a)(2) may not exceed:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the fair market value of the thing at the time of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) if the fair market value of the thing cannot be</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">ascertained, the cost of replacing the thing within a reasonable time</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">after the offense.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 39.03. OFFICIAL OPPRESSION.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">A public servant acting</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under color of his office or employment commits an offense if he:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) intentionally subjects another to mistreatment or to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">arrest, detention, search, seizure, dispossession, assessment, or lien</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that he knows is unlawful;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) intentionally denies or impedes another in the exercise or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">enjoyment of any right, privilege, power, or immunity, knowing his</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conduct is unlawful; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) intentionally subjects another to sexual harassment.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) For purposes of this section, a public servant acts under color</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of his office or employment if he acts or purports to act in an official</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">capacity or takes advantage of such actual or purported capacity.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) In this section, "sexual harassment" means unwelcome sexual</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">advances, requests for sexual favors, or other verbal or physical conduct</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of a sexual nature, submission to which is made a term or condition of a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person's exercise or enjoyment of any right, privilege, power, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">immunity, either explicitly or implicitly.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) An offense under this section is a Class A misdemeanor, except</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that an offense is a felony of the third degree if the public servant</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">acted with the intent to impair the accuracy of data reported to the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Texas Education Agency through the Public Education Information</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Management System (PEIMS) described by Sections 48.008 and 48.009,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Education Code, under a law requiring that reporting.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 39.04.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">VIOLATIONS OF THE CIVIL RIGHTS OF PERSON IN CUSTODY;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">IMPROPER SEXUAL ACTIVITY WITH PERSON IN CUSTODY OR UNDER SUPERVISION.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) An official of a correctional facility or juvenile facility, an</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">employee of a correctional facility or juvenile facility, a person other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">than an employee who works for compensation at a correctional facility or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">juvenile facility, a volunteer at a correctional facility or juvenile</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">facility, or a peace officer commits an offense if the person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">intentionally:</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -2 -</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) denies or impedes a person in custody in the exercise or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">enjoyment of any right, privilege, or immunity knowing his conduct is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">unlawful; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) engages in sexual contact, sexual intercourse, or deviate</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">sexual intercourse with an individual in custody or, in the case of an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">individual in the custody of the Texas Juvenile Justice Department or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">placed in a juvenile facility, employs, authorizes, or induces the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">individual to engage in sexual conduct or a sexual performance.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Text of subsection as amended by Acts 2021, 87th Leg., R.S., Ch. 895</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(H.B. 3157), Sec. 1</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under Subsection (a)(1) is a felony of the third</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">degree. An offense under Subsection (a)(2) is a felony of the second</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">degree, except that an offense under Subsection (a)(2) is a felony of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">first degree if the offense is committed against:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) an individual in the custody of the Texas Juvenile Justice</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Department or placed in a juvenile facility; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a juvenile offender detained in or committed to a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">correctional facility.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Text of subsection as amended by Acts 2021, 87th Leg., R.S., Ch. 939</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(S.B. 312), Sec. 1</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)(1)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Class</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">A</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">misdemeanor. An offense under Subsection (a)(2) is a felony of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">second degree.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) This section shall not preclude prosecution for any other</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense set out in this code.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) The Attorney General of Texas shall have concurrent</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">jurisdiction with law enforcement agencies to investigate violations of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">this statute involving serious bodily injury or death.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) In this section:</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Text of subdivision as amended by Acts 2015, 84th Leg., R.S., Ch. 216</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(H.B. 511), Sec. 1</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(1)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">"Correctional facility" means:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) any place described by Section 1.07(a)(14);</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) any place or facility designated for the detention of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a person suspected of violating a provision of the Immigration and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Nationality Act (8 U.S.C. Section 1101 et seq.); or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) a "secure correctional facility" or "secure detention</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">facility" as defined by Section 51.02, Family Code.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Text of subdivision as amended by Acts 2015, 84th Leg., R.S., Ch. 1136</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(S.B. 183), Sec. 2</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Correctional facility" means any place described by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 1.07(a)(14).</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Custody" means the detention, arrest, or confinement of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -3 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an adult offender, the detention of a juvenile offender, or the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">commitment of a juvenile offender to a correctional facility or juvenile</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">facility.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(2-a) "Juvenile facility" means:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) a facility operated by the Texas Juvenile Justice</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Department or a private vendor under a contract with the Texas Juvenile</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Justice Department; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a facility for the detention or placement of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">juveniles under juvenile court jurisdiction and that is operated wholly</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or partly by a juvenile board or another governmental unit or by a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">private vendor under a contract with the juvenile board or governmental</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">unit.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Sexual contact," "sexual intercourse," and "deviate</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">sexual intercourse" have the meanings assigned by Section 21.01.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) "Sexual conduct" and "performance" have the meanings</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">assigned by Section 43.25.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) "Sexual performance" means any performance or part thereof</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that includes sexual conduct by an individual.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) An employee of the Texas Department of Criminal Justice, the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Texas Juvenile Justice Department, a juvenile facility, a local juvenile</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">probation department, or a community supervision and corrections</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">department established under Chapter 76, Government Code, a person other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">than an employee who works for compensation at a juvenile facility or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">local juvenile probation department, or a volunteer at a juvenile</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">facility or local juvenile probation department commits an offense if the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor engages in sexual contact, sexual intercourse, or deviate sexual</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">intercourse with an individual who the actor knows is under the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">supervision of the Texas Department of Criminal Justice, Texas Juvenile</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Justice Department, probation department, or community supervision and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">corrections department but not in the custody of the Texas Department of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Criminal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Justice,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Texas</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Juvenile</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Justice</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Department,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">probation</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">department, or community supervision and corrections department.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(g) An offense under Subsection (f) is a state jail felony.</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(h) It is an affirmative defense to prosecution under Subsection</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) that the actor was the spouse of the individual at the time of the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 39.06. MISUSE OF OFFICIAL INFORMATION.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A public servant</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">commits an offense if, in reliance on information to which the public</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">servant has access by virtue of the person's office or employment and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that has not been made public, the person:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) acquires or aids another to acquire a pecuniary interest</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">in any property, transaction, or enterprise that may be affected by the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">information;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) speculates or aids another to speculate on the basis of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the information; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) as a public servant, including as a school administrator,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">coerces another into suppressing or failing to report that information to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a law enforcement agency.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A public servant commits an offense if with intent to obtain a</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">benefit or with intent to harm or defraud another, he discloses or uses</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">information for a nongovernmental purpose that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) he has access to by means of his office or employment;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) has not been made public.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) A person commits an offense if, with intent to obtain a benefit</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or with intent to harm or defraud another, he solicits or receives from a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">public servant information that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the public servant has access to by means of his office or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">employment; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) has not been made public.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) In this section, "information that has not been made public"</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">means any information to which the public does not generally have access,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and that is prohibited from disclosure under Chapter 552, Government</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Code.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) Except as provided by Subsection (f), an offense under this</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section is a felony of the third degree.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) An offense under Subsection (a)(3) is a Class C misdemeanor.</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -5 -</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 39.07. FAILURE TO COMPLY WITH IMMIGRATION DETAINER REQUEST.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person who is a sheriff, chief of police, or constable or a person</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">who otherwise has primary authority for administering a jail commits an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense if the person:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) has custody of a person subject to an immigration detainer</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">request issued by United States Immigration and Customs Enforcement; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) knowingly fails to comply with the detainer request.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a Class A misdemeanor.</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) It is an exception to the application of this section that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person who was subject to an immigration detainer request described by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Subsection (a)(1) had provided proof that the person is a citizen of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">United States or that the person has lawful immigration status in the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">United States, such as a Texas driver's license or similar governmentissued identification.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -6 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">PENAL CODE</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">TITLE 9. OFFENSES AGAINST PUBLIC ORDER AND DECENCY</p>
</div>
`
    },
    
    {
        category: 'Penal Code',
        title: "Chapter 42 - Disorderly Conduct",
        content: `
<h1 style="color: #4fc3f7; font-size: 32px; margin-bottom: 15px;">Chapter 42</h1>
<h2 style="color: #b0b0b0; font-size: 22px; font-weight: normal; margin-bottom: 30px;">Disorderly Conduct</h2>

<div style="background: linear-gradient(to right, rgba(79, 195, 247, 0.25), rgba(79, 195, 247, 0.05)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4fc3f7; border-radius: 5px;">
    <h3 style="color: #4fc3f7; margin: 0 0 10px 0; font-size: 18px;">📖 Quick Summary</h3>
    <p style="font-size: 17px; line-height: 1.7; margin: 0; color: #e0e0e0;">Disorderly conduct</p>
</div>

<div style="background: linear-gradient(to right, rgba(255, 193, 7, 0.2), rgba(255, 193, 7, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #ffc107; border-radius: 5px;">
    <h3 style="color: #ffc107; margin: 0 0 15px 0; font-size: 18px;">⚡ Must Know</h3>
    <ul style="margin: 0; padding-left: 20px; color: #e0e0e0;">
        <li style="margin: 8px 0; font-size: 16px;">Disorderly = fighting/noise</li>
    </ul>
</div>

<div style="background: linear-gradient(to right, rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4caf50; border-radius: 5px;">
    <h3 style="color: #4caf50; margin: 0 0 10px 0; font-size: 18px;">🔑 Key Terms</h3>
    <p style="margin: 0; font-size: 15px;"><strong style='color: #4caf50;'>Public place</strong></p>
</div>

<hr style="border: none; border-top: 2px solid #444; margin: 35px 0;">

<h2 style="color: #4fc3f7; font-size: 24px; margin-bottom: 25px;">📋 Sections</h2>


<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 42.01. DISORDERLY CONDUCT.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if he intentionally or knowingly:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) uses abusive, indecent, profane, or vulgar language in a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">public place, and the language by its very utterance tends to incite an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">immediate breach of the peace;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) makes an offensive gesture or display in a public place,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and the gesture or display tends to incite an immediate breach of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">peace;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) creates, by chemical means, a noxious and unreasonable</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">odor in a public place;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) abuses or threatens a person in a public place in an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">obviously offensive manner;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) makes unreasonable noise in a public place other than a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">sport shooting range, as defined by Section 250.001, Local Government</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Code, or in or near a private residence that he has no right to occupy;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) fights with another in a public place;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) discharges a firearm in a public place other than a public</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">road or a sport shooting range, as defined by Section 250.001, Local</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Government Code;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(8) displays a firearm or other deadly weapon in a public</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">place in a manner calculated to alarm;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(9) discharges a firearm on or across a public road;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(10) exposes his anus or genitals in a public place and is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">reckless about whether another may be present who will be offended or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">alarmed by his act; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(11) for a lewd or unlawful purpose:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) enters on the property of another and looks into a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">dwelling on the property through any window or other opening in the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">dwelling;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) while on the premises of a hotel or comparable</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">establishment, looks into a guest room not the person's own through a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">window or other opening in the room; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) while on the premises of a public place, looks into</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an area such as a restroom or shower stall or changing or dressing room</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that is designed to provide privacy to a person using the area.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a-1) For purposes of Subsection (a), the term "public place"</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">includes a public school campus or the school grounds on which a public</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">school is located.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) It is a defense to prosecution under Subsection (a)(4) that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor had significant provocation for his abusive or threatening conduct.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) For purposes of this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) an act is deemed to occur in a public place or near a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">private residence if it produces its offensive or proscribed consequences</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">in the public place or near a private residence; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a noise is presumed to be unreasonable if the noise</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">exceeds a decibel level of 85 after the person making the noise receives</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">notice from a magistrate or peace officer that the noise is a public</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page - 1 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">nuisance.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) An offense under this section is a Class C misdemeanor unless</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">committed under Subsection (a)(7) or (a)(8), in which event it is a Class</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">B misdemeanor.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) It is a defense to prosecution for an offense under Subsection</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)(7) or (9) that the person who discharged the firearm had a reasonable</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">fear of bodily injury to the person or to another by a dangerous wild</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">animal as defined by Section 822.101, Health and Safety Code.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(e-1) Subsection (a)(9) does not apply to a person who, at the time</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the person engaged in conduct prohibited under that subdivision, was an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">employee of the Parks and Wildlife Department acting within the scope of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the employee's authority under Section 12.013(c), Parks and Wildlife</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Code.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) Subsections (a)(1), (2), (3), (5), and (6) do not apply to a</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person who, at the time the person engaged in conduct prohibited under</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the applicable subdivision, was a student younger than 12 years of age,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and the prohibited conduct occurred at a public school campus during</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">regular school hours.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(g) Noise arising from space flight activities, as defined by</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 100A.001, Civil Practice and Remedies Code, if lawfully</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">conducted, does not constitute "unreasonable noise" for purposes of this</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 42.02. RIOT.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) For the purpose of this section, "riot"</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">means the assemblage of seven or more persons resulting in conduct which:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) creates an immediate danger of damage to property or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">injury to persons;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) substantially</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">obstructs</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">law</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">enforcement</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">governmental functions or services; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) by force, threat of force, or physical action deprives any</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person of a legal right or disturbs any person in the enjoyment of a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">legal right.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person commits an offense if he knowingly participates in a</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">riot.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) It is a defense to prosecution under this section that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">assembly was at first lawful and when one of those assembled manifested</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an intent to engage in conduct enumerated in Subsection (a), the actor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">retired from the assembly.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) It is no defense to prosecution under this section that another</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">who was a party to the riot has been acquitted, has not been arrested,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">prosecuted, or convicted, has been convicted of a different offense or of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a different type or class of offense, or is immune from prosecution.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) Except as provided in Subsection (f), an offense under this</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section is a Class B misdemeanor.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) An offense under this section is an offense of the same</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">classification as any offense of a higher grade committed by anyone</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">engaged in the riot if the offense was:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) in the furtherance of the purpose of the assembly; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) an offense which should have been anticipated as a result</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the assembly.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 42.03. OBSTRUCTING HIGHWAY OR OTHER PASSAGEWAY.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -2 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">A person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">commits an offense if, without legal privilege or authority, he</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">intentionally, knowingly, or recklessly:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) obstructs a highway, street, sidewalk, railway, waterway,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">elevator, aisle, hallway, entrance, or exit to which the public or a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">substantial group of the public has access, or any other place used for</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the passage of persons, vehicles, or conveyances, regardless of the means</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of creating the obstruction and whether the obstruction arises from his</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">acts alone or from his acts and the acts of others; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) disobeys a reasonable request or order to move issued by a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person the actor knows to be or is informed is a peace officer, a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">fireman, or a person with authority to control the use of the premises:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) to prevent obstruction of a highway or any of those</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">areas mentioned in Subdivision (1); or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) to maintain public safety by dispersing those</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">gathered in dangerous proximity to a fire, riot, or other hazard.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) For purposes of this section, "obstruct" means to render</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">impassable or to render passage unreasonably inconvenient or hazardous.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) Except as otherwise provided by Subsections (c-1), (d), and</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(e), an offense under this section is a Class B misdemeanor.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(c-1) An offense under this section is a state jail felony if, in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">committing the offense, the actor knowingly:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) prevents the passage of an authorized emergency vehicle,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">as defined by Section 541.201, Transportation Code, that is operating the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">vehicle's emergency audible or visual signals required by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">546.003, Transportation Code; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) obstructs access to a hospital licensed under Chapter 241,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Health and Safety Code, or other health care facility that provides</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">emergency medical care, as defined by Section 773.003, Health and Safety</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Code.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) Subject to Subsection (e), an offense under this section is a</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Class A misdemeanor if it is shown on the trial of the offense that, at</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the time of the offense, the person was operating a motor vehicle while</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">engaging in a reckless driving exhibition.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) An offense under this section is a state jail felony if it is</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">shown on the trial of the offense that, at the time of the offense, the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person was operating a motor vehicle while engaging in a reckless driving</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">exhibition, and:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the person has previously been convicted of an offense</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">punishable under Subsection (d);</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) at the time of the offense, the person was operating a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">motor vehicle while intoxicated, as defined by Section 49.01; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) a person suffered bodily injury as a result of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(f) For purposes of this section, "reckless driving exhibition"</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">means an operator of a motor vehicle, on a highway or street and in the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">presence of two or more persons assembled for the purpose of spectating</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the conduct, intentionally:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) breaking the traction of the vehicle's rear tires;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) spinning the vehicle's rear tires continuously by pressing</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the accelerator and increasing the engine speed; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) steering the vehicle in a manner designed to rotate the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">vehicle.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -3 -</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(g) If conduct that constitutes an offense under this section also</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">constitutes an offense under any other law, the actor may be prosecuted</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under this section or the other law, but not both.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 42.04. DEFENSE WHEN CONDUCT CONSISTS OF SPEECH OR OTHER EXPRESSION.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">If conduct that would otherwise violate Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">42.01(a)(5) (Unreasonable Noise), 42.03 (Obstructing Passageway), or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">42.055 (Funeral Service Disruptions) consists of speech or other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">communication, of gathering with others to hear or observe such speech or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">communication, or of gathering with others to picket or otherwise express</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">in a nonviolent manner a position on social, economic, political, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">religious questions, the actor must be ordered to move, disperse, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">otherwise remedy the violation prior to his arrest if he has not yet</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">intentionally harmed the interests of others which those sections seek to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">protect.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) The order required by this section may be given by a peace</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">officer, a fireman, a person with authority to control the use of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">premises, or any person directly affected by the violation.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) It is a defense to prosecution under Section 42.01(a)(5),</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">42.03, or 42.055:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) that in circumstances in which this section requires an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">order no order was given;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) that an order, if given, was manifestly unreasonable in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">scope; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) that an order, if given, was promptly obeyed.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 42.05. DISRUPTING MEETING OR PROCESSION.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">A person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">commits an offense if, with intent to prevent or disrupt a lawful</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">meeting, procession, or gathering, he obstructs or interferes with the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">meeting, procession, or gathering by physical action or verbal utterance.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a Class B misdemeanor.</strong></p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 42.06. FALSE ALARM OR REPORT.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">A person commits an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense if he knowingly initiates, communicates or circulates a report of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">a present, past, or future bombing, fire, offense, or other emergency</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that he knows is false or baseless and that would ordinarily:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) cause action by an official or volunteer agency organized</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to deal with emergencies;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) place a person in fear of imminent serious bodily injury;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) prevent or interrupt the occupation of a building, room,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">place of assembly, place to which the public has access, or aircraft,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">automobile, or other mode of conveyance.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a Class A misdemeanor unless</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the false report is of an emergency involving a public or private</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">institution of higher education or involving a public primary or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">secondary school, public communications, public transportation, public</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">water, gas, or power supply or other public service, in which event the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense is a state jail felony.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 42.062. INTERFERENCE WITH EMERGENCY REQUEST FOR ASSISTANCE.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) An individual commits an offense if the individual knowingly</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">prevents or interferes with another individual's ability to place an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">emergency call or to request assistance, including a request for</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">assistance using an electronic communications device, in an emergency</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">from a law enforcement agency, medical facility, or other agency or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">entity the primary purpose of which is to provide for the safety of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">individuals.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An individual commits an offense if the individual recklessly</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">renders unusable an electronic communications device, including a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">telephone, that would otherwise be used by another individual to place an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">emergency call or to request assistance in an emergency from a law</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">enforcement agency, medical facility, or other agency or entity the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">primary purpose of which is to provide for the safety of individuals.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under this section is a Class A misdemeanor, except</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that the offense is a state jail felony if the actor has previously been</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">convicted under this section.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) In this section, "emergency" means a condition or circumstance</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">in which any individual is or is reasonably believed by the individual</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">making a call or requesting assistance to be in fear of imminent assault</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or in which property is or is reasonably believed by the individual</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">making the call or requesting assistance to be in imminent danger of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">damage or destruction.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 42.07. HARASSMENT.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense if, with</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">intent to harass, annoy, alarm, abuse, torment, or embarrass another, the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) initiates communication and in the course of the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">communication makes a comment, request, suggestion, or proposal that is</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">obscene;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) threatens, in a manner reasonably likely to alarm the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person receiving the threat, to inflict bodily injury on the person or to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">commit a felony against the person, a member of the person's family or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">household, or the person's property;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) conveys, in a manner reasonably likely to alarm the person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">receiving the report, a false report, which is known by the conveyor to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">be false, that another person has suffered death or serious bodily</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -6 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">injury;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) causes the telephone of another to ring repeatedly or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">makes repeated telephone communications anonymously or in a manner</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">reasonably likely to harass, annoy, alarm, abuse, torment, embarrass, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offend another;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) makes a telephone call and intentionally fails to hang up</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or disengage the connection;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) knowingly permits a telephone under the person's control</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to be used by another to commit an offense under this section;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(7) sends repeated electronic communications in a manner</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">reasonably likely to harass, annoy, alarm, abuse, torment, embarrass, or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offend another;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(8) publishes on an Internet website, including a social media</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">platform, repeated electronic communications in a manner reasonably</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">likely to cause emotional distress, abuse, or torment to another person,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">unless the communications are made in connection with a matter of public</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">concern; or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Text of subdivision as added by Acts 2023, 88th Leg., R.S., Ch. 839</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(H.B. 2715), Sec. 7</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(9) tracks or monitors the personal property or motor vehicle</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of another person, without the other person's effective consent,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">including by:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) using a tracking application on the person's personal</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">electronic device or using a tracking device; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) physically following the other person or causing any</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person to physically follow the other person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Text of subdivision as added by Acts 2023, 88th Leg., R.S., Ch. 1118</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(H.B. 1427), Sec. 1</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(9) makes obscene, intimidating, or threatening telephone</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">calls or other electronic communications from a temporary or disposable</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">telephone number provided by an Internet application or other</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">technological means.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Electronic communication" means a transfer of signs,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">signals, writing, images, sounds, data, or intelligence of any nature</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">transmitted in whole or in part by a wire, radio, electromagnetic,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">photoelectronic, or photo-optical system. The term includes:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) a communication initiated through the use of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">electronic mail, instant message, network call, a cellular or other type</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of telephone, a computer, a camera, text message, a social media platform</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or application, an Internet website, any other Internet-based</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">communication tool, or facsimile machine; and</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) a communication made to a pager.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Family" and "household" have the meaning assigned by</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 42.072. STALKING.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense if the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person, on more than one occasion and pursuant to the same scheme or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">course of conduct that is directed at a specific other person, knowingly</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">engages in conduct that:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) constitutes an offense under Section 42.07, or that the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">actor knows or reasonably should know the other person will regard as</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">threatening:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) bodily injury or death for the other person; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) that an offense will be committed against:</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(i) a member of the other person's family or</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">household;</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(ii) an individual with whom the other person has a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">dating relationship; or</p>
<p style="margin: 6px 0 6px 90px; line-height: 1.7; font-size: 14px; color: #d0d0d0;">(iii) the other person's property;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) causes the other person, a member of the other person's</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">family or household, or an individual with whom the other person has a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">dating relationship:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) to be placed in fear of bodily injury or death or in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">fear that an offense will be committed against the other person, a member</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of the other person's family or household, or an individual with whom the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">other person has a dating relationship, or the other person's property;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) to feel harassed, terrified, intimidated, annoyed,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -8 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">alarmed, abused, tormented, embarrassed, or offended; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) would cause a reasonable person under circumstances</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">similar to the circumstances of the other person to:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) fear bodily injury or death for the person;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) fear that an offense will be committed against a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">member of the person's family or household or an individual with whom the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person has a dating relationship;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) fear that an offense will be committed against the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person's property; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(D) feel harassed, terrified, intimidated, annoyed,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">alarmed, abused, tormented, embarrassed, or offended.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a felony of the third degree,</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">except that the offense is a felony of the second degree if the actor has</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">previously been convicted of an offense under this section or of an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense under any of the following laws that contains elements that are</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">substantially similar to the elements of an offense under this section:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the laws of another state;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the laws of a federally recognized Indian tribe;</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) the laws of a territory of the United States; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) federal law.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) For purposes of this section, a trier of fact may find that</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">different types of conduct described by Subsection (a), if engaged in on</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">more than one occasion, constitute conduct that is engaged in pursuant to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the same scheme or course of conduct.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) In this section:</strong></p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Dating relationship," "family," "household," and "member</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of a household" have the meanings assigned by Chapter 71, Family Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Property" includes a pet, companion animal, or assistance</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">animal, as defined by Section 121.002, Human Resources Code.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 42.12. DISCHARGE OF FIREARM IN CERTAIN MUNICIPALITIES.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person commits an offense if the person recklessly discharges a firearm</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">inside the corporate limits of a municipality having a population of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">100,000 or more.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a Class A misdemeanor.</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) If conduct constituting an offense under this section also</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">constitutes an offense under another section of this code, the person may</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">be prosecuted under either section.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -16 -</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) Subsection (a) does not affect the authority of a municipality</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">to enact an ordinance which prohibits the discharge of a firearm.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 42.13. USE OF LASER POINTERS.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">A person commits an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense if the person knowingly directs a light from a laser pointer at a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">uniformed safety officer, including a peace officer, security guard,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">firefighter, emergency medical service worker, or other uniformed</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">municipal, state, or federal officer.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) In this section, "laser pointer" means a device that emits a</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">visible light amplified by the stimulated emission of radiation.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under this section is a Class C misdemeanor, except</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that the offense is:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) a felony of the third degree if the conduct causes bodily</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">injury to the officer; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) a felony of the first degree if the conduct causes serious</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">bodily injury to the officer.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) If conduct that constitutes an offense under this section also</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">constitutes an offense under any other law, the actor may be prosecuted</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under this section or the other law, but not both.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 42.14. ILLUMINATION OF AIRCRAFT BY INTENSE LIGHT.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">A</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">person commits an offense if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the person intentionally directs a light from a laser</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">pointer or other light source at an aircraft; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the light has an intensity sufficient to impair the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">operator's ability to control the aircraft.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) It is an affirmative defense to prosecution under this section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that the actor was using the light to send an emergency distress signal.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) An offense under this section is a Class C misdemeanor unless</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the intensity of the light impairs the operator's ability to control the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">aircraft, in which event the offense is a Class A misdemeanor.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) If conduct that constitutes an offense under this section also</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">constitutes an offense under any other law, the actor may be prosecuted</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under this section or the other law.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) In this section, "laser pointer" has the meaning assigned by</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 42.13.</p>
</div>
`
    },
    
    {
        category: 'Penal Code',
        title: "Chapter 49 - Intoxication Offenses",
        content: `
<h1 style="color: #4fc3f7; font-size: 32px; margin-bottom: 15px;">Chapter 49</h1>
<h2 style="color: #b0b0b0; font-size: 22px; font-weight: normal; margin-bottom: 30px;">Intoxication Offenses</h2>

<div style="background: linear-gradient(to right, rgba(79, 195, 247, 0.25), rgba(79, 195, 247, 0.05)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4fc3f7; border-radius: 5px;">
    <h3 style="color: #4fc3f7; margin: 0 0 10px 0; font-size: 18px;">📖 Quick Summary</h3>
    <p style="font-size: 17px; line-height: 1.7; margin: 0; color: #e0e0e0;">DWI and intoxication</p>
</div>

<div style="background: linear-gradient(to right, rgba(255, 193, 7, 0.2), rgba(255, 193, 7, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #ffc107; border-radius: 5px;">
    <h3 style="color: #ffc107; margin: 0 0 15px 0; font-size: 18px;">⚡ Must Know</h3>
    <ul style="margin: 0; padding-left: 20px; color: #e0e0e0;">
        <li style="margin: 8px 0; font-size: 16px;">DWI = operating while intoxicated</li>
    </ul>
</div>

<div style="background: linear-gradient(to right, rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.03)); 
            padding: 20px 25px; margin: 25px 0; border-left: 6px solid #4caf50; border-radius: 5px;">
    <h3 style="color: #4caf50; margin: 0 0 10px 0; font-size: 18px;">🔑 Key Terms</h3>
    <p style="margin: 0; font-size: 15px;"><strong style='color: #4caf50;'>Intoxicated</strong></p>
</div>

<hr style="border: none; border-top: 2px solid #444; margin: 35px 0;">

<h2 style="color: #4fc3f7; font-size: 24px; margin-bottom: 25px;">📋 Sections</h2>


<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 49.01. DEFINITIONS.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">In this chapter:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Alcohol concentration" means the number of grams of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">alcohol per:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) 210 liters of breath;</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) 100 milliliters of blood; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) 67 milliliters of urine.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Intoxicated" means:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) not having the normal use of mental or physical</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">faculties by reason of the introduction of alcohol, a controlled</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">substance, a drug, a dangerous drug, a combination of two or more of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">those substances, or any other substance into the body; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) having an alcohol concentration of 0.08 or more.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Motor vehicle" has the meaning assigned by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">32.34(a).</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(4) "Watercraft" means a vessel, one or more water skis, an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">aquaplane, or another device used for transporting or carrying a person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">on water, other than a device propelled only by the current of water.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(5) "Amusement ride" has the meaning assigned by Section</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">2151.002, Occupations Code.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(6) "Mobile amusement ride" has the meaning assigned by</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Section 2151.002, Occupations Code.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 49.02. PUBLIC INTOXICATION.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if the person appears in a public place while intoxicated to the degree</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that the person may endanger the person or another.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a-1) For the purposes of this section, a premises licensed or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">permitted under the Alcoholic Beverage Code is a public place.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) It is a defense to prosecution under this section that the</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">alcohol or other substance was administered for therapeutic purposes and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">as a part of the person's professional medical treatment by a licensed</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">physician.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) Except as provided by Subsection (e), an offense under this</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section is a Class C misdemeanor.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) An offense under this section is not a lesser included offense</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">under Section 49.04.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) An offense under this section committed by a person younger</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">than 21 years of age is punishable in the same manner as if the minor</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">committed an offense to which Section 106.071, Alcoholic Beverage Code,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">applies.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 49.031. POSSESSION OF ALCOHOLIC BEVERAGE IN MOTOR VEHICLE.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">In this section:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) "Open container" means a bottle, can, or other receptacle</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that contains any amount of alcoholic beverage and that is open, that has</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">been opened, that has a broken seal, or the contents of which are</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">partially removed.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) "Passenger area of a motor vehicle" means the area of a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">motor vehicle designed for the seating of the operator and passengers of</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page - 1 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the vehicle.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">is locked;</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">The term does not include:</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(A) a glove compartment or similar storage container that</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(B) the trunk of a vehicle; or</p>
<p style="margin: 8px 0 6px 60px; line-height: 1.7; font-size: 15px;">(C) the area behind the last upright seat of the vehicle,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if the vehicle does not have a trunk.</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(3) "Public highway" means the entire width between and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">immediately adjacent to the boundary lines of any public road, street,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">highway, interstate, or other publicly maintained way if any part is open</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">for public use for the purpose of motor vehicle travel.</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">The term</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">includes the right-of-way of a public highway.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) A person commits an offense if the person knowingly possesses</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">an open container in a passenger area of a motor vehicle that is located</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">on a public highway, regardless of whether the vehicle is being operated</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or is stopped or parked. Possession by a person of one or more open</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">containers in a single criminal episode is a single offense.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) It is an exception to the application of Subsection (b) that at</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the time of the offense the defendant was a passenger in:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the passenger area of a motor vehicle designed,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">maintained, or used primarily for the transportation of persons for</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">compensation, including a bus, taxicab, or limousine; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the living quarters of a motorized house coach or</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">motorized house trailer, including a self-contained camper, a motor home,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">or a recreational vehicle.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) An offense under this section is a Class C misdemeanor.</strong></p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(e) A peace officer charging a person with an offense under this</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section, instead of taking the person before a magistrate, shall issue to</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the person a written citation and notice to appear that contains the time</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">and place the person must appear before a magistrate, the name and</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">address of the person charged, and the offense charged. If the person</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">makes a written promise to appear before the magistrate by signing in</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">duplicate the citation and notice to appear issued by the officer, the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">officer shall release the person.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 49.04. DRIVING WHILE INTOXICATED.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense if the person is intoxicated while operating a motor vehicle in a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">public place.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) Except as provided by Subsections (c) and (d) and Section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">49.09, an offense under this section is a Class B misdemeanor, with a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">minimum term of confinement of 72 hours.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) If it is shown on the trial of an offense under this section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that at the time of the offense the person operating the motor vehicle</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">had an open container of alcohol in the person's immediate possession,</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the offense is a Class B misdemeanor, with a minimum term of confinement</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">of six days.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(d) If it is shown on the trial of an offense under this section</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">that an analysis of a specimen of the person's blood, breath, or urine</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">showed an alcohol concentration level of 0.15 or more at the time the</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">analysis was performed, the offense is a Class A misdemeanor.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 49.045. DRIVING WHILE INTOXICATED WITH CHILD PASSENGER.</h4>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -2 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">(a)</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">A person commits an offense if:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) the person is intoxicated while operating a motor vehicle</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">in a public place; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) the vehicle being operated by the person is occupied by a</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">passenger who is younger than 15 years of age.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) An offense under this section is a state jail felony.</strong></p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 49.07. INTOXICATION ASSAULT.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an offense</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">if the person, by accident or mistake:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) while operating an aircraft, watercraft, or amusement ride</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">while intoxicated, or while operating a motor vehicle in a public place</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">while intoxicated, by reason of that intoxication causes serious bodily</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">injury to another; or</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) as a result of assembling a mobile amusement ride while</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">intoxicated causes serious bodily injury to another.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) In this section, "serious bodily injury" means injury that</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">creates a substantial risk of death or that causes serious permanent</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">disfigurement or protracted loss or impairment of the function of any</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">Page -3 -</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">bodily member or organ.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(c) Except as provided by Section 49.09, an offense under this</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section is a felony of the third degree.</p>
</div>

<div style="background: rgba(50, 50, 55, 0.7); padding: 20px; margin: 15px 0; 
            border-left: 4px solid #4ec9b0; border-radius: 5px;">
    <h4 style="color: #4ec9b0; font-size: 18px; margin: 0 0 15px 0;">Sec. 49.08. INTOXICATION MANSLAUGHTER.</h4>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(a) A person commits an</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">offense if the person:</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(1) operates a motor vehicle in a public place, operates an</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">aircraft, a watercraft, or an amusement ride, or assembles a mobile</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">amusement ride; and</p>
<p style="margin: 10px 0 8px 30px; line-height: 1.7;">(2) is intoxicated and by reason of that intoxication causes</p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">the death of another by accident or mistake.</p>
<p style="margin: 20px 0 10px 0; line-height: 1.8;"><strong style="color: #ffc107;">(b) Except as provided by Section 49.09, an offense under this</strong></p>
<p style="margin: 5px 0 5px 10px; line-height: 1.7; color: #e0e0e0;">section is a felony of the second degree.</p>
</div>
`
    },
    
];
