import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>RegmagiK Registry Editor</h1>
    <p>RegmagiK is advanced Windows Registry editor. Familiar regedit user interface with unique enhancements like fast search, drag-n-drop, autocomplete address bar, and integration with Windows Explorer make it great power user's tool. 
	</p>
<h2>Drag and drop support</h2>
	<p>Create shortcuts to any Registry key or value on desktop - Drag-n-drop (or cut and paste) selected keys or values 
		- Search for all matches  - Go to registry path given as a string. Very convenient when you read instructions about doing something in registry. Just select registry path and copy it to clipboard. Then open RegmagiK and press 'Ctrl+G' or click on 'Go to Key' toolbar button - Bookmarks menu including existing Windows XP regedit Favorites - Remove invalid keys to speed up your PC  </p>

<h2>Regedit features support</h2>
<p>
You can use RegmagiK even if access to the standard regedit is disabled by your administrator.
</p>
<p>These standard regedit features are available:  
- Add, change, delete keys and values of different types
- Export selected registry key to .reg file
- Manage Security, edit registry key access permissions
- Save and Load registry keys to/from Hives
</p>

	<h2>Smart value detection</h2>
    <p>RegmagiK automatically detects when registry values include the path to file system files or folders and displays a <i>yellow folder icon</i>. This allows you to open corresponding folder in a single click.</p>
    <p>RegmagiK automatically detects when registry values include the GUID (Globally Unique Identifiers, often used in Windows and elsewhere) and displays a <i>blue folder icon</i>. This allows you to go to GUID or CLSID (class identifiers often used in Windows) definition in a single click. If the definition is not found in the standard Registry location, RegmagiK will prompt you to search Registry for it.</p>
    <img
      src="/screenshots/regmagik.png"
      width={780}
      height={508}
      alt="RegmagiK screenshot"
      style={{ marginBottom: `1.45rem` }}
    />
    <h2>
	One of RegmagiK users wrote this review:
	</h2><p>
"I would like to thank you Boris for writing this wonderful RegmagiK software. It has helped me to resolve many registry problems I have had on my computer. I discovered your software by search when my computer was infected by a nasty virus. This virus had locked me out of my registry and modified data to keep me from running virus scans. I new the only solution would be a third party software to grant me access to my registry. After discovering this wonderful software, I was able access my registry and make the changes needed to return my computer to an operable state and successfully remove the virus. This is only one of it's near infinite abilities. One of my favorite features is the ability to bookmark important keys for near instant access. This prevents hours of searching for a key who's location you had forgotten. I strongly recommend this software to any registry enthusiast. Thank you for giving this software to the world.
</p><p>

Best Regards,
</p><p>

Shaun"
</p>
<p>
      <Link to="/downloads/">Go to Downloads page</Link> <br />
      <Link to="/about/">About this site</Link>
    </p>
  </Layout>
)

export default IndexPage
