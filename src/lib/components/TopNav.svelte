<script>
    import { page } from '$app/stores';
    $: basePath = $page.url.pathname.split('/')[1];

    const tabs = [
        {
            title: 'Home',
            route: '/'
        },
        {
            title: 'Now',
            route: 'now'
        },
        {
            title: 'Books',
            route: 'books'
        },
        {
            title: 'About',
            route: 'about'
        }
    ];
</script>

<nav class="navbar bg-base-100">
    <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl" href="/">
            <img
                src="https://res.cloudinary.com/cupbots/image/upload/w_70,f_auto/v1656947127/sshawn-logo.png"
                class="w-12 aspect-square"
                alt="SShawn"
            />
            SShawn
        </a>
    </div>
    <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal p-0">
            {#each tabs as tab}
                <li>
                    <a
                        href={tab.route}
                        sveltekit:prefetch
                        class:active={basePath === tab.route.replace('/', '')}
                        class="font-bold text-xl w-48 justify-center
                        ">{tab.title}</a
                    >
                </li>
            {/each}
        </ul>
    </div>
</nav>
