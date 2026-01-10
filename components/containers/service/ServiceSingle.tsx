"use client";
import Link from "next/link";

type ServiceSingleProps = {
  activeSlug?: string;
};

const ServiceSingle = ({ activeSlug }: ServiceSingleProps) => {
  const services = [
    { slug: "big-data", name: "Big Data" },
    { slug: "machine-learning", name: "Machine Learning" },
    { slug: "artificial-intelligence", name: "Artificial Intelligence" },
    { slug: "predictive-analytics", name: "Predictive Analytics" },
    { slug: "data-science", name: "Data Science" },
    { slug: "natural-language-processing", name: "Natural Language Processing" },
  ];

  const serviceContent: Record<string, {
    title: string;
    description1: string;
    description2: string;
    benefits: string[];
    conclusion: string;
  }> = {
    "big-data": {
      title: "Big Data Solutions",
      description1: "Harness the power of massive datasets with our comprehensive Big Data solutions. We help organizations process, store, and analyze petabytes of structured and unstructured data using cutting-edge distributed computing frameworks and cloud-native technologies.",
      description2: "Our Big Data experts design and implement scalable data pipelines, real-time processing systems, and data lakes that enable your business to extract meaningful insights from vast amounts of information. We work with industry-leading platforms to ensure your data infrastructure is robust, efficient, and future-proof.",
      benefits: [
        "Distributed Data Processing (Hadoop, Spark)",
        "Real-time Stream Processing",
        "Data Lake Architecture & Implementation",
        "ETL Pipeline Development",
        "Big Data Analytics & Visualization"
      ],
      conclusion: "We leverage technologies like Apache Hadoop, Apache Spark, Kafka, and cloud platforms (AWS, Azure, GCP) to build scalable Big Data solutions. Our approach focuses on performance optimization, cost efficiency, and seamless integration with your existing systems."
    },
    "machine-learning": {
      title: "Machine Learning Solutions",
      description1: "Transform your business with intelligent systems that learn and adapt from data. Our Machine Learning services help you automate complex decision-making processes, predict future outcomes, and uncover hidden patterns in your data.",
      description2: "We develop custom machine learning models tailored to your specific business needs, from supervised learning for classification and regression to unsupervised learning for clustering and anomaly detection. Our ML engineers ensure models are accurate, interpretable, and production-ready.",
      benefits: [
        "Custom ML Model Development",
        "Supervised & Unsupervised Learning",
        "Feature Engineering & Selection",
        "Model Training & Hyperparameter Tuning",
        "MLOps & Model Deployment"
      ],
      conclusion: "Using frameworks like scikit-learn, XGBoost, TensorFlow, and PyTorch, we build ML solutions that deliver measurable business impact. Our end-to-end approach includes data preprocessing, model development, validation, deployment, and continuous monitoring."
    },
    "artificial-intelligence": {
      title: "Artificial Intelligence Solutions",
      description1: "Deploy enterprise-grade AI solutions that revolutionize your business operations. We specialize in developing intelligent systems that can understand, reason, learn, and interact naturally with users through advanced AI technologies.",
      description2: "Our AI capabilities span natural language processing, computer vision, speech recognition, and intelligent automation. We help organizations implement AI-powered solutions that enhance customer experience, improve operational efficiency, and drive innovation across all business functions.",
      benefits: [
        "Natural Language Processing (NLP)",
        "Computer Vision & Image Recognition",
        "Conversational AI & Chatbots",
        "Intelligent Process Automation",
        "AI Strategy & Consulting"
      ],
      conclusion: "We utilize state-of-the-art AI frameworks and pre-trained models from OpenAI, Google, Microsoft, and others. Our AI solutions are designed to be scalable, secure, and compliant with industry regulations while delivering exceptional user experiences."
    },
    "predictive-analytics": {
      title: "Predictive Analytics Solutions",
      description1: "Anticipate future trends and make proactive decisions with our Predictive Analytics services. We help businesses forecast outcomes, identify risks, and optimize strategies using advanced statistical models and machine learning algorithms.",
      description2: "Our predictive analytics solutions enable you to forecast customer behavior, predict equipment failures, optimize inventory levels, and identify potential opportunities before they arise. We combine domain expertise with advanced analytics to deliver actionable predictions.",
      benefits: [
        "Time Series Forecasting",
        "Customer Churn Prediction",
        "Demand Forecasting & Planning",
        "Risk Assessment & Management",
        "Predictive Maintenance Solutions"
      ],
      conclusion: "We employ advanced techniques including ARIMA, Prophet, LSTM networks, and ensemble methods to build accurate predictive models. Our solutions integrate seamlessly with your BI tools and dashboards for real-time insights and automated decision-making."
    },
    "data-science": {
      title: "Data Science Solutions",
      description1: "Extract maximum value from your data with comprehensive Data Science services. We combine statistical analysis, machine learning, and domain expertise to solve complex business problems and drive data-driven decision making across your organization.",
      description2: "Our data scientists work closely with your teams to understand business challenges, explore data, build analytical models, and deliver insights that drive strategic initiatives. From exploratory data analysis to advanced predictive modeling, we provide end-to-end data science solutions.",
      benefits: [
        "Exploratory Data Analysis (EDA)",
        "Statistical Modeling & Hypothesis Testing",
        "Advanced Analytics & Optimization",
        "Data Visualization & Storytelling",
        "A/B Testing & Experimentation"
      ],
      conclusion: "We use Python, R, SQL, and modern data science tools to deliver comprehensive analytics solutions. Our approach emphasizes reproducibility, collaboration, and clear communication of complex findings to both technical and non-technical stakeholders."
    },
    "natural-language-processing": {
      title: "Natural Language Processing Solutions",
      description1: "Unlock insights from unstructured text data with our NLP solutions. We help organizations understand, interpret, and generate human language using advanced natural language processing and understanding technologies.",
      description2: "Our NLP services enable you to automate document processing, analyze customer sentiment, build intelligent chatbots, extract key information from text, and translate content across languages. We leverage the latest transformer models and neural architectures for superior accuracy.",
      benefits: [
        "Text Classification & Sentiment Analysis",
        "Named Entity Recognition (NER)",
        "Chatbots & Virtual Assistants",
        "Document Understanding & Information Extraction",
        "Machine Translation & Text Generation"
      ],
      conclusion: "We utilize cutting-edge NLP models including BERT, GPT, T5, and domain-specific transformers. Our solutions are built on platforms like Hugging Face, spaCy, and NLTK, ensuring high accuracy and performance for your language processing needs."
    }
  };

  const content = serviceContent[activeSlug || "big-data"];
  
  return (
    <>
      <section className="service-single-area pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 order-2 order-lg-1">
              <div className="service-single__left-item">
                <h3 className="title mb-30">{content.title}</h3>
                <p className="mb-20">
                  {content.description1}
                </p>
                <p>
                  {content.description2}
                </p>
                <div className="row g-5 mt-40 mb-40">
                  <div className="col-lg-12">
                    <h4 className="mb-20">Benefits With Our Service</h4>
                    <ul>
                      {content.benefits.map((benefit, index) => (
                        <li key={index} className="mb-15">
                          <i className="fa-solid fa-check"></i>{benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mb-40">
                  {content.conclusion}
                </p>
              </div>
            </div>
            <div className="col-lg-4 order-1 order-lg-2">
              <div className="service-single__right-item">
                <div className="item sub-bg mb-30">
                  <h4 className="mb-20">All Services</h4>
                  <ul className="category service-category">
                    {services.map((service) => (
                      <li key={service.slug} className={activeSlug === service.slug ? "active" : ""}>
                        <Link href={`/service-details/${service.slug}`}>{service.name}</Link>{" "}
                        <i className="fa-regular fa-arrow-right-long primary-color"></i>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSingle;
