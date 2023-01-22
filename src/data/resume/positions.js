const positions = [
  {
    company: 'Woven Planet Holdings, Toyota (Previously Lyft - Level 5)',
    position: 'Software Intern, ML Frameworks',
    link: 'https://www.woven-panet.global',
    daterange: 'May 2022 - Aug 2022',
    points: [
      'Designed the Distributed processing Engine (DPE) using Flyte Map tasks replacing the existing Apache Spark based solution. Achieved similar runtimes and much better GCP logging with 25% less overhead for workflows compared to spark transient cluster setup.',
      'The new DPE solution is used by 12+ ML teams in their Autonomous vehicle software workflows including those which require largescale processing of data like Annotation pipeline workflow, ETL Data Driven planner workflow etc.',
      'Implemented the k8s informer using Go for distributed Pytorch training jobs running on Kubernetes and enabled slack notifications for event status updates. This was a cheaper and faster local alternative for training of ML models than using AWS Sagemaker.',
    ],
  },
  {
    company: 'Freshworks',
    position: 'Senior Software Engineer',
    link: 'https://www.freshworks.com',
    daterange: 'October 2020 - July 2021',
    points: [
      'Engineered the Freshworks Whatsapp platform APIs including proactive messaging & template reconstruction using Facebook business REST APIs in Java & EKS boot automation ‑ scaled for 20000+ customers worldwide who used the Whatsapp channel.',
      'Singlehandedly delivered the integration of Twilio & Gupshup SMS REST APIs using Java& handled their production release using AWS across all regions covering 10000+ customers. This was also integrated with IRIS notification system to reach 3000+ employees.',
      'Optimized message delivery in Apache Kafka by configuring retry interval using exponential back‑off algo in failed & success queues.',
      'Standardized structured API contracts for Whatsapp, SMS, Line, Apple Business Chat and Google Business Messages B2C channels.',
      'Led a team of 3 including graduate trainees and interns in building the omnichannel dashboard using HTML/CSS, JQuery and Java.',
    ],
  },
  {
    company: 'Samsung Research, Bangalore',
    position: 'Senior Software Engineer',
    link: 'https://research.samsung.com/sri-b',
    daterange: 'June 2018 - October 2020',
    points: [
      'Engineered the 4G/5G modem BSP platform focusing on thermal mitigation & modem system bootup for Samsung 5G smartphones with Qualcomm chipsets.',
      'Automated the internal modem crash management system with Python, MySQL, Flask‑RESTFul and Selenium which expedited the stability issues resolution TAT by 25% benefiting the team. The process was parallelized using master‑slave thread architecture.',
      'As an expat in Samsung Electronics Canada and South Korea, I was involved in tackling operator specific modem conformance issues and collaborating with engineering counterparts during the first‑ever 5G smartphone launches in the respective countries.',
      'Recipient of ’Samsung Citizen Award’ in Q2 2019 for research ideation (Multicore memory management) and development contributions.',
      'Brainstormed and co-authored the research paper “Dynamic pool-based memory management in multicore RTOS”  (optimization over the proposed patent) - selected in ‘Embedded systems and computational enhancements’ domain for Samsung Best paper 2019.',
    ],
  },

  {
    company: 'Samsung Research, Bangalore',
    position: 'Summer Intern',
    link: 'https://research.samsung.com/sri-b',
    daterange: 'May 2017 - July 2017',
    points: [
      'Implemented proof of concept for the patent “Lockless resource management in a multicore RTOS” in C for 5G packet processing usecase which was graded A1. A Performance gain of 30% was achieved by replacing SPIN locks with sub‑queues in a multicore SMP.',
      'Submitted white paper "Remote graphics rendering with 5G as a link" as a use case for 5G NR URLLC.',
    ],
  },
];

export default positions;
