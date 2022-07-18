from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in hijiridateconfig/__init__.py
from hijiridateconfig import __version__ as version

setup(
	name="hijiridateconfig",
	version=version,
	description="Adding hijiri date to screen where needed base on country need",
	author="Mohammed Alnozili",
	author_email="malnoziliye@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
