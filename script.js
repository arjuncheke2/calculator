<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Calculator</title>
</head>
<body>
    <div class="container">
        <div class="calculator">
            <input type="text" id="input-box" class="form-control" disabled>
            <div class="row">
                <button class="btn btn-danger col-md-3 button-c" onclick="clearInput()">C</button>
                <button class="btn btn-secondary col-md-3 button-back" onclick="appendInput('←')">←</button>
                <button class="btn btn-secondary col-md-3 button-new" onclick="appendInput('•')">•</button>
                <button class="btn btn-secondary col-md-3 button-new" onclick="appendInput('*')">×</button>
            </div>
            <div class="row">
                <button class="btn btn-light col-md-3" onclick="appendInput('7')">7</button>
                <button class="btn btn-light col-md-3" onclick="appendInput('8')">8</button>
                <button class="btn btn-light col-md-3" onclick="appendInput('9')">9</button>
                <button class="btn btn-secondary col-md-3 button-new" onclick="appendInput('/')">/</button>
            </div>
            <div class="row">
                <button class="btn btn-light col-md-3" onclick="appendInput('4')">4</button>
                <button class="btn btn-light col-md-3" onclick="appendInput('5')">5</button>
                <button class="btn btn-light col-md-3" onclick="appendInput('6')">6</button>
                <button class="btn btn-secondary col-md-3 button-new" onclick="appendInput('-')">-</button>
            </div>
            <div class="row">
                <button class="btn btn-light col-md-3" onclick="appendInput('1')">1</button>
                <button class="btn btn-light col-md-3" onclick="appendInput('2')">2</button>
                <button class="btn btn-light col-md-3" onclick="appendInput('3')">3</button>
                <button class="btn btn-secondary col-md-3 button-new" onclick="appendInput('+')">+</button>
            </div>
            <div class="row row-last">
                <button class="btn btn-light col-md-3" onclick="appendInput('0')">0</button>
                <button class="btn btn-light col-md-3" onclick="appendInput('00')">00</button>
                <button class="btn btn-info col-md-3 button-equal" onclick="calculate()">=</button>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
