<template>
    <div class="pageContainer">
        <div class="innerContainer">
            <h2>Selected Works</h2>
            <p>
                Below are a few selected projects I've worked on.
                Each contains a short description, the development stack it was built in, and a few screenshots of the completed project.
                You can also click on the link at the top right of each project to navigate to the live version of the app (if available).
            </p>

            <project-detail 
            :project-images="['fleet-attack-1.png', 'fleet-attack-2.png', 'fleet-attack-3.png']"
            :project-tech="['vue']"
            project-title="Fleet Attack"
            project-desc="Built entirely on Vue, Fleet Attack uses arrays of references to DOM element 'tiles' to recreate the popular BATTLESHIP board game.
            Players position their fleet in whichever way they choose and select tiles on the enemy board to fire upon in an attempt destroy the enemy.
            The computer enemy uses a custom algorithm to select the next logical tile to fire upon based on the given board conditions."
            project-link="https://fleetattack.io"
            project-domain="fleetattack.io" />

            <project-detail 
            :project-images="['qrifile-1.png', 'qrifile-2.png', 'qrifile-3.png']"
            :project-tech="['vue', 'laravel']" 
            project-title="QRiFile"
            project-desc="Heavily integrated with AWS, QRiFile allows users to upload small files like work presentations.
            The app then generates a unique QR code and link to a page where other users can input their email and have the file automatically emailed to them as an attachment.
            QRiFile utilizes AWS SES for sending automated Emails, an S3 bucket for temporarily storing user files, and Elastic Beanstalk for the app's overall deployment."
            project-link="https://qrifile.com"
            project-domain="qrifile.com" />

            <project-detail 
            :project-images="['guest-app-1.png', 'guest-app-2.png', 'guest-app-3.png']"
            :project-tech="['vue', 'laravel']"
            disableMobile
            project-title="Guest Sign-in App"
            project-desc="Developed as a custom SaaS implementation for a popular sailing club in Sydney, Australia. This project generates temporary passes for non-member guests who are
            granted entry into the club by door staff. Within the protected admin section, authorized users can access a data table of these stored records. They may also utilize a variety of complex
            sorting and filtering features as well as the ability to export records based on those specific parameters. Finally, records may also be manually created or deleted from this UI if needed." />
        </div>
    </div>
</template>

<script>
    import ProjectDetail from './ProjectDetail.vue';

    export default {
        name: 'projectsPage',
        components: { ProjectDetail },
    }
</script>

<style scoped>
    h2 { font-size: 1.7rem}
    h2, p {
        margin: .5rem 0;
        line-height: 1.5;
    }
</style>