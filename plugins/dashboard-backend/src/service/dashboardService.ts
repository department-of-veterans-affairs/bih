type DashboardData = {
    links: string[];
    contactList: {
        name: string;
        email: string;
    }[];
    cicd: {
        jenkins: number;
        github: number;
    };
    tests: {
        day: number;
        week: number;
        month: number;
    };
    acoe: {
        latestRelease: Date;
        releaseFailure: number;
        mttr: number;
    };
    health: number;
    twistLock: {
        low: number;
        medium: number;
        high: number;
        critical: number;
        riskFactors: number;
    };
    fortify: string;
    ato: {
        progress: number;
        renews: Date;
    };
    burnRate: number;
};

type ImportantLink = {
  productName: string;
  github: string[];
  confluence: string[];
  jira: string[];
  licensing: string[];
  sslCerts: string[];
};

export const getDashboardData = (): DashboardData => {
    return {
        links: [
            'https://www.valink1.com',
            'https://www.valink2.com'
        ],
    contactList: [
        {
            name: 'James Madison',
            email: 'JamesMadison@va.gov'
        },
        {
            name: 'Ben Franklin',
            email: 'BFranklin@va.gov'
        },
        {
            name: 'Howard Taft',
            email: 'HHTaft@va.gov'
        }
    ],
    cicd: {
        jenkins: 25,
        github: 50,
    },
    tests: {
        day: 4,
        week: 24,
        month: 117,
    },
    acoe: {
        latestRelease: new Date(),
        releaseFailure: .12,
        mttr: 15,
    },
    health: Math.floor(Math.random() * 3) + 1,
    twistLock: {
        low: 20,
        medium: 11,
        high: 4,
        critical: 3,
        riskFactors: 11,
    },
    fortify: 'fortified',
    ato: {
        progress: 0.95,
        renews: new Date(),
    },
    burnRate: 0.77,
    }
};

export const getImportantLinks  = (): ImportantLink[] => {
  return [
    {
      productName: 'Cool Product Bip',
      github: ['https://www.githublink.com', 'https://www.githublink2.com', 'https://www.githublink3.com', 'https://www.githublink4.com', 'https://www.githublink5.com'],
      confluence: ['https://www.confluencelink.com'],
      jira: ['https://www.jiralink.com'],
      licensing: ['https://www.licensingLink.com'],
      sslCerts: ['https://www.ssl-cert.com']
    }
  ];
};
