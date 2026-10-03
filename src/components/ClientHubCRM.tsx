import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Send, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Bell, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  PlusCircle, 
  MessageSquare,
  FileText,
  ChevronRight,
  Eye,
  Check,
  Lock,
  Unlock,
  LogOut,
  Calendar,
  AlertCircle,
  FolderOpen,
  Video,
  Layers,
  ArrowRight,
  Filter,
  Edit3,
  Save,
  Trash2,
  UserPlus,
  RotateCcw,
  X
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export interface ClientDeadline {
  id: string;
  title: string;
  dueDate: string;
  countdown: string;
  priority: 'High' | 'Medium' | 'Normal';
  deliverable: string;
  status: 'Upcoming' | 'In Review' | 'Completed';
}

export interface ClientTask {
  id: string;
  title: string;
  category: string;
  status: 'In Progress' | 'Needs Review' | 'Completed';
  assignee: string;
  estimatedDelivery: string;
}

export interface ClientVaultLink {
  title: string;
  category: string;
  type: 'folder' | 'funnel' | 'video' | 'slack';
  url: string;
}

export interface ClientProject {
  id: string;
  name: string;
  clientType: string;
  accessCode: string;
  clientEmail: string;
  service: string;
  status: 'Completed Launch' | 'Active Retainer' | 'In Progress';
  progress: number;
  highlightMetric: string;
  highlightLabel: string;
  startDate: string;
  portalLink: string;
  deadlines: ClientDeadline[];
  tasks: ClientTask[];
  vaultLinks: ClientVaultLink[];
  updates: {
    id: string;
    date: string;
    title: string;
    message: string;
    type: 'Milestone' | 'Report' | 'Launch' | 'Task';
  }[];
}

const INITIAL_CLIENTS: ClientProject[] = [
  {
    id: 'breathwork-launch',
    name: 'Sarah Jenkins',
    clientType: 'The Breathwork Method',
    accessCode: 'SARAH275',
    clientEmail: 'sarah@thebreathworkmethod.com',
    service: 'GoHighLevel Funnel Build & Launch Automation',
    status: 'Completed Launch',
    progress: 100,
    highlightMetric: '275+ Sign-Ups',
    highlightLabel: '34.8% Opt-In CVR',
    startDate: 'August 2026',
    portalLink: 'portal/breathwork-launch',
    deadlines: [
      {
        id: 'd-1',
        title: 'Post-Launch Student Cohort Onboarding Audit',
        dueDate: 'Oct 8, 2026',
        countdown: 'In 5 days',
        priority: 'High',
        deliverable: 'Members area access confirmation & support ticket triage',
        status: 'Upcoming',
      },
      {
        id: 'd-2',
        title: 'Automated 14-Day Evergreen Nurture Sequence',
        dueDate: 'Oct 14, 2026',
        countdown: 'In 11 days',
        priority: 'Medium',
        deliverable: 'GoHighLevel workflow for evergreen opt-in leads',
        status: 'Upcoming',
      },
      {
        id: 'd-3',
        title: 'Pre-Launch Registration Funnel & Countdown SMS',
        dueDate: 'Sep 30, 2026',
        countdown: 'Completed',
        priority: 'High',
        deliverable: '275+ opt-ins captured prior to cart open',
        status: 'Completed',
      },
    ],
    tasks: [
      {
        id: 't-1',
        title: 'Review Launch Analytics & Opt-In Traffic Report',
        category: 'Analytics',
        status: 'Needs Review',
        assignee: 'Sarah (Client)',
        estimatedDelivery: 'Oct 4, 2026',
      },
      {
        id: 't-2',
        title: 'Configure automated SMS reminder for live coaching calls',
        category: 'GoHighLevel Automation',
        status: 'In Progress',
        assignee: 'Kim Karen Ambong',
        estimatedDelivery: 'Oct 6, 2026',
      },
      {
        id: 't-3',
        title: 'Sales page checkout mobile optimization v2',
        category: 'Design & Tech',
        status: 'Completed',
        assignee: 'Kim Karen Ambong',
        estimatedDelivery: 'Sep 29, 2026',
      },
      {
        id: 't-4',
        title: 'Rebrand Student Workbook PDF & slide templates in Canva',
        category: 'Creative Deliverables',
        status: 'Completed',
        assignee: 'Kim Karen Ambong',
        estimatedDelivery: 'Sep 25, 2026',
      },
    ],
    vaultLinks: [
      {
        title: 'GoHighLevel Live Funnel Dashboard',
        category: 'Live Funnel URL',
        type: 'funnel',
        url: 'https://app.gohighlevel.com',
      },
      {
        title: 'Google Drive Shared Assets & Media Kit',
        category: 'Client Storage Vault',
        type: 'folder',
        url: 'https://drive.google.com',
      },
      {
        title: 'Launch Walkthrough Video & SOPs (Loom)',
        category: 'Video Documentation',
        type: 'video',
        url: 'https://loom.com',
      },
      {
        title: '#sarah-kim-vip Priority Slack Channel',
        category: 'Direct Messaging',
        type: 'slack',
        url: 'https://slack.com',
      },
    ],
    updates: [
      {
        id: 'u-1',
        date: 'Oct 1, 2026',
        title: 'Launch Milestone: 275+ Opt-Ins Captured',
        message: 'Pre-launch registration funnel exceeded expectations with 275+ qualified leads. Automated SMS countdown sent smoothly with zero delivery errors.',
        type: 'Launch',
      },
      {
        id: 'u-2',
        date: 'Sep 27, 2026',
        title: 'Stripe Webhooks & Automated Intake Verified',
        message: 'Tested test checkout payments and confirmed custom onboarding emails trigger automatically into student members area.',
        type: 'Milestone',
      },
      {
        id: 'u-3',
        date: 'Sep 22, 2026',
        title: 'Sales Page V2 Mobile Optimization Complete',
        message: 'Rewrote bottom CTA copy and restructured checkout buttons for seamless mobile thumb flow.',
        type: 'Task',
      },
    ],
  },
  {
    id: 'limen-method',
    name: 'The Limen Method',
    clientType: 'Wellness & Identity Coaching',
    accessCode: 'LIMEN2026',
    clientEmail: 'ops@thelimenmethod.com',
    service: 'Multi-Platform DMs & Content Systems',
    status: 'Active Retainer',
    progress: 94,
    highlightMetric: '15+ hrs/wk',
    highlightLabel: 'Founder Time Reclaimed',
    startDate: 'June 2026',
    portalLink: 'portal/limen-method',
    deadlines: [
      {
        id: 'd-4',
        title: 'Monthly Content Pillar Batch (12 Posts)',
        dueDate: 'Oct 9, 2026',
        countdown: 'In 6 days',
        priority: 'High',
        deliverable: 'Canva graphics & copy scheduled in Later/Meta',
        status: 'Upcoming',
      },
      {
        id: 'd-5',
        title: 'Weekly DM Pipeline Triage & Discovery Booking Audit',
        dueDate: 'Oct 5, 2026',
        countdown: 'In 2 days',
        priority: 'Normal',
        deliverable: 'Excel tracking sheet update with qualified leads',
        status: 'Upcoming',
      },
    ],
    tasks: [
      {
        id: 't-5',
        title: 'Refresh ManyChat comment trigger automation for Reels',
        category: 'Lead Gen',
        status: 'In Progress',
        assignee: 'Kim Karen Ambong',
        estimatedDelivery: 'Oct 4, 2026',
      },
      {
        id: 't-6',
        title: 'Review 3 draft carousels for identity shift theme',
        category: 'Client Approval',
        status: 'Needs Review',
        assignee: 'Founder',
        estimatedDelivery: 'Oct 6, 2026',
      },
    ],
    vaultLinks: [
      {
        title: 'Shared 30-Day Content Notion Hub',
        category: 'SOPs & Planning',
        type: 'folder',
        url: 'https://notion.so',
      },
      {
        title: 'Lead Pipeline Tracking Spreadsheet',
        category: 'Excel / Google Sheets',
        type: 'folder',
        url: 'https://sheets.google.com',
      },
    ],
    updates: [
      {
        id: 'u-4',
        date: 'Sep 29, 2026',
        title: 'Weekly DM Lead Pipeline Report Sent',
        message: 'Logged 42 new incoming chats, qualified 14 prospective clients, and booked 6 discovery calls directly onto the calendar.',
        type: 'Report',
      },
      {
        id: 'u-5',
        date: 'Sep 25, 2026',
        title: 'ManyChat Keyword Automation Updated',
        message: 'Refreshed automated freebie delivery triggers on Instagram Reels for the new October identity series.',
        type: 'Task',
      },
    ],
  },
  {
    id: 'alpha-scale',
    name: 'Marcus Vance',
    clientType: 'Alpha Scale Ventures',
    accessCode: 'MARCUS450',
    clientEmail: 'marcus@alphascale.io',
    service: 'Cold Outreach Engine & Pipeline CRM',
    status: 'Active Retainer',
    progress: 98,
    highlightMetric: '450+ Emails/Day',
    highlightLabel: '99.2% Deliverability',
    startDate: 'May 2026',
    portalLink: 'portal/alpha-scale',
    deadlines: [
      {
        id: 'd-6',
        title: 'Q4 Cold Outreach Script A/B Test Results',
        dueDate: 'Oct 11, 2026',
        countdown: 'In 8 days',
        priority: 'High',
        deliverable: 'Subject line split test analysis for fin-tech founders',
        status: 'Upcoming',
      },
    ],
    tasks: [
      {
        id: 't-7',
        title: 'Google Apps Script batch quota monitoring & warmup',
        category: 'Automation Maintenance',
        status: 'In Progress',
        assignee: 'Kim Karen Ambong',
        estimatedDelivery: 'Oct 3, 2026',
      },
      {
        id: 't-8',
        title: 'Sync new student inquiries to GoHighLevel stage',
        category: 'CRM Pipeline',
        status: 'Completed',
        assignee: 'Kim Karen Ambong',
        estimatedDelivery: 'Sep 30, 2026',
      },
    ],
    vaultLinks: [
      {
        title: 'Google Apps Script Code Repository & Logs',
        category: 'Automation Script',
        type: 'funnel',
        url: 'https://script.google.com',
      },
      {
        title: 'Cold Outreach Master Lead Database',
        category: 'Google Workspace',
        type: 'folder',
        url: 'https://sheets.google.com',
      },
    ],
    updates: [
      {
        id: 'u-6',
        date: 'Sep 30, 2026',
        title: 'Custom Google Apps Script Batch Verified',
        message: 'Daily dispatch sent 480 personalized cold outreach emails. Open rate steady at 43.1% with zero spam flagging.',
        type: 'Report',
      },
      {
        id: 'u-7',
        date: 'Sep 24, 2026',
        title: 'Positive Leads Auto-Routed to GoHighLevel',
        message: 'Configured automated webhook to push interested student replies directly into the sales follow-up pipeline.',
        type: 'Milestone',
      },
    ],
  },
];

