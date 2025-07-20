import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'CI/CD Pipeline with AWS & Jenkins',
    description: 'Comprehensive CI/CD pipeline leveraging AWS services and Jenkins for automated deployment.',
    longDescription: 'Built a robust CI/CD pipeline that automates the entire software development lifecycle from code commit to production deployment. The pipeline integrates multiple AWS services and uses Jenkins for orchestration.',
    technologies: ['AWS CodePipeline', 'Jenkins', 'Docker', 'Terraform', 'AWS EC2', 'AWS S3', 'Git'],
    features: [
      'Automated testing and code quality checks',
      'Docker containerization for consistent deployments',
      'Infrastructure as Code with Terraform',
      'Multi-environment deployment (dev, staging, prod)',
      'Rollback capabilities and monitoring integration',
      'Security scanning and compliance checks'
    ],
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'Cloud Infrastructure Automation',
    description: 'Automated AWS infrastructure provisioning using Terraform and Ansible for scalable deployments.',
    longDescription: 'Developed a comprehensive infrastructure automation solution that provisions and manages AWS resources automatically. The system uses Infrastructure as Code principles to ensure consistency and repeatability.',
    technologies: ['Terraform', 'Ansible', 'AWS', 'Python', 'Bash', 'CloudFormation', 'AWS CLI'],
    features: [
      'Auto-scaling EC2 instances based on demand',
      'Load balancer configuration and SSL termination',
      'Database provisioning with backup strategies',
      'Network security with VPC and security groups',
      'Cost optimization through resource tagging',
      'Disaster recovery and multi-region deployment'
    ],
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'Monitoring Stack with Prometheus & Grafana',
    description: 'Deployed comprehensive monitoring solution for real-time system and application performance.',
    longDescription: 'Implemented a full-stack monitoring solution that provides real-time insights into system performance, application metrics, and infrastructure health. The stack includes alerting and dashboard visualization.',
    technologies: ['Prometheus', 'Grafana', 'AlertManager', 'Node Exporter', 'Docker', 'Kubernetes', 'InfluxDB'],
    features: [
      'Real-time metrics collection and visualization',
      'Custom dashboards for different stakeholders',
      'Intelligent alerting with multiple notification channels',
      'Log aggregation and analysis',
      'Performance baseline establishment',
      'Capacity planning and trend analysis'
    ],
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];