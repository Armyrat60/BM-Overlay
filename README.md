# BM-User-Overlay

A Tampermonkey userscript that enhances the BattleMetrics RCON panel with color coding, admin detection, and additional functionality.

## Features

- 🎨 **Color-coded events** for different types of player actions
- 👑 **Admin detection** with custom admin list support
- 📊 **Enhanced player information** with Community Ban List integration
- 🔄 **Auto-updating** from GitHub repository
- 📱 **Responsive design** that works on all screen sizes

## Installation

### Prerequisites
- [Tampermonkey](https://www.tampermonkey.net/) browser extension installed
- Access to BattleMetrics RCON panel

### Quick Install
1. Click the link below to install the userscript:
       ```
    https://raw.githubusercontent.com/Armyrat60/BM-Overlay/main/BM-User-Overlay.js
    ```
2. Tampermonkey will prompt you to install the script
3. Click "Install" to complete the installation

### Manual Install
1. Open Tampermonkey dashboard
2. Click "Create a new script"
3. Copy and paste the contents of `BM-User-Overlay.js`
4. Save the script (Ctrl+S)

## Configuration

### Admin List
The admin list is automatically loaded from the `admins.json` file. To update admins:

1. Edit the `admins.json` file in your repository
2. Push changes to GitHub
3. The userscript will automatically fetch the updated list

### Document/Button Configuration
Edit the `servers` array in the userscript to customize:
- Document/Button IDs and labels
- Documentation URLs
- Background colors for buttons

## Auto-Updates

This userscript is configured to automatically update from GitHub. The update process:

1. **Version Management**: Automatically increments version numbers
2. **GitHub Releases**: Creates new releases for each update
3. **Admin List Updates**: Automatically updates timestamps
4. **Tampermonkey Integration**: Uses `@updateURL` and `@downloadURL` for seamless updates

### Update Workflow
- Push changes to the `main` branch
- GitHub Actions automatically:
  - Increments version number
  - Updates timestamps
  - Creates a new release
  - Commits changes back to repository

## File Structure

```
├── BM-User-Overlay.js              # Main userscript file
├── admins.json                     # Admin list configuration
├── .github/workflows/              # GitHub Actions workflows
│   └── update-userscript.yml      # Auto-update workflow
├── update-userscript.js            # Local version update script
├── package.json                    # Node.js project configuration
├── INSTALL.md                      # Quick installation guide
└── README.md                       # This file
```

## Development

### Local Testing
1. Clone the repository
2. Make changes to the userscript
3. Test in Tampermonkey with local file
4. Push changes to trigger auto-update

### Adding New Features
1. Edit the userscript file
2. Update version number if needed
3. Push to GitHub
4. Changes automatically deploy

## Troubleshooting

### Script Not Loading
- Check Tampermonkey is enabled
- Verify script matches BattleMetrics URLs
- Check browser console for errors

### Updates Not Working
- Ensure GitHub repository is public
- Check `@updateURL` points to correct repository
- Verify file paths in GitHub URLs

### Admin List Issues
- Check `admins.json` syntax
- Verify GitHub repository permissions
- Check browser console for fetch errors

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues or questions:
- Create a GitHub issue
- Check the troubleshooting section
- Review recent releases for fixes

## Changelog

### Version 2.4
- Initial GitHub integration
- Auto-update functionality
- Admin list management
- Enhanced error handling

---

**Note**: This userscript is now hosted at [https://github.com/Armyrat60/BM-Overlay](https://github.com/Armyrat60/BM-Overlay)
