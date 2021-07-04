var nums = new Array();
    var N = prompt("How many numbers would you like to enter? ");
    N = parseInt(N);
    var i = 0, s = 0;
    for(i = 0; i <= N - 1; i++)
    {
        nums[i] = parseInt(prompt("Enter your numbers: "));
        s += nums[i];
        document.write("Number you chose: " + nums[i] + "<br />");
    }
    var ave = s / N;
    document.write("Average: " + ave + "<br />");