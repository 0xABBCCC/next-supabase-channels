# NextJS x Supabase Full-Stack demo
Small NextJS x Supabase Full-Stack demo application that reads channels from a database, renders them and then the user has the ability to click on the channel and find more information. (Includes Metadata Integration)

## Setup
1.  Setup .env.local file
    ```bash
    NEXT_PUBLIC_SUPABASE_URL=
    NEXT_PUBLIC_SUPABASE_KEY=
    NEXT_PUBLIC_BASE_URL=http://localhost:3000
    ```

2.  a. Create Supabase Table with name `channels`
    ```bash
    id: uuid (unique) (default_function), name: text, created_at: now() (default)
    ```
    b. Allow all policies (DELETE, INSERT, UPDATE etc..)

3.  Install dependencies
    ```bash
    npm install
    ```

4.  Run dev
    ```bash
    npm run dev
    ```

## API
1. Get Channel List = `~/api/channels/list` (GET)
2. Create New Channel = `~/api/channels/create` (POST) (JSON BODY: `{ "channelName": "your-channel-name" }`)
3. Get Channel Info = `~/api/channels/get` (POST) (JSON BODY: `{ "id": "your uuid id from table" }`)