export const ClientHubCRM: React.FC = () => {
  const { currentPalette } = useTheme();
  
  // Initialize clients from localStorage or default
  const [clients, setClients] = useState<ClientProject[]>(() => {
    try {
      const saved = localStorage.getItem('kim_portfolio_clients_v2');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error loading saved clients', e);
    }
    return INITIAL_CLIENTS;
  });

  // Save to localStorage whenever clients change
  useEffect(() => {
    try {
      localStorage.setItem('kim_portfolio_clients_v2', JSON.stringify(clients));
    } catch (e) {
      console.error('Error saving clients to localStorage', e);
    }
  }, [clients]);

  // View states
  const [activeTab, setActiveTab] = useState<'manager' | 'portal'>('manager');
  const [selectedClientId, setSelectedClientId] = useState<string>('breathwork-launch');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'completed'>('all');
  
  // Secure Portal Authentication State
  const [loggedInClient, setLoggedInClient] = useState<ClientProject | null>(INITIAL_CLIENTS[0]);
  const [accessCodeInput, setAccessCodeInput] = useState<string>('');
  const [authError, setAuthError] = useState<string | null>(null);

  // New update form state (Manager view)
  const [newUpdateTitle, setNewUpdateTitle] = useState('');
  const [newUpdateMessage, setNewUpdateMessage] = useState('');
  const [newUpdateType, setNewUpdateType] = useState<'Milestone' | 'Report' | 'Launch' | 'Task'>('Milestone');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Client Portal Task Request Modal / Form
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskCategory, setNewTaskCategory] = useState('GoHighLevel Funnel');
  const [taskFilter, setTaskFilter] = useState<'all' | 'In Progress' | 'Needs Review' | 'Completed'>('all');

  // Client Profile Editing State
  const [isEditClientModalOpen, setIsEditClientModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<ClientProject | null>(null);
  const [isAddClientModalOpen, setIsAddClientModalOpen] = useState(false);

  // New Client Form State
  const [newClientName, setNewClientName] = useState('');
  const [newClientType, setNewClientType] = useState('');
  const [newClientAccessCode, setNewClientAccessCode] = useState('');
  const [newClientEmail, setNewClientEmail] = useState('');
  const [newClientService, setNewClientService] = useState('GoHighLevel Funnel & Automation');
  const [newClientStatus, setNewClientStatus] = useState<'Completed Launch' | 'Active Retainer' | 'In Progress'>('In Progress');
  const [newClientMetric, setNewClientMetric] = useState('200+ Opt-Ins');
  const [newClientMetricLabel, setNewClientMetricLabel] = useState('Opt-In Conversion Rate');

  const selectedClient = clients.find((c) => c.id === selectedClientId) || clients[0] || INITIAL_CLIENTS[0];

  const filteredClients = clients.filter((c) => {
    if (statusFilter === 'active') return c.status === 'Active Retainer' || c.status === 'In Progress';
    if (statusFilter === 'completed') return c.status === 'Completed Launch';
    return true;
  });

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  // Open Edit Modal for a specific client
  const handleOpenEditClient = (client: ClientProject) => {
    setEditingClient({ ...client });
    setIsEditClientModalOpen(true);
  };

  // Save changes to client profile
  const handleSaveClientProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingClient) return;

    setClients((prev) =>
      prev.map((c) => (c.id === editingClient.id ? editingClient : c))
    );

    // If currently logged in as this client, sync loggedInClient
    if (loggedInClient && loggedInClient.id === editingClient.id) {
      setLoggedInClient(editingClient);
    }

    setIsEditClientModalOpen(false);
    triggerToast(`Profile for "${editingClient.name}" updated successfully!`);
  };

  // Delete a client
  const handleDeleteClient = (clientId: string) => {
    if (clients.length <= 1) {
      triggerToast('Cannot delete the only remaining client profile.');
      return;
    }

    if (window.confirm('Are you sure you want to remove this client project?')) {
      const remaining = clients.filter((c) => c.id !== clientId);
      setClients(remaining);
      setSelectedClientId(remaining[0].id);
      if (loggedInClient && loggedInClient.id === clientId) {
        setLoggedInClient(remaining[0]);
      }
      setIsEditClientModalOpen(false);
      triggerToast('Client profile deleted.');
    }
  };

  // Add a brand new client
  const handleCreateNewClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClientName.trim() || !newClientType.trim()) return;

    const newId = `client-${Date.now()}`;
    const code = newClientAccessCode.trim() 
      ? newClientAccessCode.trim().toUpperCase() 
      : `${newClientName.split(' ')[0].toUpperCase()}${Math.floor(100 + Math.random() * 900)}`;

    const createdClient: ClientProject = {
      id: newId,
      name: newClientName.trim(),
      clientType: newClientType.trim(),
      accessCode: code,
      clientEmail: newClientEmail.trim() || `${newClientName.toLowerCase().replace(/\s+/g, '')}@client.com`,
      service: newClientService.trim(),
      status: newClientStatus,
      progress: newClientStatus === 'Completed Launch' ? 100 : 45,
      highlightMetric: newClientMetric.trim() || 'Active',
      highlightLabel: newClientMetricLabel.trim() || 'Key Result',
      startDate: 'Current Month',
      portalLink: `portal/${newId}`,
      deadlines: [
        {
          id: `d-${Date.now()}-1`,
          title: 'Initial Onboarding & Systems Review',
          dueDate: 'Next Week',
          countdown: 'In 5 days',
          priority: 'High',
          deliverable: 'Access handover & workflow audit',
          status: 'Upcoming',
        }
      ],
      tasks: [
        {
          id: `t-${Date.now()}-1`,
          title: 'Review tech stack & invite Kim to accounts',
          category: 'Onboarding',
          status: 'In Progress',
          assignee: 'Kim Karen Ambong',
          estimatedDelivery: '48 Hours',
        }
      ],
      vaultLinks: [
        {
          title: 'Shared Google Drive Folder',
          category: 'Client Storage Vault',
          type: 'folder',
          url: 'https://drive.google.com',
        },
      ],
      updates: [
        {
          id: `u-${Date.now()}-1`,
          date: 'Today',
          title: 'Client Project Initialized in CRM',
          message: 'Project workspace created with secure portal access.',
          type: 'Milestone',
        }
      ],
    };

    setClients((prev) => [createdClient, ...prev]);
    setSelectedClientId(newId);
    setLoggedInClient(createdClient);

    // Reset fields
    setNewClientName('');
    setNewClientType('');
    setNewClientAccessCode('');
    setNewClientEmail('');
    setIsAddClientModalOpen(false);
    triggerToast(`New client "${createdClient.name}" created with code: ${createdClient.accessCode}!`);
  };

  // Reset to default starter clients
  const handleResetDefaults = () => {
    if (window.confirm('Reset client data back to default initial profiles?')) {
      setClients(INITIAL_CLIENTS);
      setSelectedClientId(INITIAL_CLIENTS[0].id);
      setLoggedInClient(INITIAL_CLIENTS[0]);
      localStorage.removeItem('kim_portfolio_clients_v2');
      triggerToast('Client profiles reset to default.');
    }
  };

  // Secure Portal Login Handler
  const handleClientLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    const cleanedCode = accessCodeInput.trim().toUpperCase();

    const matched = clients.find(
      (c) => c.accessCode.toUpperCase() === cleanedCode || c.clientEmail.toLowerCase() === accessCodeInput.trim().toLowerCase()
    );

    if (matched) {
      setLoggedInClient(matched);
      setSelectedClientId(matched.id);
      setAccessCodeInput('');
      triggerToast(`Welcome back, ${matched.name}! Authenticated to secure portal.`);
    } else {
      setAuthError('Invalid client access code or email. Try "SARAH275" or select a quick demo client below.');
    }
  };

  const handleQuickDemoLogin = (client: ClientProject) => {
    setLoggedInClient(client);
    setSelectedClientId(client.id);
    setAuthError(null);
    triggerToast(`Logged into private portal for ${client.name} (${client.clientType})`);
  };

  const handleClientLogout = () => {
    setLoggedInClient(null);
    triggerToast('Logged out of secure client portal.');
  };

  // VA Manager Post Update
  const handlePostUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUpdateTitle.trim() || !newUpdateMessage.trim()) return;

    const newUpdateItem = {
      id: `u-${Date.now()}`,
      date: 'Just now (Today)',
      title: newUpdateTitle.trim(),
      message: newUpdateMessage.trim(),
      type: newUpdateType,
    };

    setClients((prev) =>
      prev.map((c) => {
        if (c.id === selectedClientId) {
          return {
            ...c,
            updates: [newUpdateItem, ...c.updates],
          };
        }
        return c;
      })
    );

    // If logged in as this client, sync loggedInClient too
    if (loggedInClient && loggedInClient.id === selectedClientId) {
      setLoggedInClient((prev) => prev ? {
        ...prev,
        updates: [newUpdateItem, ...prev.updates],
      } : null);
    }

    setNewUpdateTitle('');
    setNewUpdateMessage('');
    triggerToast('Update published! Notification sent to client portal.');
  };

  // Client Submits New Task Request from Portal
  const handleClientSubmitTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim() || !loggedInClient) return;

    const newTaskItem: ClientTask = {
      id: `t-${Date.now()}`,
      title: newTaskTitle.trim(),
      category: newTaskCategory,
      status: 'In Progress',
      assignee: 'Kim Karen Ambong',
      estimatedDelivery: 'Next 24-48 Hours',
    };

    setClients((prev) =>
      prev.map((c) => {
        if (c.id === loggedInClient.id) {
          return {
            ...c,
            tasks: [newTaskItem, ...c.tasks],
          };
        }
        return c;
      })
    );

    setLoggedInClient((prev) => prev ? {
      ...prev,
      tasks: [newTaskItem, ...prev.tasks],
    } : null);

    setNewTaskTitle('');
    setIsTaskModalOpen(false);
    triggerToast('Task request received! Added to Kim’s active delivery queue.');
  };

  // Toggle Task Status (e.g. client approves 'Needs Review' -> 'Completed')
  const handleToggleTaskStatus = (taskId: string) => {
    if (!loggedInClient) return;

    const updatedTasks = loggedInClient.tasks.map((t) => {
      if (t.id === taskId) {
        const nextStatus = t.status === 'Completed' ? 'In Progress' : 'Completed';
        return { ...t, status: nextStatus as ClientTask['status'] };
      }
      return t;
    });

    setLoggedInClient({ ...loggedInClient, tasks: updatedTasks });
    setClients((prev) =>
      prev.map((c) => (c.id === loggedInClient.id ? { ...c, tasks: updatedTasks } : c))
    );
    triggerToast('Task status updated successfully.');
  };

  return (
    <section id="client-hub" className="py-20 md:py-28 bg-[#FAF6F0] relative border-t border-[#EAE3D6] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border text-xs font-semibold mb-3 shadow-xs"
            style={{ color: currentPalette.primary, borderColor: currentPalette.border }}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Client Transparency & Real-Time Tracking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight mb-4">
            Interactive Client Hub & Delivery CRM
          </h2>
          <p className="text-[#665E55] text-sm sm:text-base leading-relaxed">
            I don't leave founders guessing what was delivered today. In addition to daily Slack updates, every client gets access to their own secure portal with live project health, deadlines, and pending deliverables.
          </p>

          {/* View Switcher: Secure Client Portal vs VA Manager Dashboard */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white border border-[#E7DFD3] shadow-xs mt-6">
            <button
              onClick={() => setActiveTab('manager')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'manager'
                  ? 'bg-[#1C1917] text-white shadow-xs'
                  : 'text-[#665E55] hover:text-[#1C1917]'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>VA Dashboard (Kim's Control Center & Profile Editor)</span>
            </button>
            <button
              onClick={() => setActiveTab('portal')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'portal'
                  ? 'bg-[#1C1917] text-white shadow-xs'
                  : 'text-[#665E55] hover:text-[#1C1917]'
              }`}
            >
              <Lock className="w-3.5 h-3.5" style={{ color: activeTab === 'portal' ? currentPalette.light : undefined }} />
              <span>Secure Client Portal (Private View)</span>
              {loggedInClient && (
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              )}
            </button>
          </div>
        </div>

        {/* Global Toast Alert */}
        {showToast && (
          <div className="fixed top-24 right-5 z-50 flex items-center gap-2.5 p-4 rounded-2xl bg-[#1C1917] text-white text-xs font-semibold shadow-2xl animate-in slide-in-from-top-4 border border-[#E7DFD3]">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* ============================================================== */}
        {/* 1. VA DASHBOARD & CLIENT PROFILE MANAGER                        */}
        {/* ============================================================== */}
        {activeTab === 'manager' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Client List, Add Client Button & Filters (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Top Controls: Add Client + Reset Defaults */}
              <div className="flex items-center justify-between gap-2">
                <button
                  onClick={() => setIsAddClientModalOpen(true)}
                  className="flex-1 py-2 px-3.5 rounded-xl bg-[#1C1917] hover:bg-[#292524] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer hover:scale-[1.01]"
                >
                  <UserPlus className="w-3.5 h-3.5 text-[#E7DFD3]" />
                  <span>+ Add New Client</span>
                </button>

                <button
                  onClick={handleResetDefaults}
                  className="p-2 px-3 rounded-xl bg-white hover:bg-[#FAF8F5] border border-[#E8E0D5] text-[11px] text-[#78716C] hover:text-[#1C1917] flex items-center gap-1 transition-colors cursor-pointer"
                  title="Reset clients to starter examples"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              </div>

              {/* Status Filter Tabs */}
              <div className="flex items-center justify-between gap-2 p-1.5 rounded-xl bg-white border border-[#E8E0D5] text-xs shadow-2xs">
                <button
                  onClick={() => setStatusFilter('all')}
                  className={`flex-1 py-1.5 rounded-lg font-semibold transition-all ${
                    statusFilter === 'all'
                      ? 'bg-[#FAF6F0] text-[#1C1917] font-bold shadow-2xs'
                      : 'text-[#78716C] hover:text-[#1C1917]'
                  }`}
                >
                  All ({clients.length})
                </button>
                <button
                  onClick={() => setStatusFilter('active')}
                  className={`flex-1 py-1.5 rounded-lg font-semibold transition-all ${
                    statusFilter === 'active'
                      ? 'bg-[#FAF6F0] text-[#1C1917] font-bold shadow-2xs'
                      : 'text-[#78716C] hover:text-[#1C1917]'
                  }`}
                >
                  Active ({clients.filter((c) => c.status !== 'Completed Launch').length})
                </button>
                <button
                  onClick={() => setStatusFilter('completed')}
                  className={`flex-1 py-1.5 rounded-lg font-semibold transition-all ${
                    statusFilter === 'completed'
                      ? 'bg-[#FAF6F0] text-[#1C1917] font-bold shadow-2xs'
                      : 'text-[#78716C] hover:text-[#1C1917]'
                  }`}
                >
                  Launches ({clients.filter((c) => c.status === 'Completed Launch').length})
                </button>
              </div>

              {/* Client Cards List */}
              <div className="space-y-3">
                {filteredClients.map((client) => {
                  const isSelected = client.id === selectedClientId;

                  return (
                    <div
                      key={client.id}
                      onClick={() => {
                        setSelectedClientId(client.id);
                        setLoggedInClient(client); // keep synced
                      }}
                      className={`p-5 rounded-2xl transition-all cursor-pointer border text-left bg-white relative group ${
                        isSelected
                          ? 'shadow-md border-[#8D5B32] ring-1 ring-[#8D5B32]/30'
                          : 'border-[#E8E0D5] hover:border-[#D6CDC0] shadow-xs'
                      }`}
                      style={isSelected ? { borderColor: currentPalette.primary } : {}}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <div
                            className="w-8 h-8 rounded-xl font-bold text-xs flex items-center justify-center shadow-2xs"
                            style={{
                              backgroundColor: currentPalette.surface,
                              color: currentPalette.primary,
                            }}
                          >
                            {client.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#1C1917] flex items-center gap-1.5">
                              <span>{client.name}</span>
                            </h4>
                            <p className="text-[11px] text-[#78716C]">{client.clientType}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                              client.status === 'Completed Launch'
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                                : client.status === 'Active Retainer'
                                ? 'bg-sky-50 text-sky-800 border-sky-200'
                                : 'bg-amber-50 text-amber-800 border-amber-200'
                            }`}
                          >
                            {client.status}
                          </span>

                          {/* Quick Edit Icon */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenEditClient(client);
                            }}
                            className="p-1 rounded-md text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF8F5] transition-colors"
                            title="Edit this client's profile"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <p className="text-xs text-[#57534E] mb-3 font-medium">
                        {client.service}
                      </p>

                      <div className="flex items-center justify-between text-xs pt-3 border-t border-[#EAE3D6]">
                        <span className="font-bold text-[#1C1917]">
                          {client.highlightMetric}{' '}
                          <span className="text-[11px] font-normal text-[#78716C]">
                            ({client.highlightLabel})
                          </span>
                        </span>
                        <span className="text-[11px] text-[#8D5B32] font-semibold flex items-center gap-1">
                          <span>Passcode: <span className="font-mono text-[#1C1917]">{client.accessCode}</span></span>
                          <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Selected Client Details & Profile Editor CTA (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Selected Client Summary Header Card */}
              <div className="p-7 rounded-3xl bg-white border border-[#E7DFD3] shadow-sm relative">
                
                {/* Header row with Client Name, Company and Edit Button */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-5 border-b border-[#EAE3D6]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#78716C]">
                        Selected Client Profile
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#FAF8F5] border border-[#E8E0D5] text-[#1C1917]">
                        Code: {selectedClient.accessCode}
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-[#1C1917] flex items-center gap-2">
                      <span>{selectedClient.name}</span>
                      <span className="text-sm font-semibold text-[#78716C]">— {selectedClient.clientType}</span>
                    </h3>
                    <p className="text-xs text-[#57534E] mt-0.5">{selectedClient.service}</p>
                    <p className="text-[11px] text-[#78716C]">Email: {selectedClient.clientEmail}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2.5">
                    {/* EDIT CLIENT PROFILE BUTTON */}
                    <button
                      onClick={() => handleOpenEditClient(selectedClient)}
                      className="px-4 py-2 rounded-xl bg-[#FAF8F5] hover:bg-[#F2ECE2] text-[#1C1917] border border-[#E7DFD3] text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs hover:scale-[1.02] cursor-pointer"
                      title="Edit this client's name, brand, metric, and passcode"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-[#8D5B32]" />
                      <span>Edit Client Profile</span>
                    </button>

                    <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#E8E0D5] text-right shadow-2xs min-w-[130px]">
                      <span className="text-xs text-[#78716C] block">Primary Metric</span>
                      <span
                        className="text-lg font-black block"
                        style={{ color: currentPalette.primary }}
                      >
                        {selectedClient.highlightMetric}
                      </span>
                      <span className="text-[10px] text-[#78716C]">{selectedClient.highlightLabel}</span>
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs font-semibold text-[#57534E] mb-1.5">
                    <span>Milestones Completed</span>
                    <span style={{ color: currentPalette.primary }}>{selectedClient.progress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#FAF6F0] overflow-hidden border border-[#EAE3D6]">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${selectedClient.progress}%`,
                        backgroundColor: currentPalette.primary,
                      }}
                    />
                  </div>
                </div>

                {/* Post Notification Form */}
                <form
                  onSubmit={handlePostUpdate}
                  className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E0D5] space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h5 className="text-xs font-bold text-[#1C1917] flex items-center gap-1.5">
                      <Send className="w-3.5 h-3.5" style={{ color: currentPalette.primary }} />
                      <span>Post Update Directly to {selectedClient.name}'s Portal</span>
                    </h5>
                    <div className="flex gap-1.5">
                      {(['Milestone', 'Report', 'Launch', 'Task'] as const).map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setNewUpdateType(t)}
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                            newUpdateType === t
                              ? 'bg-[#1C1917] text-white'
                              : 'bg-white text-[#78716C] border border-[#E8E0D5]'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder="Milestone headline (e.g. Funnel V2 Published, 275 Opt-Ins reached)"
                    value={newUpdateTitle}
                    onChange={(e) => setNewUpdateTitle(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E7DFD3] text-xs text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:border-[#8D5B32]"
                  />

                  <textarea
                    rows={2}
                    placeholder="Brief progress summary sent to client notification center..."
                    value={newUpdateMessage}
                    onChange={(e) => setNewUpdateMessage(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E7DFD3] text-xs text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:border-[#8D5B32]"
                  />

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-[#78716C]">
                      Instantly appears in the client's private dashboard
                    </span>
                    <button
                      type="submit"
                      disabled={!newUpdateTitle.trim() || !newUpdateMessage.trim()}
                      className="px-4 py-2 rounded-xl bg-[#1C1917] hover:bg-[#292524] disabled:opacity-40 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <Send className="w-3 h-3" />
                      <span>Post to Client Portal</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Updates History Timeline */}
              <div className="p-7 rounded-3xl bg-white border border-[#E7DFD3] shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#78716C] mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4" style={{ color: currentPalette.primary }} />
                  <span>Recent Client Updates Log for {selectedClient.name} ({selectedClient.updates.length})</span>
                </h4>

                <div className="space-y-4">
                  {selectedClient.updates.map((update) => (
                    <div
                      key={update.id}
                      className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EBE4D8] text-xs relative"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                            update.type === 'Launch'
                              ? 'bg-rose-100 text-rose-800'
                              : update.type === 'Report'
                              ? 'bg-sky-100 text-sky-800'
                              : update.type === 'Milestone'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {update.type}
                        </span>
                        <span className="text-[11px] text-[#78716C]">{update.date}</span>
                      </div>
                      <h5 className="font-bold text-[#1C1917] text-sm mb-1">{update.title}</h5>
                      <p className="text-[#57534E] leading-relaxed">{update.message}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ============================================================== */}
        {/* 2. SECURE CLIENT PORTAL VIEW                                    */}
        {/* ============================================================== */}
        {activeTab === 'portal' && (
          <div>
            {!loggedInClient ? (
              <div className="max-w-md mx-auto p-8 rounded-3xl bg-white border border-[#E7DFD3] shadow-xl text-center">
                <div
                  className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-xs"
                  style={{
                    backgroundColor: currentPalette.surface,
                    borderColor: currentPalette.border,
                    color: currentPalette.primary,
                  }}
                >
                  <Lock className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-[#1C1917] mb-1">
                  Private Client Portal Access
                </h3>
                <p className="text-xs text-[#665E55] mb-6">
                  Enter your assigned project access passcode or registered email to view real-time status, upcoming launch deadlines, and pending tasks.
                </p>

                {authError && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2 mb-4 text-left">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>{authError}</span>
                  </div>
                )}

                <form onSubmit={handleClientLogin} className="space-y-3 mb-6 text-left">
                  <div>
                    <label className="text-[11px] font-bold text-[#78716C] uppercase tracking-wider block mb-1">
                      Client Passcode or Email:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. SARAH275"
                      value={accessCodeInput}
                      onChange={(e) => setAccessCodeInput(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E7DFD3] text-sm text-[#1C1917] placeholder-[#A8A29E] font-mono focus:outline-none focus:border-[#8D5B32]"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#1C1917] hover:bg-[#292524] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer hover:scale-[1.01]"
                  >
                    <Unlock className="w-3.5 h-3.5" />
                    <span>Unlock Private Dashboard</span>
                  </button>
                </form>

                {/* Quick 1-Click Demo Login for Founders evaluating Kim's process */}
                <div className="pt-5 border-t border-[#EAE3D6] text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#78716C] block mb-2">
                    Quick Demo Access (Test As a Client):
                  </span>
                  <div className="space-y-2">
                    {clients.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => handleQuickDemoLogin(c)}
                        className="w-full p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-[#F2ECE2] border border-[#E7DFD3] text-xs flex items-center justify-between transition-colors text-left cursor-pointer group"
                      >
                        <div>
                          <span className="font-bold text-[#1C1917] block group-hover:text-[#8D5B32]">
                            {c.name}
                          </span>
                          <span className="text-[10px] text-[#78716C]">
                            {c.clientType} • Code: <span className="font-mono font-bold text-[#1C1917]">{c.accessCode}</span>
                          </span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#78716C] group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Client IS Authenticated -> Render Private Dashboard */
              <div className="space-y-8 animate-in fade-in duration-200">
                
                {/* 1. Portal Navigation & Auth Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#E7DFD3] shadow-xs">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shadow-2xs"
                      style={{
                        backgroundColor: currentPalette.surface,
                        borderColor: currentPalette.border,
                        color: currentPalette.primary,
                      }}
                    >
                      {loggedInClient.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#1C1917]">
                          {loggedInClient.name}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Authenticated Session
                        </span>
                      </div>
                      <p className="text-xs text-[#78716C]">
                        {loggedInClient.clientType} • Passcode: <span className="font-mono">{loggedInClient.accessCode}</span>
                      </p>
                    </div>
                  </div>

                  {/* Actions: Edit Profile (Quick Access), Request Task & Logout */}
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => handleOpenEditClient(loggedInClient)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#57534E] hover:text-[#1C1917] hover:bg-[#FAF8F5] border border-[#E7DFD3] transition-colors cursor-pointer"
                      title="Edit this client's profile details"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-[#8D5B32]" />
                      <span className="hidden sm:inline">Edit Profile</span>
                    </button>

                    <button
                      onClick={() => setIsTaskModalOpen(true)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FAF8F5] hover:bg-[#F2ECE2] border border-[#E7DFD3] text-xs font-bold text-[#1C1917] transition-all cursor-pointer shadow-2xs"
                    >
                      <PlusCircle className="w-3.5 h-3.5" style={{ color: currentPalette.primary }} />
                      <span>Submit Task / Request</span>
                    </button>

                    <button
                      onClick={handleClientLogout}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                      title="Log Out of Private Portal"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Log Out</span>
                    </button>
                  </div>
                </div>

                {/* 2. Project Health & Conversion KPI Banner */}
                <div
                  className="rounded-3xl p-7 sm:p-9 bg-white border shadow-md relative overflow-hidden"
                  style={{ borderColor: currentPalette.border }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-6 border-b border-[#EAE3D6]">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider border shadow-2xs"
                          style={{
                            backgroundColor: currentPalette.surface,
                            borderColor: currentPalette.border,
                            color: currentPalette.primary,
                          }}
                        >
                          {loggedInClient.status}
                        </span>
                        <span className="text-xs text-[#78716C]">
                          Since {loggedInClient.startDate}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] tracking-tight">
                        {loggedInClient.service}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#665E55] mt-1">
                        Dedicated Lead: <span className="font-semibold text-[#1C1917]">Kim Karen Ambong</span> (Virtual Assistant & Funnel Architect)
                      </p>
                    </div>

                    {/* Highlight Metric Pill */}
                    <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E0D5] text-left lg:text-right min-w-[210px] shadow-2xs">
                      <span className="text-xs text-[#78716C] block">Primary Verified Outcome</span>
                      <span
                        className="text-2xl sm:text-3xl font-black font-mono block leading-tight"
                        style={{ color: currentPalette.primary }}
                      >
                        {loggedInClient.highlightMetric}
                      </span>
                      <span className="text-xs font-semibold text-[#1C1917]">
                        {loggedInClient.highlightLabel}
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-[#57534E] mb-2">
                      <span>Milestones & Systems Health</span>
                      <span className="font-bold" style={{ color: currentPalette.primary }}>
                        {loggedInClient.progress}% Completed
                      </span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-[#FAF6F0] overflow-hidden border border-[#EAE3D6]">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${loggedInClient.progress}%`,
                          backgroundColor: currentPalette.primary,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Upcoming Deadlines & Pending Tasks Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Upcoming Deadlines (6 cols) */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7DFD3] shadow-sm">
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" style={{ color: currentPalette.primary }} />
                          <h4 className="text-sm font-bold text-[#1C1917] tracking-tight uppercase tracking-wider">
                            Upcoming Deadlines & Milestones
                          </h4>
                        </div>
                        <span className="text-xs font-semibold text-[#78716C]">
                          {loggedInClient.deadlines.length} scheduled
                        </span>
                      </div>

                      <div className="space-y-3.5">
                        {loggedInClient.deadlines.map((deadline) => (
                          <div
                            key={deadline.id}
                            className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E0D5] hover:border-[#D6CDC0] transition-all"
                          >
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                                  deadline.priority === 'High'
                                    ? 'bg-rose-100 text-rose-800'
                                    : 'bg-amber-100 text-amber-800'
                                }`}
                              >
                                {deadline.priority} Priority
                              </span>
                              <span className="text-xs font-bold text-[#1C1917] flex items-center gap-1 font-mono">
                                <Clock className="w-3 h-3 text-[#78716C]" />
                                <span>{deadline.dueDate}</span>
                                <span className="text-[10px] text-[#8D5B32] font-semibold">({deadline.countdown})</span>
                              </span>
                            </div>

                            <h5 className="font-bold text-[#1C1917] text-sm mb-1">
                              {deadline.title}
                            </h5>
                            <p className="text-xs text-[#57534E] leading-relaxed">
                              {deadline.deliverable}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Vault Quick Links */}
                    <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7DFD3] shadow-sm">
                      <div className="flex items-center gap-2 mb-4">
                        <FolderOpen className="w-4 h-4" style={{ color: currentPalette.primary }} />
                        <h4 className="text-sm font-bold text-[#1C1917] tracking-tight uppercase tracking-wider">
                          Shared Assets & Live Links
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {loggedInClient.vaultLinks.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3.5 rounded-2xl bg-[#FAF8F5] hover:bg-[#F2ECE2] border border-[#E8E0D5] text-xs transition-colors flex items-center justify-between group cursor-pointer shadow-2xs"
                          >
                            <div>
                              <span className="font-bold text-[#1C1917] block group-hover:text-[#8D5B32] leading-tight">
                                {link.title}
                              </span>
                              <span className="text-[10px] text-[#78716C] block mt-0.5">
                                {link.category}
                              </span>
                            </div>
                            <ExternalLink className="w-3.5 h-3.5 text-[#78716C] group-hover:text-[#1C1917] shrink-0 ml-2" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Pending & Active Tasks (6 cols) */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7DFD3] shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Layers className="w-4 h-4" style={{ color: currentPalette.primary }} />
                          <h4 className="text-sm font-bold text-[#1C1917] tracking-tight uppercase tracking-wider">
                            Task Queue & Deliverables
                          </h4>
                        </div>
                        <button
                          onClick={() => setIsTaskModalOpen(true)}
                          className="text-xs font-bold text-[#8D5B32] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <PlusCircle className="w-3.5 h-3.5" />
                          <span>Add Task</span>
                        </button>
                      </div>

                      {/* Filter Task Pills */}
                      <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#FAF8F5] border border-[#E8E0D5] text-[11px] mb-4">
                        {(['all', 'In Progress', 'Needs Review', 'Completed'] as const).map((filter) => (
                          <button
                            key={filter}
                            onClick={() => setTaskFilter(filter)}
                            className={`flex-1 py-1 rounded-lg font-medium transition-all ${
                              taskFilter === filter
                                ? 'bg-white text-[#1C1917] font-bold shadow-2xs'
                                : 'text-[#78716C] hover:text-[#1C1917]'
                            }`}
                          >
                            {filter === 'all' ? 'All' : filter}
                          </button>
                        ))}
                      </div>

                      {/* Tasks List */}
                      <div className="space-y-3">
                        {loggedInClient.tasks
                          .filter((t) => (taskFilter === 'all' ? true : t.status === taskFilter))
                          .map((task) => {
                            const isDone = task.status === 'Completed';

                            return (
                              <div
                                key={task.id}
                                className={`p-4 rounded-2xl border transition-all ${
                                  isDone
                                    ? 'bg-[#FAF8F5]/60 border-[#E8E0D5] opacity-75'
                                    : 'bg-[#FAF8F5] border-[#E8E0D5] hover:border-[#D6CDC0]'
                                }`}
                              >
                                <div className="flex items-start justify-between gap-3">
                                  <div className="flex items-start gap-2.5">
                                    <button
                                      onClick={() => handleToggleTaskStatus(task.id)}
                                      className={`shrink-0 w-5 h-5 rounded-md mt-0.5 border flex items-center justify-center transition-colors cursor-pointer ${
                                        isDone
                                          ? 'bg-emerald-600 border-emerald-600 text-white'
                                          : 'bg-white border-[#D6CDC0] hover:border-[#8D5B32]'
                                      }`}
                                      title={isDone ? 'Mark Incomplete' : 'Mark Completed'}
                                    >
                                      {isDone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                                    </button>

                                    <div>
                                      <h5
                                        className={`font-bold text-xs sm:text-sm text-[#1C1917] leading-snug ${
                                          isDone ? 'line-through text-[#78716C]' : ''
                                        }`}
                                      >
                                        {task.title}
                                      </h5>
                                      <div className="flex flex-wrap items-center gap-2 mt-1.5 text-[11px] text-[#78716C]">
                                        <span className="font-semibold text-[#1C1917]">
                                          Assignee: {task.assignee}
                                        </span>
                                        <span>•</span>
                                        <span>Est: {task.estimatedDelivery}</span>
                                      </div>
                                    </div>
                                  </div>

                                  <span
                                    className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-md ${
                                      task.status === 'Completed'
                                        ? 'bg-emerald-100 text-emerald-800'
                                        : task.status === 'Needs Review'
                                        ? 'bg-amber-100 text-amber-800'
                                        : 'bg-sky-100 text-sky-800'
                                    }`}
                                  >
                                    {task.status}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>

                    {/* Live EOD / Milestone Notification Feed */}
                    <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7DFD3] shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Bell className="w-4 h-4" style={{ color: currentPalette.primary }} />
                          <h4 className="text-sm font-bold text-[#1C1917] tracking-tight uppercase tracking-wider">
                            Kim's Real-Time EOD Logs ({loggedInClient.updates.length})
                          </h4>
                        </div>
                        <span className="text-xs text-[#78716C]">Daily Asynchronous Sync</span>
                      </div>

                      <div className="space-y-3">
                        {loggedInClient.updates.map((update) => (
                          <div
                            key={update.id}
                            className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E0D5] text-xs shadow-2xs"
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                                  update.type === 'Launch'
                                    ? 'bg-rose-100 text-rose-800'
                                    : update.type === 'Report'
                                    ? 'bg-sky-100 text-sky-800'
                                    : update.type === 'Milestone'
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : 'bg-amber-100 text-amber-800'
                                }`}
                              >
                                {update.type}
                              </span>
                              <span className="text-[11px] text-[#78716C]">{update.date}</span>
                            </div>
                            <h5 className="font-bold text-[#1C1917] text-sm mb-1">{update.title}</h5>
                            <p className="text-[#57534E] leading-relaxed">{update.message}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            )}
          </div>
        )}

      </div>

      {/* ============================================================== */}
      {/* 3. MODAL: EDIT CLIENT PROFILE                                  */}
      {/* ============================================================== */}
      {isEditClientModalOpen && editingClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
          <div
            className="w-full max-w-lg rounded-3xl bg-white border border-[#E7DFD3] shadow-2xl p-6 sm:p-8 text-[#1C1917] my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#EAE3D6]">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shadow-2xs"
                  style={{
                    backgroundColor: currentPalette.surface,
                    borderColor: currentPalette.border,
                    color: currentPalette.primary,
                  }}
                >
                  <Edit3 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#1C1917]">
                    Edit Client Profile
                  </h4>
                  <p className="text-xs text-[#78716C]">
                    Update client identity, metrics, passcode, and service details
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsEditClientModalOpen(false)}
                className="p-1 rounded-lg text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF8F5]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveClientProfile} className="space-y-4">
              
              {/* Client Name & Brand */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-[#57534E] uppercase tracking-wider block mb-1">
                    Client Full Name:
                  </label>
                  <input
                    type="text"
                    value={editingClient.name}
                    onChange={(e) => setEditingClient({ ...editingClient, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#E7DFD3] text-xs text-[#1C1917] font-semibold focus:outline-none focus:border-[#8D5B32]"
                    required
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#57534E] uppercase tracking-wider block mb-1">
                    Company / Brand Name:
                  </label>
                  <input
                    type="text"
                    value={editingClient.clientType}
                    onChange={(e) => setEditingClient({ ...editingClient, clientType: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#E7DFD3] text-xs text-[#1C1917] focus:outline-none focus:border-[#8D5B32]"
                    required
                  />
                </div>
              </div>

              {/* Access Code & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-[#57534E] uppercase tracking-wider block mb-1">
                    Portal Passcode:
                  </label>
                  <input
                    type="text"
                    value={editingClient.accessCode}
                    onChange={(e) => setEditingClient({ ...editingClient, accessCode: e.target.value.toUpperCase() })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#E7DFD3] text-xs font-mono font-bold text-[#1C1917] focus:outline-none focus:border-[#8D5B32]"
                    placeholder="e.g. SARAH275"
                    required
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#57534E] uppercase tracking-wider block mb-1">
                    Client Email:
                  </label>
                  <input
                    type="email"
                    value={editingClient.clientEmail}
                    onChange={(e) => setEditingClient({ ...editingClient, clientEmail: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#E7DFD3] text-xs text-[#1C1917] focus:outline-none focus:border-[#8D5B32]"
                    required
                  />
                </div>
              </div>

              {/* Service Description */}
              <div>
                <label className="text-[11px] font-bold text-[#57534E] uppercase tracking-wider block mb-1">
                  Service / Project Scope:
                </label>
                <input
                  type="text"
                  value={editingClient.service}
                  onChange={(e) => setEditingClient({ ...editingClient, service: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#E7DFD3] text-xs text-[#1C1917] focus:outline-none focus:border-[#8D5B32]"
                  required
                />
              </div>

              {/* Status & Progress Slider */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-[#57534E] uppercase tracking-wider block mb-1">
                    Project Status:
                  </label>
                  <select
                    value={editingClient.status}
                    onChange={(e) => setEditingClient({ ...editingClient, status: e.target.value as ClientProject['status'] })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#E7DFD3] text-xs text-[#1C1917] focus:outline-none focus:border-[#8D5B32]"
                  >
                    <option value="Completed Launch">Completed Launch</option>
                    <option value="Active Retainer">Active Retainer</option>
                    <option value="In Progress">In Progress</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[11px] font-bold text-[#57534E] uppercase tracking-wider">
                      Progress:
                    </label>
                    <span className="text-xs font-mono font-bold text-[#1C1917]">{editingClient.progress}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={editingClient.progress}
                    onChange={(e) => setEditingClient({ ...editingClient, progress: Number(e.target.value) })}
                    className="w-full accent-[#8D5B32] cursor-pointer"
                  />
                </div>
              </div>

              {/* Highlight Metric & Label */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-[#57534E] uppercase tracking-wider block mb-1">
                    Primary Metric (e.g. 275+ Sign-Ups):
                  </label>
                  <input
                    type="text"
                    value={editingClient.highlightMetric}
                    onChange={(e) => setEditingClient({ ...editingClient, highlightMetric: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#E7DFD3] text-xs font-bold text-[#1C1917] focus:outline-none focus:border-[#8D5B32]"
                    required
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#57534E] uppercase tracking-wider block mb-1">
                    Metric Label (e.g. 34.8% Opt-In CVR):
                  </label>
                  <input
                    type="text"
                    value={editingClient.highlightLabel}
                    onChange={(e) => setEditingClient({ ...editingClient, highlightLabel: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#E7DFD3] text-xs text-[#1C1917] focus:outline-none focus:border-[#8D5B32]"
                    required
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-[#EAE3D6]">
                <button
                  type="button"
                  onClick={() => handleDeleteClient(editingClient.id)}
                  className="px-3 py-2 rounded-xl text-xs font-semibold text-rose-700 hover:bg-rose-50 border border-rose-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete Client</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsEditClientModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-[#78716C] hover:bg-[#FAF8F5] transition-colors"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#1C1917] hover:bg-[#292524] text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 4. MODAL: ADD NEW CLIENT                                       */}
      {/* ============================================================== */}
      {isAddClientModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
          <div
            className="w-full max-w-lg rounded-3xl bg-white border border-[#E7DFD3] shadow-2xl p-6 sm:p-8 text-[#1C1917] my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#EAE3D6]">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shadow-2xs"
                  style={{
                    backgroundColor: currentPalette.surface,
                    borderColor: currentPalette.border,
                    color: currentPalette.primary,
                  }}
                >
                  <UserPlus className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#1C1917]">
                    Add New Client Project
                  </h4>
                  <p className="text-xs text-[#78716C]">
                    Creates a dedicated private dashboard and tracking space
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsAddClientModalOpen(false)}
                className="p-1 rounded-lg text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF8F5]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateNewClient} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-[#57534E] uppercase tracking-wider block mb-1">
                    Client Full Name:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Jessica Taylor"
                    value={newClientName}
                    onChange={(e) => setNewClientName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#E7DFD3] text-xs text-[#1C1917] focus:outline-none focus:border-[#8D5B32]"
                    required
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#57534E] uppercase tracking-wider block mb-1">
                    Company / Brand Name:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex High Performance"
                    value={newClientType}
                    onChange={(e) => setNewClientType(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#E7DFD3] text-xs text-[#1C1917] focus:outline-none focus:border-[#8D5B32]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-[#57534E] uppercase tracking-wider block mb-1">
                    Portal Passcode:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. APEX2026 (Auto-generated if empty)"
                    value={newClientAccessCode}
                    onChange={(e) => setNewClientAccessCode(e.target.value.toUpperCase())}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#E7DFD3] text-xs font-mono font-bold text-[#1C1917] focus:outline-none focus:border-[#8D5B32]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#57534E] uppercase tracking-wider block mb-1">
                    Client Email:
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. jessica@apex.com"
                    value={newClientEmail}
                    onChange={(e) => setNewClientEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#E7DFD3] text-xs text-[#1C1917] focus:outline-none focus:border-[#8D5B32]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#57534E] uppercase tracking-wider block mb-1">
                  Service Scope:
                </label>
                <input
                  type="text"
                  placeholder="e.g. GoHighLevel Funnel & Automated Email Nurture"
                  value={newClientService}
                  onChange={(e) => setNewClientService(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#E7DFD3] text-xs text-[#1C1917] focus:outline-none focus:border-[#8D5B32]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-[#57534E] uppercase tracking-wider block mb-1">
                    Status:
                  </label>
                  <select
                    value={newClientStatus}
                    onChange={(e) => setNewClientStatus(e.target.value as ClientProject['status'])}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#E7DFD3] text-xs text-[#1C1917] focus:outline-none focus:border-[#8D5B32]"
                  >
                    <option value="In Progress">In Progress</option>
                    <option value="Active Retainer">Active Retainer</option>
                    <option value="Completed Launch">Completed Launch</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#57534E] uppercase tracking-wider block mb-1">
                    Primary Metric:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 200+ Opt-Ins"
                    value={newClientMetric}
                    onChange={(e) => setNewClientMetric(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#E7DFD3] text-xs font-bold text-[#1C1917] focus:outline-none focus:border-[#8D5B32]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-4 border-t border-[#EAE3D6]">
                <button
                  type="button"
                  onClick={() => setIsAddClientModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-[#78716C] hover:bg-[#FAF8F5] transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#1C1917] hover:bg-[#292524] text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Create Client Profile</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* Client Task Request Modal */}
      {isTaskModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="w-full max-w-md rounded-3xl bg-white border border-[#E7DFD3] shadow-2xl p-6 sm:p-7 text-[#1C1917]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE3D6]">
              <div className="flex items-center gap-2">
                <PlusCircle className="w-4 h-4 text-[#8D5B32]" />
                <h4 className="text-sm font-bold text-[#1C1917]">
                  Submit New Task Request
                </h4>
              </div>
              <button
                onClick={() => setIsTaskModalOpen(false)}
                className="text-[#78716C] hover:text-[#1C1917] text-xs font-semibold p-1"
              >
                Cancel
              </button>
            </div>

            <form onSubmit={handleClientSubmitTask} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-[#57534E] block mb-1">
                  Task Title or Deliverable:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Build A/B headline test on opt-in funnel page"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E7DFD3] text-xs text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:border-[#8D5B32]"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#57534E] block mb-1">
                  Category:
                </label>
                <select
                  value={newTaskCategory}
                  onChange={(e) => setNewTaskCategory(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#E7DFD3] text-xs text-[#1C1917] focus:outline-none focus:border-[#8D5B32]"
                >
                  <option value="GoHighLevel Funnel">GoHighLevel Funnel & Landing Page</option>
                  <option value="Email & SMS Automation">Email & SMS Automation Sequence</option>
                  <option value="DM & Lead Outreach">DM & ManyChat Lead Generation</option>
                  <option value="Design & Canva">Design, Slides & Canva Assets</option>
                  <option value="Admin & Support">Executive Admin & Operations</option>
                </select>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E0D5] text-[11px] text-[#78716C]">
                Kim typically starts tasks within 24 business hours. Urgent launch revisions receive priority queueing.
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#1C1917] hover:bg-[#292524] text-white font-bold text-xs transition-all shadow-xs cursor-pointer"
              >
                Send Request to Kim
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
