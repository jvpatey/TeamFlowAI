interface FlowingBackgroundProps {
  className?: string;
}

// FlowingBackground component for background effects
export function FlowingBackground({ className = "" }: FlowingBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Main flowing shape */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-brand-primary/20 via-feature-purple-500/15 to-feature-blue-500/20 dark:from-brand-primary/40 dark:via-feature-purple-500/35 dark:to-feature-blue-500/40 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-feature-blue-500/20 via-brand-primary/15 to-feature-purple-500/20 dark:from-feature-blue-500/40 dark:via-brand-primary/35 dark:to-feature-purple-500/40 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Additional bold shapes */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-brand-primary/15 via-transparent to-feature-purple-500/15 dark:from-brand-primary/25 dark:via-transparent dark:to-feature-purple-500/25 rounded-full blur-2xl animate-pulse"
        style={{ animationDuration: "4s" }}
      ></div>

      {/* Flowing organic shapes */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-brand-primary/20 to-feature-blue-500/15 dark:from-brand-primary/30 dark:to-feature-blue-500/20 rounded-full blur-2xl animate-bounce"
        style={{ animationDuration: "8s" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-tl from-feature-purple-500/25 to-brand-primary/15 dark:from-feature-purple-500/35 dark:to-brand-primary/25 rounded-full blur-2xl animate-bounce"
        style={{ animationDuration: "6s", animationDelay: "2s" }}
      ></div>

      {/* Stronger mid-layer shapes */}
      <div
        className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-bl from-feature-blue-500/25 to-transparent dark:from-feature-blue-500/40 dark:to-transparent rounded-full blur-xl animate-pulse"
        style={{ animationDuration: "7s", animationDelay: "3s" }}
      ></div>

      {/* Enhanced grid pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(68, 187, 164, 0.4) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Flowing lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 dark:opacity-50"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
      >
        <defs>
          {/* Light mode gradients */}
          <linearGradient
            id="flowGradient1Light"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#44BBA4", stopOpacity: 0.4 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#8b5cf6", stopOpacity: 0.3 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#3b82f6", stopOpacity: 0.4 }}
            />
          </linearGradient>
          <linearGradient
            id="flowGradient2Light"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#3b82f6", stopOpacity: 0.4 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#44BBA4", stopOpacity: 0.3 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#8b5cf6", stopOpacity: 0.4 }}
            />
          </linearGradient>

          {/* Dark mode gradients */}
          <linearGradient
            id="flowGradient1Dark"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#44BBA4", stopOpacity: 0.6 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#8b5cf6", stopOpacity: 0.4 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#3b82f6", stopOpacity: 0.5 }}
            />
          </linearGradient>
          <linearGradient
            id="flowGradient2Dark"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#3b82f6", stopOpacity: 0.6 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#44BBA4", stopOpacity: 0.4 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#8b5cf6", stopOpacity: 0.5 }}
            />
          </linearGradient>
        </defs>

        {/* Flowing paths - Light mode */}
        <g className="dark:hidden">
          <path
            d="M0,400 Q300,200 600,400 T1200,400"
            stroke="url(#flowGradient1Light)"
            strokeWidth="2.5"
            fill="none"
            className="animate-pulse"
          >
            <animate
              attributeName="d"
              values="M0,400 Q300,200 600,400 T1200,400;M0,400 Q300,600 600,400 T1200,400;M0,400 Q300,200 600,400 T1200,400"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M0,300 Q400,100 800,300 T1200,300"
            stroke="url(#flowGradient2Light)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          >
            <animate
              attributeName="d"
              values="M0,300 Q400,100 800,300 T1200,300;M0,300 Q400,500 800,300 T1200,300;M0,300 Q400,100 800,300 T1200,300"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M0,600 Q200,400 400,600 T1200,600"
            stroke="url(#flowGradient1Light)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          >
            <animate
              attributeName="d"
              values="M0,600 Q200,400 400,600 T1200,600;M0,600 Q200,800 400,600 T1200,600;M0,600 Q200,400 400,600 T1200,600"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M0,150 Q400,50 800,150 T1200,150"
            stroke="url(#flowGradient2Light)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
          >
            <animate
              attributeName="d"
              values="M0,150 Q400,50 800,150 T1200,150;M0,150 Q400,250 800,150 T1200,150;M0,150 Q400,50 800,150 T1200,150"
              dur="14s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* Flowing paths - Dark mode */}
        <g className="hidden dark:block">
          <path
            d="M0,400 Q300,200 600,400 T1200,400"
            stroke="url(#flowGradient1Dark)"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
          >
            <animate
              attributeName="d"
              values="M0,400 Q300,200 600,400 T1200,400;M0,400 Q300,600 600,400 T1200,400;M0,400 Q300,200 600,400 T1200,400"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M0,300 Q400,100 800,300 T1200,300"
            stroke="url(#flowGradient2Dark)"
            strokeWidth="2.5"
            fill="none"
            className="animate-pulse"
          >
            <animate
              attributeName="d"
              values="M0,300 Q400,100 800,300 T1200,300;M0,300 Q400,500 800,300 T1200,300;M0,300 Q400,100 800,300 T1200,300"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M0,600 Q200,400 400,600 T1200,600"
            stroke="url(#flowGradient1Dark)"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          >
            <animate
              attributeName="d"
              values="M0,600 Q200,400 400,600 T1200,600;M0,600 Q200,800 400,600 T1200,600;M0,600 Q200,400 400,600 T1200,600"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M0,150 Q400,50 800,150 T1200,150"
            stroke="url(#flowGradient2Dark)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.7"
          >
            <animate
              attributeName="d"
              values="M0,150 Q400,50 800,150 T1200,150;M0,150 Q400,250 800,150 T1200,150;M0,150 Q400,50 800,150 T1200,150"
              dur="14s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    </div>
  );
}
