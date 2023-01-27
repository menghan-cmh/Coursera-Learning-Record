## Course Introduction

### Introduction to the course
- Version Control is a system records changes and modifications for tracking purposes
    - centralized and distributed control systems
    - add, delete, erase
    - conflict resolution
    - git/github etc.

### How do developers collaborate in the real world?
- Learning how to ruthlessly prioritize your work
- communicating to keep track and work on the same page

## Introduction to version control

### What is version control?
- version control == source control == source code management
- keep changes -> provide access to history
- revert and roll back (to a previous status or point in time)
    - add, modify/update, delete
- benefit for a team to use version control
    - revision history: provides a recorde of all changes in project to revert to a stable point in time in cases where code edits cause issues or bugs
        - roll back, move faster, more confidence
    - identity: all changes made are always recorded with the identity of the user that made them
        - who made the change
    - collaboration
        - peer review when the code is ready for inspection
    - automation: plays an integral role and the explosion of development operation
        - track changes
            - aid in software quality
            - release and deployment
        - DevOps
            - set of practices, philosophies, and tools
            - increase ability
            - deliver applications
            - high quality and velocity
    - efficiency
        - agile methodology: tasks are planned and executed in a two-week cycle (iteration)
            - task list 
        - new features won't break any axisting flows

### Case study: how Meta engineers collaborate
- anyone can approve any change
- micro services or not

### Systems of version control and tools
- Version Control system
    - Subversion, Perforce, AWS Code Commit, Mercurial, Git
    - Centralized & Distributed
- Centralized Version Control system
    - contains a server and a client
    - Server contains the main repository that houses the full history of versions of the code base
    - developers need to pull down the code from the server to their local machine, and push the changes to the central server so that other developers can see them
    - every operation needs to have a connection to the server itself, viewing the history of changes requires that you are connected to the server
- Distributed Version Control system
    - pull code down from the server to view the latest changes
    - The key difference is that every user is essentially a server and not a client. This means that every time you pull down code from the distributed model, you have the entire history of changes on your local system
- Pros/Cons
    - pros for CVCS: easier to learn, give more access controls to users
    - cons for CVCS: slower given dut to they need to establish a connection to the server to perform any actions
    - pros for DVCS: don't need to be connected to the server to add your changes or view a file's history, only ever need to connect to the server to pull down the latest changes or to push your own changes, allows users to work in an offline state, better speed and performance
- DVCS is a key factor in improving developer operations and the software development life cycle

### A history of version control
- One of the first significant Version Control Systems was the Concurrent Versions System (CVS). CVS stores information about every file in a folder structure, including the name of the file, its location in the folder structure, who last modified it, and when it was last modified. The CVS also stores information about folders, including their names and who created them. CVS does not include integrity checks which means your data can become corrupted. When you update or submit changes to the system, if an error occurs, the system accepts the partial or corrupted files. Additionally, the system was designed mainly for text files, not binary files such as images or videos.
- The main successor to CVS was Subversion (SVN). To ensure data integrity, it included integrity checks in its design. It also supported the versioning of binary files better than CVS. Thanks to these improvements, SVN became popular in the open-source community with free hosting being offered for open-source projects by Google and SourceForge.
- Git was developed by Linus Torvalds to host the Linux kernel’s source code. Like Mercurial, it is a distributed VCS. Git became popular in the open-source community due to its distributed VCS design and Github offering free Git hosting for open-source projects. Git has since become the selected version control system for many open-source and proprietary software projects.

### Version control in professional software development
- Workflow
    - essential to ensure code is managed correctly and reduce mistakes from happening
- Continuous Integration
    - used to automate the integration of code changes from multiple developers into a single main stream
    - Using a workflow whereby small changes are merged frequently which will reduce the number of merge conflicts.
- Continuous Delivery
    - an extension of Continuous Integration
    - Once the changes have been merged into the main stream, a Continuous Delivery system automatically packages the application and prepares it for deployment
    - helps avoid human error when packaging the application. 
- Continuous Deployment
    - an extension of Continuous Delivery
    - goal: to deploy and release software to customers frequently and safely
    - strategy: automatically deploying to a test environment first to validate the deployment package and software changes

### A history of revisions
- The revision history will record the essential data points so any developer or team member can walk through the entire project from start to its current state
- Every change that has occurred on the project should be easily accessible either by a simple command or integration into the developer's IDE
- more transparent and open in the team environment
- example
    - daily report
    - experiment insights
    - overall winner
    - pull request -> peer review
    - conflict resolution

### Staging vs. Production
- Development Environments
    - set up multiple environments for different ways to test and verify to avoid iddues or bugs before releasing
    - a developer environment, a UAT or QA environment, and a staging environment. The main purpose of this flow is to find any potential issues that may arise due to changes or new features being added to the codebase.
- Staging: The staging environment should mimic your production environment, allows teams to spot or find any potential issues prior to them getting to production
    - New Features
        - Developers submitting new features along with feature flags
        - allow teams to verify that the feature works, it can be turned on and off via configuration flags and also that it does not break or interfere with existing functionality.
    - Testing
        -  a great place to run tests
        -  QA teams will normally use it to verify new features, configuration changes or software updates/patching.
        -  The types of testing covered will be Unit testing, Integration testing and performance testing
    - Migrations
        -  test and verify data migrations
        - Snapshots can be taken from production and used to test your migration scripts to confirm your changes will not break anything  
    - Configuration Changes
        - Configuration can also cause headaches for teams, especially in a large cloud-based architecture. Having a staging environment will allow you to spot any potential issues or bottlenecks.
- Production: 
    - Downtime
        - Downtime for any service especially customer facing will most likely be revenue impacting. If customers can not access or use your website or app to its full capabilities, it will most likely have a cost involved. Take for example an e-commerce company that allows users to buy goods and services online. If they release a new feature to their shopping cart which actually breaks the payment process, this will have an impact on customers not being able to buy goods online.
    - Vulnerabilities
        - Cyber-security should also play a big role in what gets released in production. Any updates to software such as patching or moving to the latest version should be checked and verified. This is also the same rule for not upgrading software when critical updates are released.
    - Reputation
        - Downtime or issues in production is damaging for a company as it does not instill confidence in end users. If something is down or broken it can cause the company to lose potential customers.

## Command Line
### Unix Commands
