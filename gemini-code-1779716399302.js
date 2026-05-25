<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Super Secret Message</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #1a1a1a;
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            overflow: hidden;
        }
        h1 {
            margin-bottom: 20px;
        }
        .btn {
            padding: 15px 30px;
            font-size: 18px;
            background-color: #ff4757;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            position: absolute;
            transition: all 0.1s ease;
        }
    </style>
</head>
<body>

    <h1 id="headline">Click the button to see the secret prank!</h1>
    <button class="btn" id="prankBtn" style="top: 50%; left: 50%; transform: translate(-50%, -50%);">Click Me!</button>

    <script>
        const button = document.getElementById('prankBtn');
        const headline = document.getElementById('headline');

        // Function to move the button randomly when the mouse gets close
        button.addEventListener('mouseover', () => {
            // Get random positions based on the screen size
            const x = Math.random() * (window.innerWidth - button.clientWidth);
            const y = Math.random() * (window.innerHeight - button.clientHeight);
            
            // Remove center positioning properties
            button.style.transform = 'none';
            
            // Apply new random positions
            button.style.left = `${x}px`;
            button.style.top = `${y}px`;
        });

        // If they actually manage to click it
        button.addEventListener('click', () => {
            headline.innerText = "🤣 Gotcha! You actually clicked it!";
            button.style.display = 'none';
        });
    </script>
</body>
</html>
