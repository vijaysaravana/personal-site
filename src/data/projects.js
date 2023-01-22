// TODO Add a couple lines about each project
const data = [
  {
    title: 'LiDAR based 3D Object Detection using Intel NCS2 Edge processing',
    subtitle: 'Research with Prof. Ling Liu in 3D Object Detection using Edge Devices',
    image: '/images/projects/lidar3d.png',
    date: '2022-12-20',
    desc: 'Performed research under Professor Ling Liu in 3D object detection leveraging Intel NCS2 to perform LiDAR based 3D object detection using Pointpillars by processing video/PCL frames in parallel – achieved mAP of 58 with 2x inference speedup with 2 NCS sticks.',
  },
  {
    title: 'Implementation of MapReduce Framework using c++ gRPC',
    subtitle: 'Distributed Systems project for CS6210 - Advanced Operating Systems',
    image: '/images/projects/mapreduce.png',
    date: '2021-12-20',
    desc: 'Implemented a MapReduce framework calculating word count from very large text files using gRPC in C++. Performed file sharding and shards were assigned to workers by master for processing. Optimal efficiency was achieved using async completion queues.',
  },
  {
    title: 'Implementation of Paxos Consensus Algorithm',
    subtitle: 'Distributed Systems project for CS7210 - Java DS Labs Project',
    image: '/images/projects/paxos.png',
    date: '2022-12-20',
    desc: 'Implemented the PAXOS consensus algorithm and built a replicated state machine - demonstrated with Paxos Client and Server. A set of replicas process all client requests in the same order, using PAXOS to agree on the order.',
  },
  {
    title: 'Comparative analysis of MongoDB, Apache HBase and Cockroach DB using YCSB benchmarking techniques',
    subtitle: 'Course project for CS6400 - Database Systems Concepts and Design',
    image: '/images/projects/dbbenchmark.png',
    date: '2021-09-20',
    desc: 'A benchmarking study of NoSQL databases with distributed NewSQL CockroachDB using YCSB workloads by setting up high availability clusters on Microsoft Azure. Implemented automation scripts for performing throughput, latency tests and visualization.',
  },
  {
    title: 'Distributed async online store server with gRPC',
    subtitle: 'Distributed Systems project for CS6210 - Advanced Operating Systems',
    image: '/images/projects/gRPC.png',
    date: '2021-11-20',
    desc: 'Designed a distributed online store which processes multiple client requests (async) and retrieves bids from multiple vendors (async) using completion queues in C++. This was parallelized with native implementation of thread pool using thread-safe queues.',
  },
  {
    title: 'Barrier Synchronization Algorithms for Parallel Systems',
    subtitle: 'Parallelization project for CS6210 - Advanced Operating Systems',
    image: '/images/projects/barrier.png',
    date: '2021-10-20',
    desc:
      'Implemented various barrier synchronization algorithms in C such as Sense reversing Centralized barrier, MCS Tree barrier, Dissemination barrier using OpenMP and MPI for multithreaded and multiprocess barrier performance evaluations. The project was run in the GaTech PACE cluster and performance was evaluated by scaling the number of processes/threads.',
  },
  {
    title: 'Jinglecraft - Music Genre and Mood Classification using Million Songs Dataset and GTZAN',
    subtitle: 'Final Project for CS7641 - Machine Learning',
    image: '/images/projects/jingle.png',
    date: '2022-05-20',
    desc:
      'Jinglecraft is a music Genre and Mood classification ML Model. We solved the classification problem using various classifiers such as Random Forest, SVM, Regression and NN - performed a comparitive study among all the classifiers. For Mood classification, we used LastFM dataset and used various classification models (mentioned above) to solve the problem. We also used unsupervised learning techniques such as KMeans to perform clustering of the datapoints.',
  },
  {
    title: 'Pomodoro Time Tracker',
    subtitle: 'Project for CS6301 - Advanced Topics in Software Engineering',
    image: '/images/projects/pomodoro.jpg',
    date: '2021-10-20',
    desc:
      'Pomodoro Time tracker RESTful backend using Java spring boot, Maven, MySQL with CI/CD pipeline implementation using Jenkins. The backend service was used by multiple frontend teams integrating it with mobile applications and websites.',
  },
  {
    title: 'Chicago Crime Prediction based on Temporal and Spatial Data',
    subtitle: 'Project for CS6220 - Big Data Systems and Analytics',
    image: '/images/projects/chicago-crime.png',
    date: '2022-10-20',
    desc:
      'The primary objective of our project is to predict the probability of the occurrence of crime and safety score for a given area at a given time by analyzing historic crime data obtained through crowdsourcing.',
  },
  {
    title: 'vCPU Scheduler and Memory Coordinator for linux KVM',
    subtitle: 'Virtualization project for CS6210 - Advanced Operating Systems',
    image: '/images/projects/kvm.png',
    date: '2021-09-27',
    desc:
      'Designed a vCPU scheduler for pinning vCPUs to pCPUs based on pCPU usage and a memory coordinator for vCPUs based on thresholds using balloon driver with LibVirt APIs in C.',
  },
  {
    title: 'Customisable Emergency Response Management Tool',
    subtitle: 'Runner-up, Platforms-BU Hackathon @ Freshworks',
    image: '/images/projects/erm.jpg',
    date: '2020-12-26',
    desc:
      'Built a customisable ERM application using Java RESTful backend, MySQL, JQuery with Redis cache optimization and Kairos for notifications which bagged the runners-up place in Platforms-BU Hackathon.',
  },
  {
    title: 'Adhoc based smart examination system',
    subtitle: 'Centre for Technology Development and Transfer, Anna University',
    image: '/images/projects/android.jpg',
    date: '2017-05-01',
    desc:
      'Android application used for conducting examinations using the smartphone by Network Service discovery to connect the devices of test takers to the examination host mobile device.'
      + ' WiFi Direct NSD removes the dependency on an ISP and AES-128 encryption is used for security.',
  },
  {
    title: 'Detection of Self-deprecating Sarcasm for prevention of Self harm using LSTM Based DNN',
    subtitle: 'Anna University, Final Year Project',
    image: '/images/projects/sarcasm.jpg',
    date: '2018-01-01',
    desc:
      'Detecting `self-deprecating` sarcasm from tweets using the proposed CNN-BiLSTM-DNN network. '
      + 'The proposed concern level intensity classification (CLIC) tree is used to rank users by decreasing level of concern based on tweet history and the details were forwarded to the suicide prevention helpline of India.',
  },
  {
    title: 'Feature Ensemble based Sarcasm Detection',
    subtitle: 'Springer AISC 2020',
    image: '/images/projects/sarcasm-detector.jpg',
    date: '2017-09-01',
    desc:
      'Feature ensemble based Sarcasm Detection with features such as emoticons, interjections, internet-slang and lexical features'
      + 'with original text corpus was published in ‘Springer AISC 2020.`',
  },
];

export default data;
