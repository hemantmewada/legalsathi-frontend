const services = [
    // Legal issues
    {
        id: 0,
        name: "Legal Notice Reply",
        slug: "legal-notice-reply",
        type: "legal-issues",
        position: "first-half"
    },
    {
        id: 1,
        name: "Legal Notice Preparation",
        slug: "legal-notice-preparation",
        type: "legal-issues",
        position: "first-half"
    },
    {
        id: 2,
        name: "Legal Consultation",
        slug: "legal-consultation",
        type: "legal-issues",
        position: "first-half"
    },
    {
        id: 3,
        name: "Trademark Registration",
        slug: "trademark-registration",
        type: "legal-issues",
        position: "second-half"
    },
    {
        id: 4,
        name: "Copyright Registration",
        slug: "copyright-registration",
        type: "legal-issues",
        position: "second-half"
    },
    {
        id: 5,
        name: "Patent Registration",
        slug: "patent-registration",
        type: "legal-issues",
        position: "second-half"
    },
    {
        id: 6,
        name: "Design Registration",
        slug: "design-registration",
        type: "legal-issues",
        position: "second-half"
    },
    {
        id: 7,
        name: "Trademark Renewal",
        slug: "trademark-renewal",
        type: "legal-issues",
        position: "second-half"
    },
    // Start A Business
    {
        id: 8,
        name: "Proprietorship",
        slug: "proprietorship",
        type: "start-a-business",
        position: "first-half"
    },
    {
        id: 9,
        name: "Partnership",
        slug: "partnership",
        type: "start-a-business",
        position: "first-half"
    },
    {
        id: 10,
        name: "Private Limited Company",
        slug: "private-limited-company",
        type: "start-a-business",
        position: "first-half"
    },
    {
        id: 11,
        name: "One Person Company",
        slug: "one-person-company",
        type: "start-a-business",
        position: "second-half"
    },
    {
        id: 12,
        name: "Limited Liability Partnership",
        slug: "limited-liability-partnership",
        type: "start-a-business",
        position: "second-half"
    },
    {
        id: 13,
        name: "Nidhi Company",
        slug: "nidhi-company",
        type: "start-a-business",
        position: "second-half"
    },
    {
        id: 14,
        name: "Section 8 Company",
        slug: "section-8-company",
        type: "start-a-business",
        position: "second-half"
    },
    // Compliance
    {
        id: 15,
        name: "Proprietorship Compliance",
        slug: "proprietorship-compliance",
        type: "compliance",
        position: "first-half"
    },
    {
        id: 16,
        name: "Partnership Compliance",
        slug: "partnership-compliance",
        type: "compliance",
        position: "first-half"
    },
    {
        id: 17,
        name: "Company Compliance",
        slug: "company-compliance",
        type: "compliance",
        position: "first-half"
    },
    {
        id: 18,
        name: "LLP Compliance",
        slug: "llp-compliance",
        type: "compliance",
        position: "first-half"
    },
    {
        id: 19,
        name: "Payroll",
        slug: "payroll",
        type: "compliance",
        position: "second-half"
    },
    {
        id: 20,
        name: "PF Registration",
        slug: "pf-registration",
        type: "compliance",
        position: "second-half"
    },
    {
        id: 21,
        name: "PF Return Filing",
        slug: "pf-return-filing",
        type: "compliance",
        position: "second-half"
    },
    {
        id: 22,
        name: "ESI Registration",
        slug: "esi-registration",
        type: "compliance",
        position: "second-half"
    },
    // Goods and Services Tax
    {
        id: 23,
        name: "GST Registration",
        slug: "gst-registration",
        type: "goods-and-services-tax",
        position: "first-half"
    },
    {
        id: 24,
        name: "GST Return Filing",
        slug: "gst-return-filing",
        type: "goods-and-services-tax",
        position: "first-half"
    },
    {
        id: 25,
        name: "GST LUT Filing",
        slug: "gst-lut-filing",
        type: "goods-and-services-tax",
        position: "first-half"
    },
    {
        id: 26,
        name: "GST Registration Cancellation",
        slug: "gst-registration-cancellation",
        type: "goods-and-services-tax",
        position: "first-half"
    },
    {
        id: 27,
        name: "GST Annual Return",
        slug: "gst-annual-return",
        type: "goods-and-services-tax",
        position: "first-half"
    },
    {
        id: 28,
        name: "GST Invoicing",
        slug: "gst-invoicing",
        type: "goods-and-services-tax",
        position: "second-half"
    },
    {
        id: 29,
        name: "GST eInvoicing",
        slug: "gst-einvoicing",
        type: "goods-and-services-tax",
        position: "second-half"
    },
    {
        id: 30,
        name: "eWay Bill",
        slug: "eway-bill",
        type: "goods-and-services-tax",
        position: "second-half"
    },
    {
        id: 31,
        name: "Input Tax Credit",
        slug: "input-tax-credit",
        type: "goods-and-services-tax",
        position: "second-half"
    },
    // Income Tax
    {
        id: 32,
        name: "Personal Tax Filing",
        slug: "personal-tax-filing",
        type: "income-tax",
        position: "first-half"
    },
    {
        id: 33,
        name: "Business Tax Filing",
        slug: "business-tax-filing",
        type: "income-tax",
        position: "first-half"
    },
    {
        id: 34,
        name: "Tax Notice",
        slug: "tax-notice",
        type: "income-tax",
        position: "first-half"
    },
    {
        id: 35,
        name: "TDS Filing",
        slug: "tds-filing",
        type: "income-tax",
        position: "first-half"
    },
    {
        id: 36,
        name: "Form 16",
        slug: "form-16",
        type: "income-tax",
        position: "first-half"
    },
    {
        id: 37,
        name: "ITR-1 Return",
        slug: "itr-1-return",
        type: "income-tax",
        position: "second-half"
    },
    {
        id: 38,
        name: "ITR-2 Return",
        slug: "itr-2-return",
        type: "income-tax",
        position: "second-half"
    },
    {
        id: 39,
        name: "ITR-3 Return",
        slug: "itr-3-return",
        type: "income-tax",
        position: "second-half"
    },
    {
        id: 40,
        name: "ITR-4 Return",
        slug: "itr-4-return",
        type: "income-tax",
        position: "second-half"
    },
    {
        id: 41,
        name: "ITR-5 Return",
        slug: "itr-5-return",
        type: "income-tax",
        position: "second-half"
    },
    {
        id: 42,
        name: "ITR-6 Return",
        slug: "itr-6-return",
        type: "income-tax",
        position: "second-half"
    },
    {
        id: 43,
        name: "ITR-7 Return",
        slug: "itr-7-return",
        type: "income-tax",
        position: "second-half"
    }
];

export default services;
export const documents = [
    "Identity and Address Proof of Partners",
    "PAN Cards of Partners",
    "Passport-sized Photographs of Partners",
    "Proof of Office Address from where the business will be operated",
    "Utility Bill of Registered Office Address like electricity bill",
    "No Objection Certificate (NOC) from the Property Owner (if applicable)",
    "Rent Agreement or registry papers of the property from where the business will be operated",
    "Stamp Paper for Partnership Deed Notarization",
];
export const achievements = [
    {
        id: 0,
        icon: 'fa-regular fa-star',
        title: "10 Years",
        desc: "Of Experience",
    },
    {
        id: 1,
        icon: 'fa-regular fa-star',
        title: "5000 +",
        desc: "Cases Solved",
    },
    {
        id: 2,
        icon: 'fa-regular fa-star',
        title: "15 +",
        desc: "Awards Gained",
    },
    {
        id: 3,
        icon: 'fa-regular fa-star',
        title: "200 k +",
        desc: "Trusted Clients",
    },
    {
        id: 4,
        icon: 'fa-regular fa-star',
        title: "50 k+",
        desc: "Queries Solved",
    },
];

export const primaryColor = "#0b5ca6";