// QuickDesk Help Desk Application
class QuickDeskApp {
    constructor() {
        this.currentUser = null;
        this.currentView = 'dashboard';
        this.currentTicket = null;
        
        // Initialize data from provided JSON
        this.data = {
            users: [
                {"id": 1, "email": "admin@quickdesk.com", "password": "admin123", "name": "System Admin", "role": "admin", "avatar": "👨‍💼", "joinDate": "2025-01-01"},
                {"id": 2, "email": "agent@quickdesk.com", "password": "agent123", "name": "John Agent", "role": "support-agent", "avatar": "👨‍🔧", "joinDate": "2025-01-15"},
                {"id": 3, "email": "agent2@quickdesk.com", "password": "agent123", "name": "Sarah Support", "role": "support-agent", "avatar": "👩‍🔧", "joinDate": "2025-02-01"},
                {"id": 4, "email": "user@quickdesk.com", "password": "user123", "name": "Jane User", "role": "end-user", "avatar": "👩‍💻", "joinDate": "2025-02-15"},
                {"id": 5, "email": "user2@quickdesk.com", "password": "user123", "name": "Bob Customer", "role": "end-user", "avatar": "👨‍💻", "joinDate": "2025-03-01"},
                {"id": 6, "email": "user3@quickdesk.com", "password": "user123", "name": "Alice Brown", "role": "end-user", "avatar": "👩‍🎨", "joinDate": "2025-03-15"}
            ],
            categories: [
                {"id": 1, "name": "Technical", "description": "Technical issues and bugs", "color": "#3B82F6", "icon": "🔧"},
                {"id": 2, "name": "Billing", "description": "Billing and payment related", "color": "#10B981", "icon": "💳"},
                {"id": 3, "name": "General", "description": "General inquiries", "color": "#8B5CF6", "icon": "❓"},
                {"id": 4, "name": "Bug Report", "description": "Software bugs and errors", "color": "#EF4444", "icon": "🐛"},
                {"id": 5, "name": "Feature Request", "description": "New feature suggestions", "color": "#F59E0B", "icon": "💡"},
                {"id": 6, "name": "Account", "description": "Account related issues", "color": "#06B6D4", "icon": "👤"}
            ],
            tickets: [
                {"id": 1, "subject": "Login issues with 2FA", "description": "Cannot login to my account even with correct 2FA code", "category": "Technical", "status": "open", "priority": "high", "createdBy": 4, "assignedTo": null, "createdAt": "2025-08-01T10:00:00Z", "updatedAt": "2025-08-01T10:00:00Z", "comments": [], "attachments": ["screenshot.png"], "tags": ["authentication", "2fa"]},
                {"id": 2, "subject": "Billing discrepancy on invoice", "description": "Wrong amount charged on last month's invoice", "category": "Billing", "status": "in-progress", "priority": "medium", "createdBy": 5, "assignedTo": 2, "createdAt": "2025-07-30T14:30:00Z", "updatedAt": "2025-08-01T09:15:00Z", "comments": [{"id": 1, "text": "Looking into this issue. Can you provide more details about the expected amount?", "author": "John Agent", "authorId": 2, "timestamp": "2025-07-31T09:00:00Z"}], "attachments": ["invoice.pdf"], "tags": ["billing", "invoice"]},
                {"id": 3, "subject": "Feature request: Dark mode", "description": "Please add dark mode option to the application", "category": "Feature Request", "status": "resolved", "priority": "low", "createdBy": 4, "assignedTo": 3, "createdAt": "2025-07-28T16:00:00Z", "updatedAt": "2025-07-30T14:00:00Z", "comments": [{"id": 2, "text": "Great suggestion! Will forward to development team", "author": "Sarah Support", "authorId": 3, "timestamp": "2025-07-29T10:00:00Z"}, {"id": 3, "text": "Feature has been added to our roadmap for next release", "author": "Sarah Support", "authorId": 3, "timestamp": "2025-07-30T14:00:00Z"}], "attachments": [], "tags": ["feature", "ui"]},
                {"id": 4, "subject": "Mobile app crashes on startup", "description": "Mobile app crashes immediately after opening on iOS 18", "category": "Bug Report", "status": "open", "priority": "high", "createdBy": 5, "assignedTo": null, "createdAt": "2025-08-01T08:45:00Z", "updatedAt": "2025-08-01T08:45:00Z", "comments": [], "attachments": ["crash_log.txt"], "tags": ["mobile", "ios", "crash"]},
                {"id": 5, "subject": "Password reset not working", "description": "Password reset email not received", "category": "Account", "status": "closed", "priority": "medium", "createdBy": 6, "assignedTo": 2, "createdAt": "2025-07-25T12:00:00Z", "updatedAt": "2025-07-26T16:00:00Z", "comments": [{"id": 4, "text": "Issue resolved. Password reset functionality fixed", "author": "John Agent", "authorId": 2, "timestamp": "2025-07-26T14:00:00Z"}], "attachments": [], "tags": ["password", "email"]},
                {"id": 6, "subject": "Slow performance on dashboard", "description": "Dashboard takes too long to load ticket list", "category": "Technical", "status": "in-progress", "priority": "medium", "createdBy": 4, "assignedTo": 3, "createdAt": "2025-07-29T11:30:00Z", "updatedAt": "2025-08-01T10:30:00Z", "comments": [{"id": 5, "text": "Investigating performance issues. Can you tell me how many tickets you have?", "author": "Sarah Support", "authorId": 3, "timestamp": "2025-07-30T09:30:00Z"}], "attachments": [], "tags": ["performance", "dashboard"]},
                {"id": 7, "subject": "Unable to upload attachments", "description": "Getting error when trying to upload files to tickets", "category": "Bug Report", "status": "open", "priority": "medium", "createdBy": 6, "assignedTo": null, "createdAt": "2025-07-31T15:20:00Z", "updatedAt": "2025-07-31T15:20:00Z", "comments": [], "attachments": [], "tags": ["upload", "files"]},
                {"id": 8, "subject": "Request for API documentation", "description": "Need API documentation for third-party integration", "category": "General", "status": "resolved", "priority": "low", "createdBy": 5, "assignedTo": 2, "createdAt": "2025-07-26T09:15:00Z", "updatedAt": "2025-07-28T11:00:00Z", "comments": [{"id": 6, "text": "API documentation is available at docs.quickdesk.com", "author": "John Agent", "authorId": 2, "timestamp": "2025-07-27T10:15:00Z"}], "attachments": [], "tags": ["api", "documentation"]},
                {"id": 9, "subject": "Notification settings not saving", "description": "Changes to notification preferences are not being saved", "category": "Bug Report", "status": "open", "priority": "low", "createdBy": 4, "assignedTo": null, "createdAt": "2025-08-01T13:45:00Z", "updatedAt": "2025-08-01T13:45:00Z", "comments": [], "attachments": [], "tags": ["notifications", "settings"]},
                {"id": 10, "subject": "Integration with Slack", "description": "Request to integrate QuickDesk with Slack notifications", "category": "Feature Request", "status": "open", "priority": "medium", "createdBy": 6, "assignedTo": null, "createdAt": "2025-07-31T10:20:00Z", "updatedAt": "2025-07-31T10:20:00Z", "comments": [], "attachments": [], "tags": ["integration", "slack"]}
            ]
        };
        
        this.loadFromStorage();
        this.init();
    }

