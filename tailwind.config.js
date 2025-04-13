/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          900: '#164e63',
        },
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
        },
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'button-glow': 'button-glow 2s ease-in-out infinite',
        'button-glow-gray': 'button-glow-gray 2s ease-in-out infinite',
        'star': 'star 30s linear infinite',
        'button-glow-blue': 'button-glow-blue 2s ease-in-out infinite',
        'title-shake': 'title-shake 2s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-yellow': 'pulse-yellow 2s ease-in-out infinite',
        'pulse-blue': 'pulse-blue 2s ease-in-out infinite',
      },
      textShadow: {
        'blue': '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)',
      },
      keyframes: {
        star: {
          '0%': { transform: 'translateY(100vh)' },
          '100%': { transform: 'translateY(-100vh)' }
        },
        'pulse-slow': {
          '0%, 100%': {
            opacity: 0.6,
            transform: 'scale(1)'
          },
          '50%': {
            opacity: 0.9,
            transform: 'scale(1.05)'
          }
        },
        'pulse-yellow': {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 2px rgba(234, 179, 8, 0.3))',
            opacity: 0.8
          },
          '50%': {
            filter: 'drop-shadow(0 0 8px rgba(234, 179, 8, 0.8))',
            opacity: 1
          }
        },
        'pulse-blue': {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 2px rgba(6, 182, 212, 0.3))',
            opacity: 0.8
          },
          '50%': {
            filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.8))',
            opacity: 1
          }
        },
        glow: {
          '0%, 100%': {
            'text-shadow': '0 0 20px rgba(59,130,246,0.5), 0 0 40px rgba(59,130,246,0.2)'
          },
          '50%': {
            'text-shadow': '0 0 40px rgba(59, 130, 246, 0.8), 0 0 80px rgba(59, 130, 246, 0.4)'
          }
        },
        'glow-pulse': {
          '0%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0 }
        },
        'button-glow': {
          '0%, 100%': {
            'box-shadow': '0 0 15px rgba(59,130,246,0.5), 0 0 30px rgba(59,130,246,0.3), 0 0 45px rgba(59,130,246,0.1)'
          },
          '50%': {
            'box-shadow': '0 0 30px rgba(59,130,246,0.5), 0 0 60px rgba(59,130,246,0.3), 0 0 90px rgba(59,130,246,0.1)'
          }
        },
        'button-glow-gray': {
          '0%, 100%': {
            'box-shadow': '0 0 15px rgba(31,41,55,0.5), 0 0 30px rgba(31,41,55,0.3), 0 0 45px rgba(31,41,55,0.1)'
          },
          '50%': {
            'box-shadow': '0 0 30px rgba(31,41,55,0.5), 0 0 60px rgba(31,41,55,0.3), 0 0 90px rgba(31,41,55,0.1)'
          }
        },
        'button-glow-blue': {
          '0%, 100%': {
            'box-shadow': '0 0 15px rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)'
          },
          '50%': {
            'box-shadow': '0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.5)'
          }
        },
        'title-shake': {
          '0%, 75%, 100%': {
            transform: 'translateX(0)',
            filter: 'blur(0)',
          },
          // Fast shake sequence
          '76%': {
            transform: 'translateX(-4px) translateY(2px)',
            filter: 'blur(1px)',
          },
          '77%': {
            transform: 'translateX(5px) translateY(-3px)',
            filter: 'blur(2px)',
          },
          '78%': {
            transform: 'translateX(-5px) translateY(1px)',
            filter: 'blur(2px)',
          },
          '79%': {
            transform: 'translateX(4px) translateY(-2px)',
            filter: 'blur(2px)',
          },
          '80%': {
            transform: 'translateX(-6px) translateY(3px)',
            filter: 'blur(3px)',
          },
          '81%': {
            transform: 'translateX(6px) translateY(-3px)',
            filter: 'blur(3px)',
          },
          '82%': {
            transform: 'translateX(-4px) translateY(2px)',
            filter: 'blur(2px)',
          },
          '83%': {
            transform: 'translateX(5px) translateY(-2px)',
            filter: 'blur(2px)',
          },
          '84%': {
            transform: 'translateX(-3px) translateY(1px)',
            filter: 'blur(1px)',
          },
          '85%': {
            transform: 'translateX(2px) translateY(-1px)',
            filter: 'blur(0)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow-blue': {
          'text-shadow': '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)',
        },
        '.text-shadow-cyan': {
          'text-shadow': '0 0 10px rgba(6, 182, 212, 0.5), 0 0 20px rgba(6, 182, 212, 0.3)',
        },
      });
    },
  ],
} 