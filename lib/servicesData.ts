import {
  CloudIcon,
  ShieldCheckIcon,
  BarChart3Icon,
  ServerIcon,
  CodeIcon,
  Network,
  HardDrive,
  HeadphonesIcon,
  LockIcon,
  UserCheckIcon,
  AlertTriangleIcon,
  SearchIcon,
  FileTextIcon,
  DatabaseIcon,
  TrendingUpIcon,
  BrainIcon,
  CloudUploadIcon,
  CloudOffIcon,
  ServerCrashIcon,
  ShieldIcon,
} from "lucide-react";

export const services = [
  {
    title: "Managed Services",
    description:
      "Our comprehensive managed services provide a cost-effective way for organizations to outsource the management and maintenance of their IT systems. We offer tailored solutions to meet your specific needs, whether you're a small business or a large enterprise.",
    features: [
      {
        icon: Network,
        title: "IT Consulting",
        id: "it-consulting",
        description:
          "Our IT consulting services provide expert guidance on technology strategy, planning, and implementation. We work closely with your team to align technology with your business goals, ensuring that your IT infrastructure supports your organization's objectives and drives growth.",
        imageSrc: "/placeholder.svg?height=400&width=800",
        benefits: [
          "Tailored IT strategies aligned with business goals",
          "Cost-effective technology solutions",
          "Improved operational efficiency",
          "Access to expert knowledge and industry best practices",
        ],
        potentialOutcomes: {
          description:
            "By leveraging our IT consulting services, your organization can achieve:",
          results: [
            "Up to 30% reduction in IT operational costs",
            "50% faster deployment of new services and technologies",
            "Significantly improved data security and compliance with industry regulations",
            "Enhanced competitive advantage through strategic use of technology",
          ],
        },
      },
      {
        icon: ServerIcon,
        title: "Network Management",
        id: "network-management",
        description:
          "Our comprehensive network management services ensure the optimal performance, security, and reliability of your IT infrastructure. We proactively monitor, maintain, and troubleshoot your systems, allowing you to focus on your core business activities without worrying about IT issues.",
        imageSrc: "/placeholder.svg?height=400&width=800",
        benefits: [
          "24/7 network monitoring and support",
          "Proactive issue resolution",
          "Improved network performance and reliability",
          "Reduced downtime and business disruptions",
        ],
        potentialOutcomes: {
          description:
            "Implementing our network management services can lead to:",
          results: [
            "99.99% network uptime across all locations",
            "Up to 70% reduction in IT-related incidents",
            "Seamless integration of new locations or remote offices into the existing network",
            "Improved employee productivity due to reliable and fast network access",
          ],
        },
      },
      {
        icon: HardDrive,
        title: "Backup and Disaster Recovery",
        id: "backup-and-disaster-recovery",
        description:
          "Our robust backup and disaster recovery solutions ensure business continuity in the face of unexpected events. We implement comprehensive strategies to protect your critical data and systems, minimizing the risk of data loss and reducing recovery time in case of disasters.",
        imageSrc: "/placeholder.svg?height=400&width=800",
        benefits: [
          "Automated, regular backups of critical data",
          "Rapid recovery of systems and data in case of disasters",
          "Reduced risk of data loss",
          "Compliance with data protection regulations",
        ],
        potentialOutcomes: {
          description:
            "With our backup and disaster recovery solutions, you can expect:",
          results: [
            "Reduction in recovery time from 24+ hours to as little as 2 hours",
            "100% success rate in disaster recovery drills",
            "Full compliance with data protection requirements specific to your industry",
            "Minimized financial impact from potential data loss or system downtime",
          ],
        },
      },
      {
        icon: HeadphonesIcon,
        title: "Helpdesk Support",
        id: "helpdesk-support",
        description:
          "Our responsive helpdesk support provides quick and efficient resolution to IT issues, ensuring minimal disruption to your business operations. Our team of skilled technicians is available to assist your employees with a wide range of technical problems, improving productivity across your organization.",
        imageSrc: "/placeholder.svg?height=400&width=800",
        benefits: [
          "Rapid resolution of IT issues",
          "Improved employee productivity",
          "Reduced IT-related downtime",
          "Scalable support for growing organizations",
        ],
        potentialOutcomes: {
          description:
            "By implementing our helpdesk support services, your organization can achieve:",
          results: [
            "Up to 90% of issues resolved on first contact",
            "Average response time reduced from hours to minutes",
            "98% or higher user satisfaction rate",
            "Significant increase in employee productivity due to minimized IT disruptions",
          ],
        },
      },
    ],
  },
  {
    title: "Cybersecurity",
    id: "cybersecurity",
    description:
      "Our advanced cybersecurity solutions protect your organization against evolving threats in the digital landscape, ensuring the safety and integrity of your data and systems.",
    features: [
      {
        icon: ShieldCheckIcon,
        title: "Proactive Security Management",
        description:
          "We implement and manage cutting-edge security measures to prevent cyber attacks before they occur. Our team continuously monitors your systems, applies security patches, and updates defenses to stay ahead of emerging threats.",
        imageSrc: "/placeholder.svg?height=400&width=800",
        benefits: [
          "Proactive threat detection and prevention",
          "Reduced risk of cyber attacks",
          "Improved data security and compliance",
          "Enhanced peace of mind",
        ],
        potentialOutcomes: {
          description:
            "With our proactive security management, you can expect:",
          results: [
            "Up to 99.9% reduction in successful cyber attacks",
            "Significant improvement in compliance with industry regulations",
            "Enhanced customer trust and confidence in your digital services",
            "Minimized financial and reputational risks associated with data breaches",
          ],
        },
      },
      {
        icon: UserCheckIcon,
        title: "Identity and Access Control",
        description:
          "Our robust systems ensure that only authorized personnel can access sensitive information and systems. We implement multi-factor authentication, role-based access control, and regular access audits to maintain the principle of least privilege.",
        imageSrc: "/placeholder.svg?height=400&width=800",
        benefits: [
          "Enhanced data security and protection",
          "Improved compliance with industry regulations",
          "Reduced risk of unauthorized access",
          "Simplified user management",
        ],
        potentialOutcomes: {
          description:
            "Implementing our identity and access control solutions can lead to:",
          results: [
            "Near 100% prevention of unauthorized access attempts",
            "Full compliance with industry-specific access control regulations",
            "Streamlined user management, reducing IT administrative overhead by up to 40%",
            "Improved user experience through single sign-on (SSO) capabilities",
          ],
        },
      },
      {
        icon: AlertTriangleIcon,
        title: "Rapid Incident Response",
        description:
          "In the event of a security breach, our team quickly identifies, contains, and mitigates the threat. We have established protocols and tools in place to minimize damage and restore normal operations as quickly as possible.",
        imageSrc: "/placeholder.svg?height=400&width=800",
        benefits: [
          "Minimized downtime and data loss",
          "Rapid recovery from security incidents",
          "Reduced financial impact of breaches",
          "Improved business continuity",
        ],
        potentialOutcomes: {
          description:
            "Our rapid incident response capabilities can help you achieve:",
          results: [
            "Containment of security breaches within hours of detection",
            "Minimal to zero data loss in the event of a breach",
            "Restoration of normal operations within 24 hours for most incidents",
            "Significantly reduced financial and reputational impact from security incidents",
          ],
        },
      },
      {
        icon: SearchIcon,
        title: "Thorough Penetration Testing",
        description:
          "We simulate real-world cyber attacks to identify and address vulnerabilities in your systems. Our ethical hackers use the latest techniques to test your defenses, providing detailed reports and recommendations for improvement.",
        imageSrc: "/placeholder.svg?height=400&width=800",
        benefits: [
          "Identification of security vulnerabilities",
          "Improved security posture",
          "Reduced risk of cyber attacks",
          "Compliance with industry regulations",
        ],
        potentialOutcomes: {
          description:
            "Through our penetration testing services, you can expect to:",
          results: [
            "Identify and address critical vulnerabilities before they can be exploited",
            "Improve overall security posture by up to 60%",
            "Achieve and maintain compliance with industry security standards",
            "Reduce the risk of successful cyber attacks by up to 80%",
          ],
        },
      },
      {
        icon: FileTextIcon,
        title: "Compliance with HIPAA, PCI-DSS, SOC 2",
        description:
          "We ensure your systems meet industry-standard compliance requirements, protecting your business and customers. Our team stays up-to-date with the latest regulations and implements necessary controls to maintain compliance.",
        imageSrc: "/placeholder.svg?height=400&width=800",
        benefits: [
          "Compliance with industry regulations",
          "Reduced risk of fines and penalties",
          "Improved customer trust and confidence",
          "Enhanced data security",
        ],
        potentialOutcomes: {
          description:
            "By leveraging our compliance services, your organization can:",
          results: [
            "Achieve and maintain full compliance with relevant industry standards",
            "Pass compliance audits with minimal to no findings",
            "Reduce the risk of costly fines and penalties by up to 100%",
            "Increase customer trust, potentially leading to 20% growth in new business",
          ],
        },
      },
    ],
  },
  {
    title: "Data Analytics",
    description:
      "Transform your raw data into actionable insights with our comprehensive data analytics services, empowering your organization to make data-driven decisions.",
    features: [
      {
        icon: DatabaseIcon,
        title: "Scalable Data Warehousing Solutions",
        description:
          "We design and implement robust data warehouses that grow with your business, ensuring efficient data storage and retrieval. Our solutions integrate data from various sources, providing a single source of truth for your organization.",
        imageSrc: "/placeholder.svg?height=400&width=800",
        benefits: [
          "Efficient data storage and retrieval",
          "Improved data quality",
          "Enhanced decision-making",
          "Scalability to meet growing data needs",
        ],
        potentialOutcomes: {
          description:
            "By implementing our scalable data warehousing solutions, you can achieve:",
          results: [
            "Up to 75% reduction in data retrieval time",
            "Improved data quality leading to 30% more accurate forecasting and decision-making",
            "Ability to handle 300% or more growth in data volume without performance degradation",
            "Unified view of business data, enabling more comprehensive analytics and insights",
          ],
        },
      },
      {
        icon: TrendingUpIcon,
        title: "Advanced Data Mining Techniques",
        description:
          "Our expert team employs sophisticated algorithms to uncover hidden patterns and valuable insights in your data. We use statistical analysis, machine learning, and data visualization to extract meaningful information from complex datasets.",
        imageSrc: "/placeholder.svg?height=400&width=800",
        benefits: [
          "Uncovering hidden patterns and insights",
          "Improved decision-making",
          "Increased efficiency",
          "Competitive advantage",
        ],
        potentialOutcomes: {
          description:
            "Leveraging our advanced data mining techniques can lead to:",
          results: [
            "Discovery of new business opportunities, potentially increasing revenue by 15-20%",
            "Improved customer segmentation, leading to more targeted and effective marketing campaigns",
            "Early detection of potential issues or anomalies, reducing risk and improving operational efficiency by up to 30%",
            "Enhanced predictive modeling capabilities, improving forecast accuracy by 25-40%",
          ],
        },
      },
      {
        icon: BarChart3Icon,
        title: "Intuitive Data Visualization",
        description:
          "We create clear, interactive visualizations that make complex data easy to understand and act upon. Our dashboards and reports provide real-time insights, allowing stakeholders to quickly grasp key metrics and trends.",
        imageSrc: "/placeholder.svg?height=400&width=800",
        benefits: [
          "Easy-to-understand data visualizations",
          "Improved decision-making",
          "Enhanced communication",
          "Increased efficiency",
        ],
        potentialOutcomes: {
          description:
            "Through our intuitive data visualization services, you can expect to:",
          results: [
            "Reduce time spent on data analysis by up to 50%, allowing for faster decision-making",
            "Improve stakeholder understanding and buy-in for data-driven initiatives",
            "Increase data accessibility across the organization, fostering a data-driven culture",
            "Identify trends and anomalies more quickly, potentially saving up to 20% in operational costs",
          ],
        },
      },
      {
        icon: BrainIcon,
        title: "Cutting-edge Machine Learning Services",
        description:
          "Leverage the power of AI and machine learning to predict trends and automate decision-making processes. We develop and deploy custom machine learning models that can enhance various aspects of your business, from customer behavior prediction to process optimization.",
        imageSrc: "/placeholder.svg?height=400&width=800",
        benefits: [
          "Improved decision-making",
          "Increased efficiency",
          "Competitive advantage",
          "Automation of processes",
        ],
        potentialOutcomes: {
          description:
            "By implementing our machine learning services, your organization can achieve:",
          results: [
            "Up to 40% improvement in prediction accuracy for key business metrics",
            "Automation of repetitive tasks, potentially reducing operational costs by 25-35%",
            "Enhanced customer experience through personalized recommendations, potentially increasing customer retention by 15-20%",
            "Early detection of equipment failures or maintenance needs, reducing downtime by up to 50%",
          ],
        },
      },
    ],
  },
  {
    title: "Cloud Computing",
    description:
      "Experience seamless transition to cloud-based IT services with our comprehensive cloud solutions, enhancing scalability, flexibility, and cost-efficiency for your organization.",
    features: [
      {
        icon: CloudUploadIcon,
        title: "Smooth Cloud Migration",
        description:
          "We ensure a seamless transition of your existing systems and data to the cloud, minimizing disruption to your business. Our team carefully plans and executes the migration process, considering factors such as data integrity, application compatibility, and performance optimization.",
        imageSrc: "/placeholder.svg?height=400&width=800",
        benefits: [
          "Reduced IT infrastructure costs",
          "Increased scalability and flexibility",
          "Improved business continuity",
          "Enhanced security",
        ],
        potentialOutcomes: {
          description:
            "Through our smooth cloud migration services, you can expect to achieve:",
          results: [
            "Reduction in IT infrastructure costs by up to 40%",
            "Improvement in system uptime from 99.9% to 99.99% or higher",
            "Ability to scale resources dynamically, supporting rapid business growth",
            "Enhanced disaster recovery capabilities, reducing potential downtime by up to 80%",
          ],
        },
      },
      {
        icon: CloudOffIcon,
        title: "Seamless Cloud Integration",
        description:
          "Our experts integrate cloud services with your existing infrastructure for optimal performance and efficiency. We ensure that your on-premises systems work harmoniously with cloud services, creating a hybrid environment that leverages the best of both worlds.",
        imageSrc: "/placeholder.svg?height=400&width=800",
        benefits: [
          "Improved operational efficiency",
          "Increased scalability and flexibility",
          "Enhanced security",
          "Reduced IT infrastructure costs",
        ],
        potentialOutcomes: {
          description:
            "By leveraging our seamless cloud integration services, your organization can:",
          results: [
            "Achieve up to 30% improvement in operational efficiency",
            "Reduce data access and processing time by 50% or more",
            "Implement robust security measures ensuring compliance with industry standards",
            "Create a flexible IT environment capable of adapting to changing business needs quickly",
          ],
        },
      },
      {
        icon: ServerCrashIcon,
        title: "Efficient Cloud Management (AWS, Azure, GCP)",
        description:
          "We provide ongoing management and optimization of your cloud infrastructure across major platforms. Our team monitors performance, manages costs, and implements best practices to ensure you get the most value from your cloud investments.",
        imageSrc: "/placeholder.svg?height=400&width=800",
        benefits: [
          "Reduced cloud management costs",
          "Improved performance and reliability",
          "Enhanced security",
          "Increased efficiency",
        ],
        potentialOutcomes: {
          description:
            "Through our efficient cloud management services, you can expect to:",
          results: [
            "Reduce cloud spending by up to 35% through optimization and right-sizing",
            "Improve application performance by 50% or more through proper resource allocation",
            "Achieve 99.999% uptime for critical systems, even during peak demand periods",
            "Enhance security posture, potentially reducing the risk of data breaches by up to 60%",
          ],
        },
      },
      {
        icon: ShieldIcon,
        title: "Robust Cloud Security Measures",
        description:
          "Our comprehensive security protocols ensure your data remains safe and compliant in the cloud environment. We implement encryption, access controls, and regular security audits to protect your cloud-based assets from threats and unauthorized access.",
        imageSrc: "/placeholder.svg?height=400&width=800",
        benefits: [
          "Enhanced data security",
          "Improved compliance",
          "Reduced risk of data breaches",
          "Increased peace of mind",
        ],
        potentialOutcomes: {
          description:
            "By implementing our robust cloud security measures, your organization can:",
          results: [
            "Achieve near-zero security breaches in your cloud environment",
            "Maintain full compliance with industry-specific regulations (e.g., HIPAA, PCI-DSS)",
            "Reduce the risk of data loss or unauthorized access by up to 80%",
            "Increase customer trust, potentially leading to 20% growth in new business opportunities",
          ],
        },
      },
    ],
  },
  {
    title: "Software Solutions",
    description:
      "We design and develop custom software solutions tailored to your unique business needs, helping you streamline operations and gain a competitive edge.",
    features: [
      {
        icon: CodeIcon,
        title: "Custom Software Development",
        description:
          "Our team of expert developers creates bespoke software solutions that address your specific business challenges. We follow industry best practices and use the latest technologies to deliver high-quality, scalable, and maintainable software.",
        imageSrc: "/placeholder.svg?height=400&width=800",
        benefits: [
          "Tailored software solutions",
          "Improved operational efficiency",
          "Increased productivity",
          "Competitive advantage",
        ],
        potentialOutcomes: {
          description:
            "By leveraging our custom software development services, you can achieve:",
          results: [
            "Up to 40% improvement in operational efficiency through tailored workflows",
            "Reduction in manual processes by 60-80%, significantly decreasing human error",
            "Increased employee productivity by 25-35% through streamlined operations",
            "Enhanced competitive advantage through unique, proprietary software solutions",
          ],
        },
      },
      {
        icon: ServerIcon,
        title: "Web and Mobile App Development",
        description:
          "We build responsive, user-friendly web and mobile applications that engage your customers and streamline your operations. Our apps are designed with a focus on user experience and performance, ensuring they meet the needs of your target audience.",
        imageSrc: "/placeholder.svg?height=400&width=800",
        benefits: [
          "Engaging user experience",
          "Improved customer engagement",
          "Increased efficiency",
          "Competitive advantage",
        ],
        potentialOutcomes: {
          description:
            "Through our web and mobile app development services, you can expect to:",
          results: [
            "Increase user engagement by up to 40% through intuitive, responsive designs",
            "Boost customer retention rates by 25-30% with personalized app experiences",
            "Improve operational efficiency by 30-50% through streamlined digital processes",
            "Expand market reach by tapping into the growing mobile user base",
          ],
        },
      },
      {
        icon: CloudIcon,
        title: "Cloud-Native Applications",
        description:
          "Leverage the full potential of cloud computing with our scalable, resilient cloud-native applications. We design and develop applications that take full advantage of cloud services, enabling rapid deployment, automatic scaling, and improved reliability.",
        imageSrc: "/placeholder.svg?height=400&width=800",
        benefits: [
          "Increased scalability and flexibility",
          "Improved reliability",
          "Reduced costs",
          "Faster deployment",
        ],
        potentialOutcomes: {
          description:
            "By developing cloud-native applications with us, your organization can:",
          results: [
            "Achieve near-infinite scalability, supporting business growth without performance degradation",
            "Reduce application deployment time by up to 70% through automated processes",
            "Improve application reliability, potentially achieving 99.99% uptime",
            "Decrease infrastructure costs by 30-50% through efficient resource utilization",
          ],
        },
      },
      {
        icon: ShieldCheckIcon,
        title: "Secure and Compliant Solutions",
        description:
          "All our software solutions are built with security in mind, ensuring compliance with relevant industry standards. We incorporate security best practices throughout the development lifecycle and conduct regular security audits to protect your data and systems.",
        imageSrc: "/placeholder.svg?height=400&width=800",
        benefits: [
          "Enhanced data security",
          "Improved compliance",
          "Reduced risk of data breaches",
          "Increased peace of mind",
        ],
        potentialOutcomes: {
          description:
            "Through our secure and compliant software solutions, you can expect to:",
          results: [
            "Achieve full compliance with industry-specific regulations (e.g., HIPAA, GDPR, PCI-DSS)",
            "Reduce the risk of data breaches by up to 80% through robust security measures",
            "Increase customer trust and confidence, potentially leading to 20-30% growth in business",
            "Minimize the financial impact of potential security incidents by up to 60%",
          ],
        },
      },
    ],
  },
];