    init() {
        console.log('Initializing QuickDesk app...');
        this.showLoadingScreen();
        
        // Check if user is already logged in
        setTimeout(() => {
            const storedUser = sessionStorage.getItem('quickdesk_user');
            if (storedUser) {
                try {
                    this.currentUser = JSON.parse(storedUser);
                    console.log('Found stored user:', this.currentUser);
                    this.showMainApp();
                } catch (e) {
                    console.error('Error parsing stored user:', e);
                    sessionStorage.removeItem('quickdesk_user');
                    this.showAuthScreen();
                }
            } else {
                console.log('No stored user found, showing auth screen');
                this.showAuthScreen();
            }
            this.setupEventListeners();
        }, 2000);
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Wait for DOM elements to be available
        setTimeout(() => {
            // Auth form listeners
            const loginForm = document.getElementById('loginForm');
            const registerForm = document.getElementById('registerForm');
            
            if (loginForm) {
                console.log('Setting up login form listener');
                loginForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Login form submitted');
                    this.handleLogin(e);
                });
            } else {
                console.error('Login form not found');
            }
            
            if (registerForm) {
                console.log('Setting up register form listener');
                registerForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.handleRegister(e);
                });
            }
            
            // Tab switching
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.switchAuthTab(e);
                });
            });
            
            // Demo account buttons
            document.querySelectorAll('.demo-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.fillDemoCredentials(e);
                });
            });
            
            // Only set up main app listeners if we're logged in
            if (this.currentUser) {
                this.setupMainAppListeners();
            }
        }, 100);
    }

    setupMainAppListeners() {
        console.log('Setting up main app listeners...');
        
        // Navigation
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.logout();
            });
        }
        
        // Modal handlers
        document.querySelectorAll('[data-modal]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleModal(e.target.dataset.modal);
            });
        });
        
        // Create ticket
        const createTicketBtn = document.getElementById('createTicketBtn');
        const createTicketForm = document.getElementById('createTicketForm');
        
        if (createTicketBtn) {
            createTicketBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openCreateTicketModal();
            });
        }
        
        if (createTicketForm) {
            createTicketForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleCreateTicket(e);
            });
        }
        
        // Create category
        const createCategoryBtn = document.getElementById('createCategoryBtn');
        const createCategoryForm = document.getElementById('createCategoryForm');
        
        if (createCategoryBtn) {
            createCategoryBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleModal('createCategoryModal');
            });
        }
        
        if (createCategoryForm) {
            createCategoryForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleCreateCategory(e);
            });
        }
        
        // Search and filters
        const searchInput = document.getElementById('searchInput');
        const statusFilter = document.getElementById('statusFilter');
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.handleSearch(e));
        }
        
        if (statusFilter) {
            statusFilter.addEventListener('change', (e) => this.handleStatusFilter(e));
        }
        
        // Ticket details form
        const addCommentForm = document.getElementById('addCommentForm');
        const ticketStatus = document.getElementById('ticketStatus');
        const ticketAssignee = document.getElementById('ticketAssignee');
        
        if (addCommentForm) {
            addCommentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleAddComment(e);
            });
        }
        
        if (ticketStatus) {
            ticketStatus.addEventListener('change', (e) => this.handleStatusChange(e));
        }
        
        if (ticketAssignee) {
            ticketAssignee.addEventListener('change', (e) => this.handleAssigneeChange(e));
        }
        
        // File upload simulation
        const ticketAttachments = document.getElementById('ticketAttachments');
        const fileUploadArea = document.querySelector('.file-upload-area');
        
        if (ticketAttachments) {
            ticketAttachments.addEventListener('change', (e) => this.handleFileUpload(e));
        }
        
        if (fileUploadArea) {
            fileUploadArea.addEventListener('click', () => {
                if (ticketAttachments) {
                    ticketAttachments.click();
                }
            });
        }
    }

    // Authentication Methods
    handleLogin(e) {
        console.log('Handling login...');
        
        const emailInput = document.getElementById('loginEmail');
        const passwordInput = document.getElementById('loginPassword');
        
        if (!emailInput || !passwordInput) {
            console.error('Login form elements not found');
            this.showToast('Form elements not found', 'error');
            return;
        }
        
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        console.log('Login attempt with email:', email);
        
        if (!email || !password) {
            this.showToast('Please enter both email and password', 'error');
            return;
        }
        
        const user = this.data.users.find(u => u.email === email && u.password === password);
        
        if (user) {
            console.log('User authenticated:', user.name, user.role);
            this.currentUser = user;
            
            try {
                sessionStorage.setItem('quickdesk_user', JSON.stringify(user));
                console.log('User stored in session storage');
            } catch (e) {
                console.error('Error storing user in session storage:', e);
            }
            
            this.showToast('Login successful!', 'success');
            
            // Add a small delay to show the success message
            setTimeout(() => {
                console.log('Transitioning to main app...');
                this.showMainApp();
            }, 500);
        } else {
            console.log('Invalid credentials for email:', email);
            this.showToast('Invalid email or password', 'error');
        }
    }

    handleRegister(e) {
        console.log('Handling registration...');
        
        const nameInput = document.getElementById('registerName');
        const emailInput = document.getElementById('registerEmail');
        const passwordInput = document.getElementById('registerPassword');
        const roleInput = document.getElementById('registerRole');
        
        if (!nameInput || !emailInput || !passwordInput || !roleInput) {
            console.error('Register form elements not found');
            this.showToast('Form elements not found', 'error');
            return;
        }
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const role = roleInput.value;
        
        if (!name || !email || !password || !role) {
            this.showToast('Please fill in all fields', 'error');
            return;
        }
        
        // Check if email already exists
        if (this.data.users.find(u => u.email === email)) {
            this.showToast('Email already exists', 'error');
            return;
        }
        
        const newUser = {
            id: Math.max(...this.data.users.map(u => u.id)) + 1,
            email,
            password,
            name,
            role,
            avatar: role === 'admin' ? '👨‍💼' : role === 'support-agent' ? '👨‍🔧' : '👨‍💻',
            joinDate: new Date().toISOString().split('T')[0]
        };
        
        this.data.users.push(newUser);
        this.saveToStorage();
        
        this.currentUser = newUser;
        sessionStorage.setItem('quickdesk_user', JSON.stringify(newUser));
        this.showToast('Registration successful!', 'success');
        
        setTimeout(() => {
            this.showMainApp();
        }, 500);
    }

    switchAuthTab(e) {
        console.log('Switching auth tab to:', e.target.dataset.tab);
        
        const tab = e.target.dataset.tab;
        
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        // Show/hide forms
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        
        if (loginForm && registerForm) {
            if (tab === 'login') {
                loginForm.classList.remove('hidden');
                registerForm.classList.add('hidden');
                console.log('Showing login form');
            } else if (tab === 'register') {
                loginForm.classList.add('hidden');
                registerForm.classList.remove('hidden');
                console.log('Showing register form');
            }
        } else {
            console.error('Auth forms not found:', !!loginForm, !!registerForm);
        }
    }

    fillDemoCredentials(e) {
        console.log('Filling demo credentials');
        
        const email = e.target.dataset.email;
        const password = e.target.dataset.password;
        
        console.log('Demo credentials:', email, password);
        
        const emailInput = document.getElementById('loginEmail');
        const passwordInput = document.getElementById('loginPassword');
        
        if (emailInput && passwordInput) {
            emailInput.value = email;
            passwordInput.value = password;
            console.log('Credentials filled successfully');
            
            // Switch to login tab
            const loginTab = document.querySelector('[data-tab="login"]');
            if (loginTab && !loginTab.classList.contains('active')) {
                loginTab.click();
            }
        } else {
            console.error('Email or password input not found:', !!emailInput, !!passwordInput);
        }
        
        // Add visual feedback
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = 'scale(1)';
        }, 150);
    }

    logout() {
        console.log('Logging out user');
        this.currentUser = null;
        sessionStorage.removeItem('quickdesk_user');
        this.showAuthScreen();
        this.showToast('Logged out successfully', 'info');
    }

    // Screen Management
    showLoadingScreen() {
        console.log('Showing loading screen');
        this.hideAllScreens();
        document.getElementById('loadingScreen').classList.remove('hidden');
    }

    showAuthScreen() {
        console.log('Showing auth screen');
        this.hideAllScreens();
        document.getElementById('authScreen').classList.remove('hidden');
        
        // Ensure login tab is active by default
        setTimeout(() => {
            const loginTab = document.querySelector('[data-tab="login"]');
            if (loginTab && !loginTab.classList.contains('active')) {
                loginTab.click();
            }
        }, 100);
    }

    showMainApp() {
        console.log('Showing main app');
        this.hideAllScreens();
        document.getElementById('mainApp').classList.remove('hidden');
        
        this.setupUserInfo();
        this.setupNavigation();
        this.setupMainAppListeners();
        this.showDashboard();
    }

    hideAllScreens() {
        document.getElementById('loadingScreen').classList.add('hidden');
        document.getElementById('authScreen').classList.add('hidden');
        document.getElementById('mainApp').classList.add('hidden');
    }

    setupUserInfo() {
        const userAvatar = document.getElementById('userAvatar');
        const userName = document.getElementById('userName');
        
        if (userAvatar && userName && this.currentUser) {
            userAvatar.textContent = this.currentUser.avatar;
            userName.textContent = this.currentUser.name;
            console.log('User info updated:', this.currentUser.name);
        }
    }

    setupNavigation() {
        const navLinks = document.getElementById('navLinks');
        if (!navLinks || !this.currentUser) {
            console.error('Navigation setup failed - missing elements');
            return;
        }
        
        const role = this.currentUser.role;
        console.log('Setting up navigation for role:', role);
        
        let links = [
            { id: 'dashboard', label: 'Dashboard', icon: '📊' }
        ];
        
        if (role === 'admin') {
            links.push(
                { id: 'users', label: 'Users', icon: '👥' },
                { id: 'categories', label: 'Categories', icon: '📋' }
            );
        }
        
        navLinks.innerHTML = links.map(link => `
            <div class="nav-link" data-view="${link.id}">
                <span>${link.icon}</span>
                <span>${link.label}</span>
            </div>
        `).join('');
        
        // Add click listeners
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchView(e.currentTarget.dataset.view);
            });
        });
        
        // Set active link
        const dashboardLink = navLinks.querySelector('[data-view="dashboard"]');
        if (dashboardLink) {
            dashboardLink.classList.add('active');
        }
    }

    switchView(viewId) {
        console.log('Switching to view:', viewId);
        
        // Update navigation
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`[data-view="${viewId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Hide all views
        document.querySelectorAll('.view').forEach(view => view.classList.add('hidden'));
        
        // Show selected view
        const targetView = document.getElementById(`${viewId}View`);
        if (targetView) {
            targetView.classList.remove('hidden');
        }
        
        this.currentView = viewId;
        
        // Load view content
        switch(viewId) {
            case 'dashboard':
                this.showDashboard();
                break;
            case 'users':
                this.showUsers();
                break;
            case 'categories':
                this.showCategories();
                break;
        }
    }

    // Dashboard Methods
    showDashboard() {
        console.log('Loading dashboard');
        this.updateStats();
        this.renderTickets();
        this.populateCategoryOptions();
        this.populateAssigneeOptions();
    }

    updateStats() {
        const userTickets = this.getUserTickets();
        
        const totalTicketsEl = document.getElementById('totalTickets');
        const openTicketsEl = document.getElementById('openTickets');
        const resolvedTicketsEl = document.getElementById('resolvedTickets');
        
        if (totalTicketsEl) totalTicketsEl.textContent = userTickets.length;
        if (openTicketsEl) openTicketsEl.textContent = userTickets.filter(t => t.status === 'open' || t.status === 'in-progress').length;
        if (resolvedTicketsEl) resolvedTicketsEl.textContent = userTickets.filter(t => t.status === 'resolved' || t.status === 'closed').length;
        
        console.log('Stats updated - Total:', userTickets.length);
    }

    getUserTickets() {
        if (!this.currentUser) return [];
        
        const role = this.currentUser.role;
        
        if (role === 'admin') {
            return this.data.tickets;
        } else if (role === 'support-agent') {
            return this.data.tickets.filter(t => t.assignedTo === this.currentUser.id || t.assignedTo === null);
        } else {
            return this.data.tickets.filter(t => t.createdBy === this.currentUser.id);
        }
    }

    renderTickets(tickets = null) {
        const ticketsToRender = tickets || this.getUserTickets();
        const grid = document.getElementById('ticketsGrid');
        
        if (!grid) {
            console.error('Tickets grid not found');
            return;
        }
        
        console.log('Rendering', ticketsToRender.length, 'tickets');
        
        if (ticketsToRender.length === 0) {
            grid.innerHTML = '<div class="no-tickets" style="color: white; text-align: center; padding: 40px;">No tickets found</div>';
            return;
        }
        
        grid.innerHTML = ticketsToRender.map(ticket => {
            const creator = this.data.users.find(u => u.id === ticket.createdBy);
            const assignee = ticket.assignedTo ? this.data.users.find(u => u.id === ticket.assignedTo) : null;
            
            return `
                <div class="ticket-card glass-panel" data-ticket-id="${ticket.id}">
                    <div class="ticket-header">
                        <div class="ticket-id">#${ticket.id}</div>
                        <div class="ticket-status ${ticket.status}">${ticket.status.replace('-', ' ')}</div>
                    </div>
                    <h4 class="ticket-subject">${ticket.subject}</h4>
                    <p class="ticket-description">${ticket.description}</p>
                    <div class="ticket-meta">
                        <div>
                            <div style="font-size: 12px; opacity: 0.7;">Created by ${creator?.name || 'Unknown'}</div>
                            ${assignee ? `<div style="font-size: 12px; opacity: 0.7;">Assigned to ${assignee.name}</div>` : ''}
                        </div>
                        <div class="priority-badge ${ticket.priority}">${ticket.priority}</div>
                    </div>
                </div>
            `;
        }).join('');
        
        // Add click listeners
        grid.querySelectorAll('.ticket-card').forEach(card => {
            card.addEventListener('click', () => {
                const ticketId = parseInt(card.dataset.ticketId);
                this.openTicketDetails(ticketId);
            });
        });
    }

    // Ticket Management
    openCreateTicketModal() {
        this.populateCategoryOptions();
        this.toggleModal('createTicketModal');
    }

    handleCreateTicket(e) {
        const subjectInput = document.getElementById('ticketSubject');
        const categoryInput = document.getElementById('ticketCategory');
        const priorityInput = document.getElementById('ticketPriority');
        const descriptionInput = document.getElementById('ticketDescription');
        
        if (!subjectInput || !categoryInput || !priorityInput || !descriptionInput) {
            console.error('Create ticket form elements not found');
            return;
        }
        
        const subject = subjectInput.value.trim();
        const category = categoryInput.value;
        const priority = priorityInput.value;
        const description = descriptionInput.value.trim();
        
        if (!subject || !category || !description) {
            this.showToast('Please fill in all required fields', 'error');
            return;
        }
        
        const newTicket = {
            id: Math.max(...this.data.tickets.map(t => t.id)) + 1,
            subject,
            description,
            category,
            status: 'open',
            priority,
            createdBy: this.currentUser.id,
            assignedTo: null,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            comments: [],
            attachments: [],
            tags: []
        };
        
        this.data.tickets.push(newTicket);
        this.saveToStorage();
        
        this.toggleModal('createTicketModal');
        this.showDashboard();
        this.showToast('Ticket created successfully!', 'success');
        
        // Reset form
        document.getElementById('createTicketForm').reset();
    }

    openTicketDetails(ticketId) {
        const ticket = this.data.tickets.find(t => t.id === ticketId);
        if (!ticket) return;
        
        this.currentTicket = ticket;
        
        // Populate modal
        const titleEl = document.getElementById('ticketDetailsTitle');
        const descriptionEl = document.getElementById('ticketDescriptionText');
        const statusEl = document.getElementById('ticketStatus');
        const priorityEl = document.getElementById('ticketPriorityDisplay');
        const assigneeEl = document.getElementById('ticketAssignee');
        
        if (titleEl) titleEl.textContent = `#${ticket.id} - ${ticket.subject}`;
        if (descriptionEl) descriptionEl.textContent = ticket.description;
        if (statusEl) statusEl.value = ticket.status;
        if (priorityEl) {
            priorityEl.textContent = ticket.priority;
            priorityEl.className = `priority-badge ${ticket.priority}`;
        }
        
        // Set assignee
        if (assigneeEl) assigneeEl.value = ticket.assignedTo || '';
        
        // Only allow status/assignee changes for support agents and admins
        const canEdit = ['support-agent', 'admin'].includes(this.currentUser.role);
        if (statusEl) statusEl.disabled = !canEdit;
        if (assigneeEl) assigneeEl.disabled = !canEdit;
        
        this.renderComments(ticket.comments);
        this.toggleModal('ticketDetailsModal');
    }

    renderComments(comments) {
        const commentsList = document.getElementById('commentsList');
        if (!commentsList) return;
        
        commentsList.innerHTML = comments.map(comment => `
            <div class="comment">
                <div class="comment-author">${comment.author}</div>
                <div class="comment-text">${comment.text}</div>
                <div class="comment-time">${new Date(comment.timestamp).toLocaleString()}</div>
            </div>
        `).join('');
    }

    handleAddComment(e) {
        if (!this.currentTicket) return;
        
        const commentTextEl = document.getElementById('commentText');
        if (!commentTextEl) return;
        
        const text = commentTextEl.value.trim();
        if (!text) return;
        
        const comment = {
            id: Math.max(0, ...this.currentTicket.comments.map(c => c.id)) + 1,
            text,
            author: this.currentUser.name,
            authorId: this.currentUser.id,
            timestamp: new Date().toISOString()
        };
        
        this.currentTicket.comments.push(comment);
        this.currentTicket.updatedAt = new Date().toISOString();
        
        this.saveToStorage();
        this.renderComments(this.currentTicket.comments);
        this.showToast('Comment added', 'success');
        
        commentTextEl.value = '';
    }

    handleStatusChange(e) {
        if (!this.currentTicket) return;
        
        this.currentTicket.status = e.target.value;
        this.currentTicket.updatedAt = new Date().toISOString();
        
        this.saveToStorage();
        this.showDashboard();
        this.showToast('Status updated', 'success');
    }

    handleAssigneeChange(e) {
        if (!this.currentTicket) return;
        
        this.currentTicket.assignedTo = e.target.value ? parseInt(e.target.value) : null;
        this.currentTicket.updatedAt = new Date().toISOString();
        
        this.saveToStorage();
        this.showDashboard();
        this.showToast('Assignee updated', 'success');
    }

    // Search and Filter
    handleSearch(e) {
        const query = e.target.value.toLowerCase();
        const statusFilterEl = document.getElementById('statusFilter');
        const statusFilter = statusFilterEl ? statusFilterEl.value : '';
        
        this.filterTickets(query, statusFilter);
    }

    handleStatusFilter(e) {
        const statusFilter = e.target.value;
        const searchInputEl = document.getElementById('searchInput');
        const query = searchInputEl ? searchInputEl.value.toLowerCase() : '';
        
        this.filterTickets(query, statusFilter);
    }

    filterTickets(query, statusFilter) {
        let tickets = this.getUserTickets();
        
        if (query) {
            tickets = tickets.filter(ticket => 
                ticket.subject.toLowerCase().includes(query) ||
                ticket.description.toLowerCase().includes(query) ||
                ticket.category.toLowerCase().includes(query)
            );
        }
        
        if (statusFilter) {
            tickets = tickets.filter(ticket => ticket.status === statusFilter);
        }
        
        this.renderTickets(tickets);
    }

    // Users Management (Admin only)
    showUsers() {
        if (this.currentUser.role !== 'admin') return;
        
        const grid = document.getElementById('usersGrid');
        if (!grid) return;
        
        grid.innerHTML = this.data.users.map(user => `
            <div class="user-card glass-panel">
                <div class="user-header">
                    <div class="user-avatar-large">${user.avatar}</div>
                    <div class="user-info">
                        <h4>${user.name}</h4>
                        <div class="user-role">${user.role.replace('-', ' ')}</div>
                    </div>
                </div>
                <div style="font-size: 14px; opacity: 0.8; margin-top: 12px;">
                    <div>📧 ${user.email}</div>
                    <div>📅 Joined ${new Date(user.joinDate).toLocaleDateString()}</div>
                </div>
            </div>
        `).join('');
    }

    // Categories Management (Admin only)
    showCategories() {
        if (this.currentUser.role !== 'admin') return;
        
        const grid = document.getElementById('categoriesGrid');
        if (!grid) return;
        
        grid.innerHTML = this.data.categories.map(category => `
            <div class="category-card glass-panel">
                <div class="category-header">
                    <div class="category-icon" style="font-size: 2rem;">${category.icon}</div>
                    <div class="category-info">
                        <h4 style="color: ${category.color};">${category.name}</h4>
                        <div class="category-description">${category.description}</div>
                    </div>
                </div>
                <div style="margin-top: 12px; font-size: 14px; opacity: 0.8;">
                    ${this.data.tickets.filter(t => t.category === category.name).length} tickets
                </div>
            </div>
        `).join('');
    }

    handleCreateCategory(e) {
        const nameInput = document.getElementById('categoryName');
        const descriptionInput = document.getElementById('categoryDescription');
        const colorInput = document.getElementById('categoryColor');
        const iconInput = document.getElementById('categoryIcon');
        
        if (!nameInput || !descriptionInput || !colorInput || !iconInput) {
            console.error('Create category form elements not found');
            return;
        }
        
        const name = nameInput.value.trim();
        const description = descriptionInput.value.trim();
        const color = colorInput.value;
        const icon = iconInput.value.trim() || '📁';
        
        if (!name) {
            this.showToast('Please enter a category name', 'error');
            return;
        }
        
        const newCategory = {
            id: Math.max(...this.data.categories.map(c => c.id)) + 1,
            name,
            description,
            color,
            icon
        };
        
        this.data.categories.push(newCategory);
        this.saveToStorage();
        
        this.toggleModal('createCategoryModal');
        this.showCategories();
        this.showToast('Category created successfully!', 'success');
        
        document.getElementById('createCategoryForm').reset();
    }

    // Utility Methods
    populateCategoryOptions() {
        const select = document.getElementById('ticketCategory');
        if (!select) return;
        
        select.innerHTML = '<option value="">Select Category</option>' +
            this.data.categories.map(cat => `<option value="${cat.name}">${cat.name}</option>`).join('');
    }

    populateAssigneeOptions() {
        const select = document.getElementById('ticketAssignee');
        if (!select) return;
        
        const agents = this.data.users.filter(u => u.role === 'support-agent' || u.role === 'admin');
        
        select.innerHTML = '<option value="">Unassigned</option>' +
            agents.map(agent => `<option value="${agent.id}">${agent.name}</option>`).join('');
    }

    handleFileUpload(e) {
        const files = Array.from(e.target.files);
        const placeholder = document.querySelector('.upload-placeholder');
        
        if (!placeholder) return;
        
        if (files.length > 0) {
            placeholder.innerHTML = `📎 ${files.length} file(s) selected: ${files.map(f => f.name).join(', ')}`;
        } else {
            placeholder.innerHTML = '📎 Click to upload files or drag and drop';
        }
    }

    toggleModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) {
            console.error('Modal not found:', modalId);
            return;
        }
        
        modal.classList.toggle('hidden');
        
        if (!modal.classList.contains('hidden')) {
            // Focus first input in modal
            const firstInput = modal.querySelector('input, textarea, select');
            if (firstInput) {
                setTimeout(() => firstInput.focus(), 100);
            }
        }
    }

    showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        if (!container) {
            console.error('Toast container not found');
            return;
        }
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideInRight 0.3s ease reverse';
            setTimeout(() => {
                if (container.contains(toast)) {
                    container.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }

    saveToStorage() {
        try {
            localStorage.setItem('quickdesk_data', JSON.stringify(this.data));
        } catch (e) {
            console.error('Error saving to storage:', e);
        }
    }

    loadFromStorage() {
        const stored = localStorage.getItem('quickdesk_data');
        if (stored) {
            try {
                this.data = JSON.parse(stored);
            } catch (e) {
                console.error('Error loading data from storage:', e);
            }
        }
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing QuickDesk app');
    window.quickDeskApp = new QuickDeskApp();
});