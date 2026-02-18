import PageHeader from "./Header/Header";

const AMLPolicy = () => {
  return (
    <div style={styles.page}>
      <PageHeader title="AML Policy" />

      <div style={styles.content}>
        <h2 style={styles.sectionHeading}>1. Purpose and Scope</h2>
        <p style={styles.paragraph}>
          This AML/CFT Policy establishes the internal framework of Forward Solutions B.V.
          (&quot;the Company&quot;) to prevent its gaming platform, TigerBet247, from being
          used for money laundering, terrorist financing, or other financial crimes.
        </p>
        <p style={styles.paragraph}>This Policy applies to:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>All players and users of TigerBet247</li>
          <li style={styles.listItem}>All employees, contractors, and agents</li>
          <li style={styles.listItem}>All partners providing payment, KYC, data-processing, or compliance services</li>
        </ul>
        <p style={styles.paragraph}>
          The Company complies with applicable Curaçao AML legislation, FATF Recommendations,
          and relevant EU AML Directives as adopted locally.
        </p>

        <h2 style={styles.sectionHeading}>2. Governance and Accountability</h2>

        <h3 style={styles.subHeading}>2.1 Money Laundering Reporting Officer (MLRO)</h3>
        <p style={styles.paragraph}>
          A qualified MLRO is appointed to design, maintain, and oversee the AML program.
          Responsibilities include:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Implementing and updating this Policy</li>
          <li style={styles.listItem}>Reviewing alerts and internal suspicious activity reports</li>
          <li style={styles.listItem}>Communicating with the Financial Intelligence Unit (FIU Curaçao)</li>
          <li style={styles.listItem}>Ensuring staff training and proper recordkeeping</li>
          <li style={styles.listItem}>Reporting annually to senior management</li>
        </ul>

        <h3 style={styles.subHeading}>2.2 Management Oversight</h3>
        <p style={styles.paragraph}>Senior management:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Provides oversight and adequate resources for AML controls</li>
          <li style={styles.listItem}>Ensures the independence of the MLRO</li>
          <li style={styles.listItem}>Reviews AML performance and audit results at least once per year</li>
        </ul>

        <h2 style={styles.sectionHeading}>3. Risk-Based Approach</h2>
        <p style={styles.paragraph}>
          TigerBet247 applies a risk-based framework, categorizing customers and transactions
          as low, medium, or high risk based on:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Country of residence or IP location</li>
          <li style={styles.listItem}>Payment methods (including crypto and fiat channels)</li>
          <li style={styles.listItem}>Transaction volume and behavioral patterns</li>
          <li style={styles.listItem}>Gameplay indicators and account activity</li>
        </ul>
        <p style={styles.paragraph}>
          Enhanced controls and manual reviews apply to high-risk customers and transactions.
        </p>

        <h2 style={styles.sectionHeading}>4. Control Measures</h2>

        <h3 style={styles.subHeading}>4.1 Customer Due Diligence (CDD)</h3>
        <p style={styles.paragraph}>
          Objective: Verify the identity of each customer and ensure funds are legitimate before
          significant transactions occur. Process includes:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Collection of information (full name, date of birth, residential address, email, and payment method)</li>
          <li style={styles.listItem}>Identity verification (government-issued photo ID and proof of address not older than three months)</li>
          <li style={styles.listItem}>Payment method verification (confirmation of ownership of the card, wallet, or account used)</li>
          <li style={styles.listItem}>Sanction screening (against FATF, EU, UN, and OFAC lists at onboarding and periodically thereafter)</li>
        </ul>
        <p style={styles.paragraph}>
          Accounts may be frozen or terminated if identity verification fails or sanction matches are identified.
        </p>

        <h3 style={styles.subHeading}>4.2 Enhanced Due Diligence (EDD)</h3>
        <p style={styles.paragraph}>
          Objective: Apply additional scrutiny to high-risk customers or transactions.
        </p>
        <p style={styles.paragraph}>EDD triggers include:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Residence in high-risk or sanctioned jurisdictions</li>
          <li style={styles.listItem}>Politically Exposed Persons (PEPs) or close associates</li>
          <li style={styles.listItem}>Large or unusual crypto asset transactions</li>
          <li style={styles.listItem}>Activity inconsistent with declared income or profile</li>
        </ul>
        <p style={styles.paragraph}>EDD measures include:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Requesting additional documentation (source of funds, bank statements, employment proof)</li>
          <li style={styles.listItem}>Conducting enhanced background and identity checks</li>
          <li style={styles.listItem}>Applying lower transaction limits or manual withdrawal approvals</li>
          <li style={styles.listItem}>Requiring senior management authorization before activation or payouts</li>
          <li style={styles.listItem}>Increasing the frequency of ongoing monitoring</li>
        </ul>
        <p style={styles.paragraph}>All EDD cases are documented and retained for audit and regulatory review.</p>

        <h3 style={styles.subHeading}>4.3 Transaction Monitoring</h3>
        <p style={styles.paragraph}>
          Objective: Identify and report transactions that may indicate money laundering or terrorist financing.
        </p>
        <p style={styles.paragraph}>Risk alerts are triggered for patterns such as:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Rapid deposits followed by immediate withdrawals with minimal gameplay</li>
          <li style={styles.listItem}>Use of multiple payment sources or wallets</li>
          <li style={styles.listItem}>Linked accounts sharing IPs or payment methods</li>
          <li style={styles.listItem}>Behavior inconsistent with normal player activity</li>
          <li style={styles.listItem}>Crypto-to-fiat conversions without genuine gaming intent</li>
        </ul>
        <p style={styles.paragraph}>
          Daily manual review of alerts is performed by the MLRO, and monitoring systems are tested and refined regularly.
        </p>

        <h3 style={styles.subHeading}>4.4 Suspicious Activity Detection and Reporting</h3>
        <p style={styles.paragraph}>
          Objective: Ensure timely reporting of suspicious activities. Procedures include:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Internal reporting — employees must submit Suspicious Activity Reports to the MLRO immediately upon suspicion</li>
          <li style={styles.listItem}>MLRO review of evidence to determine escalation</li>
          <li style={styles.listItem}>External reporting to the FIU Curaçao without delay where suspicions are confirmed</li>
          <li style={styles.listItem}>Non-disclosure — employees must not inform customers or third parties about filed reports</li>
          <li style={styles.listItem}>Record retention of SARs and supporting documentation for at least five years</li>
        </ul>

        <h2 style={styles.sectionHeading}>5. Prohibited Jurisdictions and Customers</h2>
        <p style={styles.paragraph}>
          TigerBet247 does not onboard or provide services to customers from jurisdictions where
          online gaming is prohibited or where AML risk is deemed unacceptable. These include,
          but are not limited to:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Afghanistan, Albania, Algeria, Angola, Australia, Barbados, Belgium, Bulgaria</li>
          <li style={styles.listItem}>Cambodia, Cayman Islands, Central African Republic, China, Colombia, Cuba, Curaçao</li>
          <li style={styles.listItem}>Democratic Republic of Congo, Denmark, Ecuador, France (including territories), Ghana, Greece</li>
          <li style={styles.listItem}>Guyana, Haiti, Hong Kong, Iran, Iraq, Israel, Italy, Jamaica, Jordan, Kuwait</li>
          <li style={styles.listItem}>Lao PDR, Latvia, Lithuania, Myanmar, Netherlands, Nicaragua, North Korea, Pakistan, Panama</li>
          <li style={styles.listItem}>Philippines, Poland, Portugal, Singapore, Slovakia, Slovenia, South Sudan, Spain, Sudan</li>
          <li style={styles.listItem}>Syria, Turkey, Uganda, United Kingdom, United States of America (including territories)</li>
          <li style={styles.listItem}>Vanuatu, Venezuela, Yemen, Zimbabwe</li>
        </ul>
        <p style={styles.paragraph}>
          The Company reserves the right to update this list in accordance with regulatory guidance and risk assessments.
        </p>

        <h2 style={styles.sectionHeading}>6. Recordkeeping</h2>
        <p style={styles.paragraph}>
          All KYC documentation, EDD records, transaction data, and suspicious activity reports
          are securely stored for a minimum of five years after the end of the customer
          relationship. Records are encrypted and made available to regulators upon lawful request.
        </p>

        <h2 style={styles.sectionHeading}>7. Training and Awareness</h2>
        <p style={styles.paragraph}>
          All employees receive AML/CFT training upon hiring and annually thereafter. Training covers:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Identification of suspicious behavior and red flags</li>
          <li style={styles.listItem}>Proper CDD and EDD procedures</li>
          <li style={styles.listItem}>Internal reporting processes</li>
          <li style={styles.listItem}>Confidentiality and anti-tipping-off obligations</li>
        </ul>
        <p style={styles.paragraph}>Training completion and understanding are monitored by the MLRO.</p>

        <h2 style={styles.sectionHeading}>8. Independent Audit</h2>
        <p style={styles.paragraph}>
          An independent audit of AML controls is conducted annually to verify compliance with
          Curaçao requirements, system integrity, and staff competence. Audit findings are
          reviewed by senior management and addressed through documented corrective action plans.
        </p>

        <h2 style={styles.sectionHeading}>9. Policy Review and Updates</h2>
        <p style={styles.paragraph}>
          This Policy is reviewed at least annually or immediately following material regulatory
          changes or audit recommendations. Revisions are approved by senior management and
          communicated to relevant personnel.
        </p>

        <h2 style={styles.sectionHeading}>10. Contact Information</h2>
        <p style={styles.paragraph}>
          Compliance Department: <strong>compliance@tigerbet247.com</strong>
        </p>
        <p style={styles.paragraph}>
          Operator: <strong>Forward Solutions B.V., Curaçao</strong>
        </p>
        <p style={styles.paragraph}>
          Website: <strong>www.tigerbet247.com</strong>
        </p>
      </div>
    </div>
  );
};

