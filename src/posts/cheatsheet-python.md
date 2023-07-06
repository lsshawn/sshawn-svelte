# Python

## Anaconda

### Rename anaconda env

https://stackoverflow.com/questions/42231764/how-can-i-rename-a-conda-environment

```
conda create --name new_name --clone old_name
conda remove --name old_name --all # or its alias: `conda env remove --name old_name
```

### Installing PyPi package

https://stackoverflow.com/questions/29286624/how-to-install-pypi-packages-using-anaconda-conda-command#45361152

```
conda skeleton pypi package
conda build package
```

## Virtual env

```
# create virtual env with specific python version
virtualenv -p /usr/bin/python backtest-python

source ./bin/activate

deactivate
```

## Zipline

Zipline only works with Python3.5.



