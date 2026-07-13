'use client';

import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2, Send } from 'lucide-react';
import styles from './InteractiveTerminal.module.css';

interface LogEntry {
  text: string;
  type: 'input' | 'system' | 'success' | 'error' | 'ascii';
}

const QUOTES = [
  '"Programs must be written for people to read, and only secondarily for machines to execute." — Abelson & Sussman',
  '"Talk is cheap. Show me the code." — Linus Torvalds',
  '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." — Martin Fowler',
  '"First, solve the problem. Then, write the code." — John Johnson',
  '"Simplicity is the soul of efficiency." — Austin Freeman',
];

export function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [themeMode, setThemeMode] = useState<'copper' | 'green' | 'blue' | 'red'>('copper');
  
  // Game/Quiz state
  const [quizState, setQuizState] = useState<{ active: boolean; step: number } | null>(null);

  const [history, setHistory] = useState<LogEntry[]>([
    { text: 'ACM Student Chapter Terminal [Version 2.5.0]', type: 'system' },
    { text: 'Available commands:', type: 'system' },
    { text: '  about      - Learn what ACM is all about', type: 'system' },
    { text: '  projects   - Show ongoing student innovations', type: 'system' },
    { text: '  team       - Show the core leadership team', type: 'system' },
    { text: '  hack       - Run system network test sequence', type: 'system' },
    { text: '  neofetch   - Display ACM system configuration profile', type: 'system' },
    { text: '  quote      - Generate a random programmer wisdom quote', type: 'system' },
    { text: '  quiz       - Start the interactive Tech Trivia mini-game', type: 'system' },
    { text: '  theme      - Cycle terminal color matrix', type: 'system' },
    { text: '  sudo       - Attempt superuser overrides', type: 'system' },
    { text: '  clear      - Clear the console window', type: 'system' },
    { text: '  exit       - Close the interactive terminal', type: 'system' },
    { text: ' ', type: 'system' },
  ]);

  const outputEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (outputEndRef.current) {
      outputEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen, isMinimized]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    const cleanCmd = trimmed.toLowerCase();
    const newHistory = [...history, { text: `visitor@acm-chapter:~$ ${trimmed}`, type: 'input' as const }];

    if (!trimmed) {
      setHistory(newHistory);
      return;
    }

    // Handle Active Quiz Game
    if (quizState?.active) {
      if (cleanCmd === 'a' || cleanCmd === 'b' || cleanCmd === 'c') {
        if (quizState.step === 1) {
          if (cleanCmd === 'b') {
            newHistory.push(
              { text: '✓ CORRECT! ACM was founded in 1947.', type: 'success' },
              { text: 'Question 2: Which language is known as the mother of all languages?', type: 'system' },
              { text: '  [A] Assembly  [B] C  [C] Fortran', type: 'system' }
            );
            setQuizState({ active: true, step: 2 });
          } else {
            newHistory.push(
              { text: '✗ INCORRECT! The correct answer was [B] 1947.', type: 'error' },
              { text: 'Quiz terminated.', type: 'system' }
            );
            setQuizState(null);
          }
        } else if (quizState.step === 2) {
          if (cleanCmd === 'b') {
            newHistory.push(
              { text: '✓ CORRECT! C is widely considered the mother of modern high-level languages.', type: 'success' },
              { text: '★ You won the trivia quiz! Hack the planet!', type: 'success' }
            );
          } else {
            newHistory.push(
              { text: '✗ INCORRECT! The correct answer was [B] C.', type: 'error' },
              { text: 'Quiz terminated.', type: 'system' }
            );
          }
          setQuizState(null);
        }
      } else if (cleanCmd === 'exit' || cleanCmd === 'quit') {
        newHistory.push({ text: 'Quiz exited.', type: 'system' });
        setQuizState(null);
      } else {
        newHistory.push({ text: 'Please answer with A, B, or C (or type "exit" to quit).', type: 'error' });
      }
      setHistory(newHistory);
      setInput('');
      return;
    }

    switch (cleanCmd) {
      case 'help':
        newHistory.push(
          { text: 'Available commands:', type: 'system' },
          { text: '  about      - Learn what ACM is all about', type: 'system' },
          { text: '  projects   - Show ongoing student innovations', type: 'system' },
          { text: '  team       - Show the core leadership team', type: 'system' },
          { text: '  hack       - Run system network test sequence', type: 'system' },
          { text: '  neofetch   - Display ACM system configuration profile', type: 'system' },
          { text: '  quote      - Generate a random programmer wisdom quote', type: 'system' },
          { text: '  quiz       - Start the interactive Tech Trivia mini-game', type: 'system' },
          { text: '  theme      - Cycle terminal color matrix (Copper/Green/Blue/Red)', type: 'system' },
          { text: '  sudo       - Attempt superuser system command overrides', type: 'system' },
          { text: '  clear      - Clear the console window', type: 'system' },
          { text: '  exit       - Close the interactive terminal', type: 'system' }
        );
        break;
      case 'about':
        newHistory.push({
          text: 'We are the ACM Student Chapter — a community designed by students, for students, to promote collaboration, innovation, and computing knowledge. We organize hackathons, dev bootcamps, and build impact-driven software.',
          type: 'success'
        });
        break;
      case 'projects':
        newHistory.push(
          { text: 'Deploying project list...', type: 'system' },
          { text: '  1. ACM Portal  - Hub for student events & resources', type: 'success' },
          { text: '  2. DevSpace    - Collaborative peer coding platform', type: 'success' },
          { text: '  3. ByteCode    - Annual competitive coding competition site', type: 'success' },
          { text: 'To view full projects, click the "Projects" links on the main page.', type: 'system' }
        );
        break;
      case 'team':
        newHistory.push(
          { text: 'ACM Leadership Core:', type: 'system' },
          { text: '  • Prakyath Yadav Suvarna - Vice President', type: 'success' },
          { text: '  • Hasnain Khan           - Secretary', type: 'success' },
          { text: '  • Sujanraj N             - Joint Secretary', type: 'success' },
          { text: '  • Pranjal Shetty         - Treasurer', type: 'success' },
          { text: '  • Aryan Verma            - Treasurer', type: 'success' }
        );
        break;
      case 'neofetch':
        newHistory.push(
          {
            text: `
   .-----.      acm-chapter@student-workspace
  /  ACM  \\     OS: ChapterOS 1.0.0
 |  __ __  |    Kernel: NextJS-v16-Turbopack
 |  || ||  |    Uptime: 2h 45m
  \\  ---  /     Shell: bash-acm-v2.5
   '-----'      Theme: ${themeMode.toUpperCase()}
                RAM: 1024MB / 16384MB
            `,
            type: 'ascii'
          }
        );
        break;
      case 'quote':
        const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
        newHistory.push({ text: randomQuote, type: 'success' });
        break;
      case 'quiz':
        newHistory.push(
          { text: '★ Starting ACM Tech Trivia Mini-Game ★', type: 'success' },
          { text: 'Question 1: In what year was ACM (Association for Computing Machinery) founded?', type: 'system' },
          { text: '  [A] 1953  [B] 1947  [C] 1961', type: 'system' }
        );
        setQuizState({ active: true, step: 1 });
        break;
      case 'theme':
        let nextTheme: 'copper' | 'green' | 'blue' | 'red' = 'copper';
        if (themeMode === 'copper') nextTheme = 'green';
        else if (themeMode === 'green') nextTheme = 'blue';
        else if (themeMode === 'blue') nextTheme = 'red';
        setThemeMode(nextTheme);
        newHistory.push({ text: `Terminal theme successfully set to ${nextTheme.toUpperCase()}`, type: 'success' });
        break;
      case 'sudo':
        newHistory.push({
          text: 'Error: visitor is not in the sudoers file. This incident will be reported.',
          type: 'error'
        });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'exit':
        setIsOpen(false);
        setInput('');
        return;
      case 'hack':
        newHistory.push(
          {
            text: `
    __  ______   ______ __ __
   / / / / __ | / ____// //_/
  / /_/ / /_/ // /    / ,<   
 / __  / _, _// /___ / /| |  
/_/ /_/_/ |_| \\____//_/ |_|  
            `,
            type: 'ascii'
          },
          { text: '[SYSTEM] Initializing core decrypter...', type: 'error' },
          { text: '[SYSTEM] Port 8080: ACCESS GRANTED', type: 'success' },
          { text: '[SYSTEM] Loading quantum neural clusters... done.', type: 'success' },
          { text: '[SUCCESS] Welcome to ACM Chapter Mainframe!', type: 'success' }
        );
        break;
      default:
        newHistory.push({
          text: `Command not found: "${cmd}". Type "help" for a list of commands.`,
          type: 'error'
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <>
      {/* Floating launcher trigger */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={styles.launcher}
          aria-label="Open developer terminal"
          title="Open interactive terminal"
        >
          <TerminalIcon size={22} className={styles.pulseIcon} />
          <span className={styles.launcherText}>Terminal</span>
        </button>
      )}

      {isOpen && (
        <div 
          className={`${styles.terminalWrapper} ${isMinimized ? styles.minimized : ''} ${styles[themeMode]}`} 
          role="dialog"
        >
          {/* Header Bar */}
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <TerminalIcon size={14} className={styles.headerIcon} />
              <span className={styles.title}>acm-chapter@terminal:~</span>
            </div>
            <div className={styles.controls}>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className={styles.controlBtn}
                aria-label="Minimize terminal"
              >
                {isMinimized ? <Maximize2 size={12} /> : <Minimize2 size={12} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className={`${styles.controlBtn} ${styles.closeBtn}`}
                aria-label="Close terminal"
              >
                <X size={12} />
              </button>
            </div>
          </div>

          {/* Console / Body */}
          {!isMinimized && (
            <div className={styles.body} onClick={() => inputRef.current?.focus()}>
              <div className={styles.scrollArea}>
                {history.map((entry, idx) => (
                  <pre
                    key={idx}
                    className={`${styles.line} ${styles[entry.type]}`}
                  >
                    {entry.text}
                  </pre>
                ))}
                <div ref={outputEndRef} />
              </div>

              {/* Input Area */}
              <div className={styles.inputContainer}>
                <span className={styles.prompt}>
                  {quizState?.active ? 'quiz-input?' : 'visitor@acm-chapter:~$'}
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className={styles.inputField}
                  autoFocus
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  aria-label="Terminal input"
                  placeholder={quizState?.active ? 'Type A, B, or C...' : ''}
                />
                <button
                  onClick={() => handleCommand(input)}
                  className={styles.sendBtn}
                  aria-label="Submit command"
                >
                  <Send size={12} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