const baseFont =
  '-apple-system, BlinkMacSystemFont, "SF Pro", "SF Pro Display", "Helvetica Neue", Arial, sans-serif';

const styles = {
  page: {
    width: '100%',
    maxWidth: '1188px',
    backgroundColor: '#f5f7fb',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 18px rgba(15, 23, 42, 0.06)',
  },
  content: {
    padding: '24px 32px 32px',
    backgroundColor: '#ffffff',
  },
  sectionHeading: {
    fontFamily: baseFont,
    fontWeight: 590,
    fontStyle: 'normal',
    fontSize: '24px',
    lineHeight: '100%',
    letterSpacing: '0',
    color: '#111827',
    margin: '24px 0 8px',
  },
  subHeading: {
    fontFamily: baseFont,
    fontWeight: 590,
    fontStyle: 'normal',
    fontSize: '20px',
    lineHeight: '100%',
    letterSpacing: '0',
    color: '#111827',
    margin: '20px 0 6px',
  },
  paragraph: {
    fontFamily: baseFont,
    fontSize: '14px',
    lineHeight: '150%',
    color: '#4b5563',
    margin: '0 0 8px',
    maxWidth: '900px',
  },
  list: {
    fontFamily: baseFont,
    fontSize: '14px',
    lineHeight: '150%',
    color: '#4b5563',
    margin: '0 0 8px',
    paddingLeft: '24px',
    maxWidth: '900px',
    listStyleType: 'disc',
  },
  listItem: {
    marginBottom: '6px',
    display: 'list-item',
    listStyleType: 'disc',
  },
};

export default AMLPolicy;
